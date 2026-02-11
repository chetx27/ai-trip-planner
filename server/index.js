const http = require('http');
const { URL } = require('url');

const PORT = process.env.PORT || 5000;

const json = (res, status, payload) => {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(payload));
};

const buildPrompt = ({ destination, days, budget, travelStyle }) => `Create a ${days}-day trip itinerary for ${destination}.\nBudget level: ${budget}.\nTravel style: ${travelStyle}.\nRespond with JSON in this shape:\n{\n  "summary": "short summary",\n  "days": [\n    {"day": 1, "title": "...", "activities": ["...", "..."]}\n  ],\n  "tips": ["...", "..."]\n}`;

async function getCoordinates(destination) {
  const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(destination)}&count=1&language=en&format=json`;
  const response = await fetch(geocodeUrl);
  if (!response.ok) throw new Error('Unable to fetch destination coordinates.');
  const data = await response.json();
  const result = data?.results?.[0];
  if (!result) throw new Error('Destination not found. Try a bigger city name.');
  return {
    name: result.name,
    country: result.country,
    latitude: result.latitude,
    longitude: result.longitude,
  };
}

async function getWeather(latitude, longitude) {
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`;
  const response = await fetch(weatherUrl);
  if (!response.ok) throw new Error('Unable to fetch weather.');
  const data = await response.json();
  return {
    temperature: data?.current?.temperature_2m,
    weatherCode: data?.current?.weather_code,
  };
}

async function generateWithGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      summary: 'Sample itinerary generated in local mode (no GEMINI_API_KEY configured).',
      days: [
        { day: 1, title: 'Arrival + Local Discovery', activities: ['Check in', 'Explore the old town', 'Dinner at a local restaurant'] },
        { day: 2, title: 'Culture + Highlights', activities: ['Visit top attractions', 'Museum or cultural site', 'Sunset viewpoint'] },
        { day: 3, title: 'Leisure + Departure', activities: ['Morning market walk', 'Cafe break', 'Pack and depart'] },
      ],
      tips: ['Book major attractions in advance.', 'Keep one flexible block each day for rest.'],
    };
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error: ${errorText}`);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error('Gemini returned an empty response.');

  const jsonStart = rawText.indexOf('{');
  const jsonEnd = rawText.lastIndexOf('}');
  if (jsonStart === -1 || jsonEnd === -1) throw new Error('Gemini response was not valid JSON.');

  return JSON.parse(rawText.slice(jsonStart, jsonEnd + 1));
}

const readBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  if (!chunks.length) return {};
  const raw = Buffer.concat(chunks).toString('utf8');
  return JSON.parse(raw);
};

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    return json(res, 204, {});
  }

  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);

  if (req.method === 'GET' && parsedUrl.pathname === '/api/health') {
    return json(res, 200, { status: 'ok', service: 'ai-trip-planner-api' });
  }

  if (req.method === 'POST' && parsedUrl.pathname === '/api/plan') {
    try {
      const body = await readBody(req);
      const { destination, days = 3, budget = 'mid-range', travelStyle = 'balanced' } = body;

      if (!destination || typeof destination !== 'string') {
        return json(res, 400, { error: 'Destination is required.' });
      }

      const location = await getCoordinates(destination);
      const weather = await getWeather(location.latitude, location.longitude);
      const prompt = buildPrompt({ destination: location.name, days, budget, travelStyle });
      const itinerary = await generateWithGemini(prompt);

      return json(res, 200, {
        destination: `${location.name}, ${location.country}`,
        weather,
        itinerary,
        generatedAt: new Date().toISOString(),
      });
    } catch (error) {
      return json(res, 500, { error: error.message || 'Failed to generate trip plan.' });
    }
  }

  return json(res, 404, { error: 'Route not found.' });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});
