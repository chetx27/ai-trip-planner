# Contributing to AI Trip Planner

First off, thank you for considering contributing to AI Trip Planner! 🎉

It's people like you that make AI Trip Planner such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Create an issue and provide the following information:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other applications**

### Pull Requests

1. **Fork the repository** and create your branch from `master`
2. **Clone your fork** to your local machine

```bash
git clone https://github.com/YOUR-USERNAME/ai-trip-planner.git
```

3. **Create a new branch** for your feature

```bash
git checkout -b feature/amazing-feature
```

4. **Make your changes** and test thoroughly
5. **Commit your changes** with a clear commit message

```bash
git commit -m 'Add some amazing feature'
```

6. **Push to your fork**

```bash
git push origin feature/amazing-feature
```

7. **Open a Pull Request** with a clear title and description

### Coding Guidelines

- Use **meaningful variable and function names**
- Write **clean, readable code** with proper indentation
- Add **comments** for complex logic
- Follow **React best practices** and hooks conventions
- Ensure your code passes all **tests**
- Keep components **modular and reusable**
- Use **Tailwind CSS** for styling
- Follow **responsive design** principles

### Testing

Before submitting your pull request:

```bash
# Run tests
npm test

# Build the project to check for errors
npm run build
```

### Commit Message Guidelines

Use clear and meaningful commit messages:

- ✨ `:sparkles:` - New feature
- 🐛 `:bug:` - Bug fix
- 📝 `:memo:` - Documentation
- 💄 `:lipstick:` - UI/style update
- ♻️ `:recycle:` - Code refactoring
- ⚡ `:zap:` - Performance improvement
- 🔥 `:fire:` - Remove code/files
- 🚀 `:rocket:` - Deployment

Example:
```
✨ Add dark mode toggle feature
🐛 Fix itinerary generation for multiple days
📝 Update installation instructions in README
```

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file with your API keys (see `.env.example`)

3. Start development server:

```bash
npm start
```

## Project Structure

```
ai-trip-planner/
├── public/
├── src/
│   ├── components/     # React components
│   ├── utils/          # Utility functions
│   ├── styles/         # CSS/styling files
│   └── App.js          # Main app component
├── .env.example        # Environment variables template
├── package.json
└── README.md
```

## Questions?

Feel free to open an issue with the "question" label if you have any questions!

## Recognition

Contributors will be recognized in our README file. Thank you for your contributions! 🙌

---

**Happy Coding! 🚀**