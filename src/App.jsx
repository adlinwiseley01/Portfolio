import React, { useState } from 'react';
import HeaderAbout from './components/HeaderAbout';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import './responsive.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', next);
      return next;
    });
  };

  const isDark = theme === 'dark';

  return (
    <div style={{
      background: isDark ? '#0c0c0c' : '#f8fafc',
      color: isDark ? 'white' : '#0f172a',
      minHeight: '100vh',
      transition: 'background 0.3s, color 0.3s',
    }}>
      <HeaderAbout theme={theme} toggleTheme={toggleTheme} />
      <Education theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />

      <footer style={{
        padding: '2.5rem 2rem',
        textAlign: 'center',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)',
        background: isDark ? '#080808' : '#e8f0fe',
        transition: 'background 0.3s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #007bff, #0056b3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '800', fontSize: '0.65rem', color: 'white',
          }}>AW</div>
          <span style={{ fontWeight: '700', color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(15,23,42,0.8)' }}>Adlin Wiseley</span>
        </div>
        <p style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(15,23,42,0.4)', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} Adlin Wiseley. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
