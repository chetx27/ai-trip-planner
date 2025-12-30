# AI Trip Planner ✈️

A modern, AI-powered trip planner built with React and Google AI Studio. Plan your perfect trip with customizable modes (student, family, business), transportation options, and accommodation choices. Features a sleek 3D UI and intelligent itinerary generation.

![React](https://img.shields.io/badge/React-19.2.3-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-black)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.26-pink)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Features

- **Customizable Modes:** Choose between student, family, or business modes for tailored recommendations
- **Transportation Options:** Select train, road, bus, or cab for your journey
- **Accommodation Choices:** Pick from hostel, motel, hotel, or luxury hotel
- **3D UI:** A visually stunning 3D interface for an immersive experience
- **AI-Powered Itinerary:** Generate detailed, personalized itineraries with Google AI Studio (Gemini API)
- **User-Friendly Design:** Clean, modern UI with intuitive navigation
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Generation:** Get instant trip suggestions powered by AI

---

## 🛠️ Tech Stack

- **Frontend:** React 19.2.3
- **3D Graphics:** React Three Fiber, Three.js
- **Animation:** Framer Motion
- **AI Integration:** Google AI Studio (Gemini API)
- **Styling:** Tailwind CSS
- **Testing:** React Testing Library, Jest
- **Deployment:** GitHub Pages, Vercel, or Netlify

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/chetx27/ai-trip-planner.git
cd ai-trip-planner
```

### Step 2: Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### Step 3: Set Up Environment Variables

1. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

2. Get your Google AI Studio API key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Create a new API key
   - Copy the API key

3. Add your API key to the `.env` file:

```env
REACT_APP_GOOGLE_AI_API_KEY=your_api_key_here
```

### Step 4: Run the Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## 🎯 Usage

1. **Enter Your Destination:** Type in where you want to go
2. **Select Trip Duration:** Choose how many days you plan to travel
3. **Choose Travel Mode:** Pick student, family, or business mode
4. **Select Transportation:** Choose your preferred mode of transport
5. **Pick Accommodation:** Select your accommodation type
6. **Generate Itinerary:** Click generate and let AI create your perfect trip plan!

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Add your environment variables
5. Deploy!

### Deploy to Netlify

1. Build the project:

```bash
npm run build
```

2. Deploy the `build` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
"homepage": "https://chetx27.github.io/ai-trip-planner",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:

```bash
npm run deploy
```

---

## 📸 Screenshots

_Add screenshots of your application here_

---

## 🧪 Running Tests

```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Chet**

- GitHub: [@chetx27](https://github.com/chetx27)
- Project Link: [https://github.com/chetx27/ai-trip-planner](https://github.com/chetx27/ai-trip-planner)

---

## 🙏 Acknowledgments

- Google AI Studio for the Gemini API
- React Three Fiber for amazing 3D capabilities
- Framer Motion for smooth animations
- All contributors who help improve this project

---

## 📞 Support

If you have any questions or need help, please:
- Open an [issue](https://github.com/chetx27/ai-trip-planner/issues)
- Star ⭐ this repository if you find it helpful!

---

**Made with ❤️ by Chet**