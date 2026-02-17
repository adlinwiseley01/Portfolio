import React from 'react';
import HeaderAbout from './components/HeaderAbout';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <HeaderAbout />
      <Education />
      <Skills />
      <Experience />
      <Projects />

      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid #333',
        background: '#0c0c0c',
        color: '#a0a0a0'
      }}>
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
