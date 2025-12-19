import React from 'react';
import Scene3D from './Scene3D';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="scene-container">
        <Scene3D />
      </div>

      <motion.div
        className="overlay"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="title">🚀 3D Trip Planner</motion.h1>
        <motion.p className="subtitle">Modern, moody, and techy travel planning.</motion.p>
        <motion.button className="cta-button">Explore Now</motion.button>
      </motion.div>
    </div>
  );
}

export default App;
