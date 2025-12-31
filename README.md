# AI Trip Planner ✈️

<div align="center">

![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-black?style=for-the-badge&logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.26-pink?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://github.com/chetx27/ai-trip-planner)

**A modern, AI-powered trip planner built with React and Google AI Studio**

Plan your perfect trip with customizable modes, transportation options, and intelligent itinerary generation

[Demo](#-demo) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing)

</div>

---

## 🎥 Demo

> **Note:** Add a demo GIF or screenshot here to showcase your app!
> 
> Example:
> ```markdown
> ![AI Trip Planner Demo](./docs/demo.gif)
> ```
> 
> **Quick Demo Setup:**
> 1. Record a screen capture using [OBS Studio](https://obsproject.com/) or similar
> 2. Convert to GIF using [ezgif.com](https://ezgif.com/)
> 3. Add to `docs/` folder and update the link above

### ✨ What Makes This Special?

- 🎯 **Smart Itineraries**: AI-powered trip planning tailored to your preferences
- 🌍 **Flexible Options**: Customize by travel mode, budget, and accommodation
- 🎨 **Stunning 3D UI**: Immersive interface with Three.js and React Three Fiber
- ⚡ **Lightning Fast**: Instant generation with optimized performance
- 📱 **Fully Responsive**: Perfect experience on any device

---

## 🚀 Features

### Core Functionality
- ✅ **Customizable Travel Modes**
  - 🎓 Student Mode: Budget-friendly options and hostels
  - 👨‍👩‍👧‍👦 Family Mode: Family-friendly activities and accommodations
  - 💼 Business Mode: Professional stays and efficient itineraries

- ✅ **Transportation Options**
  - 🚂 Train
  - 🚗 Road Trip
  - 🚌 Bus
  - 🚕 Cab/Taxi

- ✅ **Accommodation Choices**
  - 🏠 Hostel
  - 🏨 Motel
  - 🏩 Hotel
  - ⭐ Luxury Hotel

### Technical Features
- 🤖 **AI-Powered**: Google Gemini API integration for intelligent suggestions
- 🎭 **3D Interface**: Interactive 3D elements with React Three Fiber
- 🎬 **Smooth Animations**: Framer Motion for fluid transitions
- 🎨 **Modern Design**: Clean UI with Tailwind CSS
- 🧪 **Well Tested**: Comprehensive test coverage with Jest and RTL
- ♿ **Accessible**: WCAG 2.1 compliant design

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend Framework** | React 19.2.3 |
| **3D Graphics** | React Three Fiber, Three.js 0.182.0, @react-three/drei |
| **Animations** | Framer Motion 12.23.26 |
| **AI Integration** | Google Gemini API (AI Studio) |
| **Styling** | Tailwind CSS |
| **Testing** | Jest, React Testing Library |
| **Build Tool** | Create React App / Vite |
| **Deployment** | GitHub Pages, Vercel, Netlify |

---

## 📦 Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js**: v16.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v7.0.0 or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/chetx27/ai-trip-planner.git
cd ai-trip-planner

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and add your Google AI API key

# 4. Start the development server
npm start
```

The app will automatically open at [http://localhost:3000](http://localhost:3000)

### Environment Setup

1. **Get Your Google AI API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy your API key

2. **Configure `.env` File**
   ```env
   REACT_APP_GOOGLE_AI_API_KEY=your_api_key_here
   REACT_APP_API_TIMEOUT=30000
   REACT_APP_MAX_RETRIES=3
   ```

3. **Verify Setup**
   ```bash
   npm start
   ```
   If the app loads without errors, you're good to go!

---

## 🎯 Usage

### Planning Your Trip

1. **Enter Destination**: Type your desired travel destination
2. **Set Duration**: Choose trip length (1-30 days)
3. **Select Mode**: Pick student, family, or business mode
4. **Choose Transport**: Select your preferred transportation
5. **Pick Accommodation**: Choose where you want to stay
6. **Generate**: Click generate and get your AI-powered itinerary!

### Example Use Cases

**Student Budget Trip**
```
Destination: Paris, France
Duration: 5 days
Mode: Student
Transport: Train
Accommodation: Hostel
```

**Family Vacation**
```
Destination: Orlando, Florida
Duration: 7 days
Mode: Family
Transport: Cab
Accommodation: Hotel
```

**Business Trip**
```
Destination: New York City
Duration: 3 days
Mode: Business
Transport: Cab
Accommodation: Luxury Hotel
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/chetx27/ai-trip-planner)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
npx netlify-cli deploy --prod --dir=build
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://chetx27.github.io/ai-trip-planner",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

### Test Coverage Goals
- Unit Tests: >80% coverage
- Integration Tests: Core user flows
- E2E Tests: Critical paths

---

## 📁 Project Structure

```
ai-trip-planner/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   ├── services/        # API services
│   ├── utils/          # Utility functions
│   ├── styles/         # CSS/Tailwind styles
│   ├── hooks/          # Custom React hooks
│   ├── contexts/       # React contexts
│   └── App.js          # Main app component
├── docs/               # Documentation and assets
├── .env.example        # Environment variables template
├── package.json        # Dependencies
└── README.md          # This file
```

---

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m '✨ Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Development Guidelines
- Write clean, readable code
- Follow existing code style
- Add tests for new features
- Update documentation
- Use meaningful commit messages

---

## 📋 Roadmap

See the [PROJECT_ROADMAP.md](PROJECT_ROADMAP.md) for planned features and improvements.

**Upcoming Features:**
- [ ] Save and share trip itineraries
- [ ] Multi-destination trip planning
- [ ] Budget calculator integration
- [ ] Weather forecast integration
- [ ] Interactive maps with route visualization
- [ ] Social features: Share trips with friends
- [ ] Mobile app (React Native)
- [ ] Offline mode support

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Chethana G (Chet)**

- 🐙 GitHub: [@chetx27](https://github.com/chetx27)
- 📧 Email: chethana.workspace@gmail.com
- 🔗 Project Link: [AI Trip Planner](https://github.com/chetx27/ai-trip-planner)

---

## 🙏 Acknowledgments

- [Google AI Studio](https://makersuite.google.com/) - Gemini API for AI-powered itineraries
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - Amazing 3D capabilities
- [Framer Motion](https://www.framer.com/motion/) - Smooth animations
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- All contributors who help improve this project! 🌟

---

## 📞 Support

### Need Help?

- 📖 Check the [Documentation](./docs)
- 🐛 [Report a Bug](https://github.com/chetx27/ai-trip-planner/issues/new?template=bug_report.md)
- 💡 [Request a Feature](https://github.com/chetx27/ai-trip-planner/issues/new?template=feature_request.md)
- 💬 [Start a Discussion](https://github.com/chetx27/ai-trip-planner/discussions)

### Show Your Support

Give a ⭐ if this project helped you!

[![Star History Chart](https://api.star-history.com/svg?repos=chetx27/ai-trip-planner&type=Date)](https://star-history.com/#chetx27/ai-trip-planner&Date)

---

<div align="center">

**Made with ❤️ by [Chet](https://github.com/chetx27)**

*Happy Trip Planning!* ✈️🌍

</div>