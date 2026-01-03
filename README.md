# AI Trip Planner

<div align="center">

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-000000?style=flat-square&logo=three.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.26-FF0055?style=flat-square&logoColor=white)
![Google AI](https://img.shields.io/badge/Google%20AI-Gemini-4285F4?style=flat-square&logo=google&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**An intelligent, AI-powered travel planning application built with modern web technologies**

Leverage the power of artificial intelligence to create personalized travel itineraries with real-time suggestions, customizable preferences, and an immersive 3D user interface.

[View Demo](#demo) · [Report Bug](https://github.com/chetx27/ai-trip-planner/issues) · [Request Feature](https://github.com/chetx27/ai-trip-planner/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Architecture](#architecture)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## Overview

AI Trip Planner is a sophisticated web application that combines artificial intelligence with modern frontend technologies to deliver personalized travel itineraries. The application utilizes Google's Gemini AI API to generate intelligent travel recommendations based on user preferences, budget constraints, and travel styles.

### Demo

> **Live Demo**: [Coming Soon]
>
> **Screenshot Placeholder**: Add your application screenshots to the `docs/` directory and update the links below.

```markdown
![Application Dashboard](./docs/screenshots/dashboard.png)
![Itinerary Generation](./docs/screenshots/itinerary.png)
![3D Interface](./docs/screenshots/3d-interface.png)
```

### Key Highlights

**Intelligent Planning**  
Advanced AI algorithms analyze your preferences to create optimized travel itineraries tailored to your specific needs, whether you're a budget-conscious student, a family on vacation, or a business professional.

**Immersive Experience**  
A cutting-edge 3D interface powered by Three.js and React Three Fiber provides an engaging and interactive user experience with smooth animations and modern design patterns.

**Highly Customizable**  
Choose from multiple travel modes, transportation options, and accommodation types to match your exact requirements and budget constraints.

**Performance Optimized**  
Built with modern React practices, code splitting, and efficient rendering techniques to ensure fast load times and responsive interactions.

---

## Key Features

### Core Capabilities

#### Travel Mode Customization
- **Student Mode**: Budget-friendly options focusing on hostels, public transportation, and free activities
- **Family Mode**: Family-oriented accommodations, child-friendly activities, and convenient transportation
- **Business Mode**: Premium hotels, efficient routes, and professional amenities

#### Transportation Flexibility
- Train: Scenic routes and eco-friendly travel
- Road Trip: Freedom and flexibility with detailed route planning
- Bus: Cost-effective long-distance travel
- Cab/Taxi: Door-to-door convenience and comfort

#### Accommodation Options
- Hostel: Social atmosphere and budget-friendly
- Motel: Convenient roadside lodging
- Hotel: Comfortable mid-range accommodations
- Luxury Hotel: Premium amenities and five-star service

### Technical Features

**AI-Powered Intelligence**  
Integration with Google Gemini API enables natural language processing and context-aware itinerary generation with intelligent suggestions.

**3D Visualization**  
Interactive three-dimensional elements create an immersive planning experience, making travel planning more engaging and intuitive.

**Fluid Animations**  
Framer Motion library provides smooth transitions and micro-interactions that enhance user engagement and interface responsiveness.

**Responsive Design**  
Mobile-first approach ensures optimal experience across all devices, from smartphones to desktop computers.

**Accessibility Compliant**  
Follows WCAG 2.1 guidelines to ensure the application is usable by people with diverse abilities.

**Comprehensive Testing**  
Robust test coverage using Jest and React Testing Library ensures reliability and maintainability.

---

## Technology Stack

### Frontend Framework
- **React 19.2.3**: Latest React features including concurrent rendering and automatic batching
- **React Hooks**: Modern state management with useState, useEffect, useContext, and custom hooks

### 3D Graphics & Animation
- **React Three Fiber**: React renderer for Three.js enabling declarative 3D scenes
- **Three.js 0.182.0**: Industry-standard 3D graphics library
- **@react-three/drei**: Useful helpers and abstractions for React Three Fiber
- **Framer Motion 12.23.26**: Production-ready motion library for React

### AI & Backend
- **Google Gemini API**: Advanced large language model for intelligent itinerary generation
- **Google AI Studio**: Development platform for AI model integration

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Custom CSS Modules**: Component-scoped styling for specific use cases

### Development Tools
- **Create React App / Vite**: Modern build tooling with hot module replacement
- **ESLint**: Code quality and consistency enforcement
- **Prettier**: Automated code formatting

### Testing & Quality
- **Jest**: JavaScript testing framework with coverage reporting
- **React Testing Library**: Component testing with user-centric approach
- **Testing Library User Event**: Realistic user interaction simulation

### Deployment Platforms
- **Vercel**: Serverless deployment with automatic optimizations
- **Netlify**: Continuous deployment with edge functions
- **GitHub Pages**: Static site hosting with custom domains

---

## Getting Started

### Prerequisites

Ensure your development environment meets the following requirements:

```bash
Node.js: v16.0.0 or higher
npm: v7.0.0 or higher
Git: Latest stable version
```

**Verify your installation:**

```bash
node --version
npm --version
git --version
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/chetx27/ai-trip-planner.git
cd ai-trip-planner
```

**2. Install dependencies**

```bash
npm install
```

This will install all required packages listed in `package.json`, including React, Three.js, Framer Motion, and development dependencies.

**3. Set up environment variables**

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration (see [Configuration](#configuration) section).

**4. Start the development server**

```bash
npm start
```

The application will launch at `http://localhost:3000` and automatically open in your default browser.

### Configuration

#### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Google AI API Configuration
REACT_APP_GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# API Settings
REACT_APP_API_TIMEOUT=30000
REACT_APP_MAX_RETRIES=3

# Application Settings
REACT_APP_DEFAULT_DESTINATION=Paris
REACT_APP_MIN_TRIP_DAYS=1
REACT_APP_MAX_TRIP_DAYS=30

# Feature Flags
REACT_APP_ENABLE_3D_INTERFACE=true
REACT_APP_ENABLE_ANALYTICS=false
```

#### Obtaining Google AI API Key

1. Navigate to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key" or "Get API Key"
4. Copy the generated API key
5. Paste it into your `.env` file as `REACT_APP_GOOGLE_AI_API_KEY`

**Security Note**: Never commit your `.env` file to version control. The `.gitignore` file is configured to exclude it.

---

## Usage Guide

### Planning Your First Trip

**Step 1: Enter Destination**  
Input your desired travel destination using the search field. The application supports cities, countries, and specific landmarks.

**Step 2: Configure Trip Duration**  
Select the number of days for your trip using the date picker or slider (1-30 days).

**Step 3: Choose Travel Mode**  
Select the mode that best fits your travel style:
- Student: Optimized for budget travelers
- Family: Designed for group travel with children
- Business: Focused on efficiency and comfort

**Step 4: Select Transportation**  
Choose your preferred mode of transportation based on your destination and preferences.

**Step 5: Pick Accommodation Type**  
Select accommodation that matches your budget and comfort requirements.

**Step 6: Generate Itinerary**  
Click the generate button to receive your AI-powered personalized itinerary with day-by-day plans, activities, and recommendations.

### Example Scenarios

#### Scenario 1: Student Backpacking Trip
```
Destination: Barcelona, Spain
Duration: 7 days
Travel Mode: Student
Transportation: Bus & Walking
Accommodation: Hostel
Budget: $500-700

Generated Output:
- Walking tours of Gothic Quarter and La Rambla
- Budget-friendly tapas restaurants
- Free beach days at Barceloneta
- Hostel recommendations near city center
- Public transportation tips and passes
```

#### Scenario 2: Family Vacation
```
Destination: Tokyo, Japan
Duration: 10 days
Travel Mode: Family
Transportation: Train (JR Pass)
Accommodation: Family Hotel

Generated Output:
- Kid-friendly attractions (DisneySea, TeamLab)
- Family restaurants with English menus
- Hotels with family rooms and amenities
- Efficient train routes between attractions
- Cultural experiences suitable for children
```

#### Scenario 3: Business Conference Trip
```
Destination: Singapore
Duration: 4 days
Travel Mode: Business
Transportation: Cab/Taxi
Accommodation: Luxury Hotel

Generated Output:
- Hotels near business districts
- Fine dining recommendations
- Efficient transportation routes
- Professional meeting spaces
- Evening networking venues
```

---

## Architecture

### Project Structure

```
ai-trip-planner/
├── public/
│   ├── index.html              # HTML template
│   ├── manifest.json           # PWA manifest
│   └── assets/                 # Static assets
│       ├── images/
│       └── icons/
│
├── src/
│   ├── components/             # React components
│   │   ├── common/            # Reusable components
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   └── Card/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Sidebar/
│   │   ├── features/          # Feature-specific components
│   │   │   ├── TripPlanner/
│   │   │   ├── Itinerary/
│   │   │   └── 3DInterface/
│   │   └── forms/             # Form components
│   │       ├── DestinationForm/
│   │       └── PreferencesForm/
│   │
│   ├── services/              # API and external services
│   │   ├── api/
│   │   │   ├── geminiApi.js   # Google AI integration
│   │   │   └── config.js      # API configuration
│   │   └── storage/           # Local storage utilities
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useItinerary.js
│   │   ├── useGeolocation.js
│   │   └── use3DAnimation.js
│   │
│   ├── contexts/              # React Context providers
│   │   ├── TripContext.js
│   │   └── ThemeContext.js
│   │
│   ├── utils/                 # Utility functions
│   │   ├── validators.js      # Form validation
│   │   ├── formatters.js      # Data formatting
│   │   └── constants.js       # Application constants
│   │
│   ├── styles/                # Global styles
│   │   ├── globals.css
│   │   ├── tailwind.css
│   │   └── themes/
│   │
│   ├── tests/                 # Test files
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   │
│   ├── App.js                 # Root component
│   ├── App.test.js            # App tests
│   └── index.js               # Application entry point
│
├── docs/                      # Documentation
│   ├── screenshots/
│   ├── api-documentation.md
│   └── component-guide.md
│
├── .env.example               # Environment template
├── .eslintrc.js               # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── CONTRIBUTING.md            # Contribution guidelines
├── LICENSE                    # MIT License
└── README.md                  # This file
```

### Component Architecture

**Atomic Design Principles**  
Components are organized following atomic design methodology: atoms (buttons, inputs), molecules (form groups), organisms (complete forms), templates (page layouts), and pages (complete views).

**State Management**  
React Context API for global state management, with local state for component-specific data. Custom hooks encapsulate complex state logic.

**Code Splitting**  
React.lazy and Suspense for route-based code splitting, reducing initial bundle size and improving load performance.

---

## API Integration

### Google Gemini API

The application integrates with Google's Gemini API to generate intelligent travel itineraries.

**API Service Structure:**

```javascript
// src/services/api/geminiApi.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_AI_API_KEY);

export const generateItinerary = async (tripDetails) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  const prompt = constructPrompt(tripDetails);
  const result = await model.generateContent(prompt);
  
  return parseItinerary(result.response.text());
};
```

**Prompt Engineering:**

The application uses carefully crafted prompts to ensure high-quality, relevant responses:

```javascript
const constructPrompt = ({ destination, days, mode, transport, accommodation }) => {
  return `Create a detailed ${days}-day travel itinerary for ${destination}.
  
Travel Style: ${mode}
Transportation: ${transport}
Accommodation: ${accommodation}

Please provide:
1. Day-by-day detailed schedule
2. Recommended activities and attractions
3. Estimated costs for each activity
4. Transportation between locations
5. Dining recommendations
6. Practical tips and local insights

Format the response as structured JSON for easy parsing.`;
};
```

**Error Handling:**

Robust error handling ensures graceful degradation:

```javascript
try {
  const itinerary = await generateItinerary(tripDetails);
  return itinerary;
} catch (error) {
  if (error.status === 429) {
    // Rate limit exceeded
    throw new Error('Too many requests. Please try again later.');
  } else if (error.status === 401) {
    // Invalid API key
    throw new Error('Invalid API key. Please check your configuration.');
  } else {
    // Generic error
    throw new Error('Failed to generate itinerary. Please try again.');
  }
}
```

---

## Deployment

### Vercel Deployment (Recommended)

**Method 1: One-Click Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/chetx27/ai-trip-planner)

**Method 2: CLI Deployment**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

**Method 3: Git Integration**

1. Import your GitHub repository in Vercel dashboard
2. Configure environment variables in project settings
3. Deploy automatically on every push to main branch

**Environment Variables in Vercel:**
- Navigate to Project Settings > Environment Variables
- Add `REACT_APP_GOOGLE_AI_API_KEY` and other variables
- Redeploy to apply changes

### Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the project
npm run build

# Deploy to production
netlify deploy --prod --dir=build
```

**Netlify Configuration File (netlify.toml):**

```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "16"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages Deployment

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add scripts to package.json
"homepage": "https://chetx27.github.io/ai-trip-planner",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:16-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build Docker image
docker build -t ai-trip-planner .

# Run container
docker run -p 80:80 ai-trip-planner
```

---

## Testing

### Test Structure

```bash
# Run all tests
npm test

# Run tests with coverage report
npm test -- --coverage --watchAll=false

# Run tests in watch mode (development)
npm test -- --watch

# Run specific test file
npm test -- TripPlanner.test.js

# Update snapshots
npm test -- -u
```

### Test Coverage Goals

| Type | Target | Current |
|------|--------|---------|
| Unit Tests | >80% | TBD |
| Integration Tests | >70% | TBD |
| E2E Tests | Critical Paths | TBD |

### Example Test Cases

**Component Testing:**

```javascript
// src/components/TripPlanner/TripPlanner.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TripPlanner from './TripPlanner';

describe('TripPlanner Component', () => {
  test('renders trip planner form', () => {
    render(<TripPlanner />);
    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    render(<TripPlanner />);
    const submitButton = screen.getByRole('button', { name: /generate/i });
    fireEvent.click(submitButton);
    
    expect(await screen.findByText(/destination is required/i)).toBeInTheDocument();
  });
});
```

**API Testing:**

```javascript
// src/services/api/geminiApi.test.js
import { generateItinerary } from './geminiApi';

describe('Gemini API Service', () => {
  test('generates itinerary successfully', async () => {
    const tripDetails = {
      destination: 'Paris',
      days: 5,
      mode: 'student',
      transport: 'train',
      accommodation: 'hostel'
    };

    const itinerary = await generateItinerary(tripDetails);
    expect(itinerary).toHaveProperty('days');
    expect(itinerary.days).toHaveLength(5);
  });
});
```

### Continuous Integration

**GitHub Actions Workflow:**

```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - run: npm ci
      - run: npm test -- --coverage
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

---

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, improving documentation, or proposing new features, your input is valuable.

### How to Contribute

**1. Fork the Repository**

Click the "Fork" button at the top right of the repository page.

**2. Clone Your Fork**

```bash
git clone https://github.com/YOUR_USERNAME/ai-trip-planner.git
cd ai-trip-planner
```

**3. Create a Feature Branch**

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-weather-integration`
- `bugfix/fix-itinerary-parsing`
- `docs/improve-setup-guide`

**4. Make Your Changes**

- Write clean, readable code
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed

**5. Commit Your Changes**

```bash
git add .
git commit -m "feat: add weather integration for destinations"
```

**Commit Message Convention:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

**6. Push to Your Fork**

```bash
git push origin feature/your-feature-name
```

**7. Submit a Pull Request**

- Go to the original repository
- Click "New Pull Request"
- Select your feature branch
- Provide a clear description of your changes
- Link any related issues

### Development Guidelines

**Code Style**
- Use ESLint and Prettier configurations provided
- Write self-documenting code with clear variable names
- Add comments for complex logic
- Keep functions small and focused

**Testing Requirements**
- Add unit tests for new utilities and functions
- Add component tests for new UI components
- Ensure all tests pass before submitting PR
- Maintain or improve code coverage

**Documentation**
- Update README.md if adding features
- Add JSDoc comments for complex functions
- Update API documentation if changing integrations
- Include usage examples for new features

### Code Review Process

1. Automated tests must pass
2. Code review by maintainers
3. Address feedback and requested changes
4. Final approval and merge

### Community Guidelines

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)

---

## Roadmap

### Version 1.1 (Q1 2026)
- [ ] Save and export itineraries as PDF
- [ ] User authentication and profile management
- [ ] Itinerary sharing via unique links
- [ ] Weather forecast integration
- [ ] Currency converter for budget planning

### Version 1.2 (Q2 2026)
- [ ] Multi-destination trip planning
- [ ] Interactive map visualization with routes
- [ ] Budget tracker and expense management
- [ ] Collaborative trip planning
- [ ] Mobile application (React Native)

### Version 2.0 (Q3 2026)
- [ ] AI-powered travel recommendations based on history
- [ ] Integration with booking platforms (hotels, flights)
- [ ] Real-time travel alerts and notifications
- [ ] Offline mode with local storage
- [ ] Social features: Share experiences and reviews

### Future Considerations
- [ ] Integration with calendar applications
- [ ] Virtual tour experiences with VR
- [ ] Machine learning for personalized suggestions
- [ ] Multi-language support
- [ ] Voice-controlled interface

**Feature Requests**  
Have an idea? [Submit a feature request](https://github.com/chetx27/ai-trip-planner/issues/new?template=feature_request.md)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**MIT License Summary:**
- Commercial use allowed
- Modification allowed
- Distribution allowed
- Private use allowed
- Liability and warranty disclaimers apply

---

## Contact

**Chethana G (Chet)**

- **GitHub**: [@chetx27](https://github.com/chetx27)
- **Email**: chethana.workspace@gmail.com
- **Project Repository**: [AI Trip Planner](https://github.com/chetx27/ai-trip-planner)

**Project Links:**
- [Report Bug](https://github.com/chetx27/ai-trip-planner/issues/new?template=bug_report.md)
- [Request Feature](https://github.com/chetx27/ai-trip-planner/issues/new?template=feature_request.md)
- [Discussions](https://github.com/chetx27/ai-trip-planner/discussions)
- [Documentation](./docs)

---

## Acknowledgments

This project was built with the help of amazing open-source tools and platforms:

**AI & APIs**
- [Google AI Studio](https://makersuite.google.com/) - Gemini API for intelligent itinerary generation
- [Google Generative AI](https://www.npmjs.com/package/@google/generative-ai) - Official SDK

**Frontend Libraries**
- [React](https://react.dev/) - Component-based UI library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Three.js](https://threejs.org/) - 3D graphics library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

**UI & Styling**
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

**Development Tools**
- [Create React App](https://create-react-app.dev/) - React application bootstrap
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [React Testing Library](https://testing-library.com/react) - Component testing utilities

**Deployment & Hosting**
- [Vercel](https://vercel.com/) - Frontend deployment platform
- [Netlify](https://www.netlify.com/) - Web hosting platform
- [GitHub Pages](https://pages.github.com/) - Static site hosting

**Community**
- All contributors who have helped improve this project
- The React and Three.js communities for excellent documentation
- Open source maintainers whose work made this possible

---

## Support

### Getting Help

**Documentation**
- [Installation Guide](#getting-started)
- [Usage Guide](#usage-guide)
- [API Documentation](./docs/api-documentation.md)
- [Component Guide](./docs/component-guide.md)

**Community Support**
- [GitHub Discussions](https://github.com/chetx27/ai-trip-planner/discussions) - Ask questions and share ideas
- [Issue Tracker](https://github.com/chetx27/ai-trip-planner/issues) - Report bugs and track progress

**Bug Reports**  
Found a bug? Please [create an issue](https://github.com/chetx27/ai-trip-planner/issues/new?template=bug_report.md) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node version)

**Feature Requests**  
Have an idea? [Submit a feature request](https://github.com/chetx27/ai-trip-planner/issues/new?template=feature_request.md) with:
- Clear description of the feature
- Use case and benefits
- Proposed implementation (if applicable)

### Show Your Support

If this project helped you, please consider:

**Star the Repository**  
Give a ⭐ on [GitHub](https://github.com/chetx27/ai-trip-planner)

**Share with Others**  
Spread the word on social media and developer communities

**Contribute**  
Submit pull requests to improve the project

**Sponsor**  
Support ongoing development (coming soon)

---

<div align="center">

**Built with passion by [Chethana G](https://github.com/chetx27)**

*Empowering travelers with intelligent planning tools*

[![GitHub Stars](https://img.shields.io/github/stars/chetx27/ai-trip-planner?style=social)](https://github.com/chetx27/ai-trip-planner)
[![GitHub Forks](https://img.shields.io/github/forks/chetx27/ai-trip-planner?style=social)](https://github.com/chetx27/ai-trip-planner)

[Back to Top](#ai-trip-planner)

</div>
