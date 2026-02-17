import React from 'react';

const HeaderAbout = () => {
  return (
    <div className="blue-section">
      <header className="container" style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Portfolio</h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
            <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
            <li><a href="#education" style={{ color: 'white', textDecoration: 'none' }}>Education</a></li>
            <li><a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a></li>
            <li><a href="#experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="about" className="container" style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About Me</h2>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: '0.9' }}>
            I’m Adlin, a Junior Software Developer with experience in building secure and user-friendly web applications. I mainly work on UI development using modern frameworks and focus on creating clean, responsive, and easy-to-use interfaces.
            I am passionate about solving practical problems and developing applications that are secure, efficient, and easy to use.
            I am always eager to learn new technologies and improve my development skills.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeaderAbout;
