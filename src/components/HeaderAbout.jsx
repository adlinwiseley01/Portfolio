import React, { useState, useEffect } from 'react';

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const LocationIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const CodeBracketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const SOCIAL_LINKS = [
  { Icon: GithubIcon, href: 'https://github.com/adlinwiseley01', label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://in.linkedin.com/in/adlin-wiseley-i-b269a0252', label: 'LinkedIn' },
  { Icon: MailIcon, href: 'mailto:adlinwiseley1@gmail.com', label: 'Email' },
  { Icon: CodeBracketIcon, href: '#projects', label: 'Code' },
];

const HeaderAbout = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';

  return (
    <>
      {/* Sticky Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '1rem 2rem',
        background: scrolled
          ? isDark ? 'rgba(12,12,12,0.95)' : 'rgba(255,255,255,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? isDark ? '1px solid rgba(0,123,255,0.2)' : '1px solid rgba(0,123,255,0.15)'
          : 'none',
        transition: 'all 0.4s ease',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 1002 }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #007bff, #0056b3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '800', fontSize: '0.85rem', color: 'white',
            boxShadow: '0 4px 15px rgba(0,123,255,0.35)', flexShrink: 0,
          }}>AW</div>
          <span style={{ fontWeight: '700', fontSize: '1.1rem', color: isDark ? 'white' : '#111' }}>Adlin Wiseley</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>

          {/* Hamburger Menu Button */}
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} style={{ display: 'flex', listStyle: 'none', gap: '0.1rem', margin: 0, padding: 0 }}>
            {['About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} style={{
                  color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.65)',
                  textDecoration: 'none', padding: '0.5rem 0.9rem', borderRadius: '8px',
                  fontSize: '0.88rem', fontWeight: '500', transition: 'all 0.2s ease', display: 'block',
                }}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={e => { e.target.style.color = isDark ? 'white' : '#007bff'; e.target.style.background = isDark ? 'rgba(0,123,255,0.15)' : 'rgba(0,123,255,0.08)'; }}
                  onMouseLeave={e => { e.target.style.color = isDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.65)'; e.target.style.background = 'transparent'; }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button className="theme-toggle-btn" onClick={toggleTheme} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'} style={{
            marginLeft: '0.4rem', width: '40px', height: '40px', borderRadius: '10px',
            border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.1)',
            background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
            color: isDark ? '#facc15' : '#6366f1',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s', flexShrink: 0, zIndex: 1002
          }}
            onMouseEnter={e => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'; }}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      {/* Hero Section — two column */}
      <div id="about" style={{
        minHeight: '100vh',
        background: isDark
          ? 'linear-gradient(160deg, #080c14 0%, #0d1a2e 50%, #06090f 100%)'
          : 'linear-gradient(160deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Glow blobs */}
        <div style={{ position: 'absolute', width: '450px', height: '450px', borderRadius: '50%', background: isDark ? 'radial-gradient(circle, rgba(0,123,255,0.07) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(0,123,255,0.1) 0%, transparent 70%)', top: '-80px', right: '-80px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: isDark ? 'radial-gradient(circle, rgba(0,86,179,0.06) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', bottom: '-30px', left: '30px', pointerEvents: 'none' }} />
        {/* Grid lines */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: isDark ? 'linear-gradient(rgba(0,123,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,255,0.03) 1px, transparent 1px)' : 'linear-gradient(rgba(0,123,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Two-column content */}
        <div className="hero-container" style={{
          maxWidth: '1200px', margin: '0 auto', padding: '8rem 2rem 5rem',
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '4rem', alignItems: 'center', minHeight: '100vh',
        }}>
          {/* LEFT — text */}
          <div className="hero-content">
            <h1 className="hero-title" style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: '800', lineHeight: 1.1,
              margin: '0 0 0.75rem', color: isDark ? 'white' : '#0f172a', letterSpacing: '-1px',
            }}>
              Hi, I'm{' '}
              <span style={{ background: 'linear-gradient(135deg, #007bff 30%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Adlin Wiseley
              </span>
            </h1>

            <h2 style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)', fontWeight: '500', color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(15,23,42,0.55)', margin: '0 0 0.75rem' }}>
              Junior Software Developer &amp; UI Specialist
            </h2>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem', color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.45)', fontSize: '0.92rem' }}>
              <LocationIcon size={15} />
              <span>Thoothukudi, Tamil Nadu, India</span>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: '1.85', color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.65)', maxWidth: '580px', marginBottom: '2.5rem' }}>
              I build secure and user-friendly web applications with a focus on clean, responsive, and intuitive interfaces. Passionate about solving practical problems through efficient, modern development.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #007bff, #0056b3)', color: 'white', textDecoration: 'none', padding: '0.8rem 1.8rem', borderRadius: '12px', fontWeight: '600', fontSize: '0.95rem', boxShadow: '0 6px 20px rgba(0,123,255,0.3)', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,123,255,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,123,255,0.3)'; }}>
                View My Work →
              </a>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.12)', color: isDark ? 'white' : '#0f172a', textDecoration: 'none', padding: '0.8rem 1.8rem', borderRadius: '12px', fontWeight: '600', fontSize: '0.95rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'; }}>
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats" style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2.5rem', borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)', flexWrap: 'wrap' }}>
              {[{ value: '8+', label: 'Months Experience' }, { value: '5+', label: 'Projects Built' }, { value: '100%', label: 'Commitment' }].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#007bff', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.5)', marginTop: '0.3rem', fontWeight: '500' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Profile card */}
          <div className="hero-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            <div style={{
              width: '280px',
              background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.75)',
              border: isDark ? '1px solid rgba(0,123,255,0.2)' : '1px solid rgba(0,123,255,0.15)',
              borderRadius: '24px',
              backdropFilter: 'blur(16px)',
              padding: '2rem 1.75rem',
              boxShadow: isDark ? '0 20px 60px rgba(0,0,0,0.4)' : '0 20px 60px rgba(0,123,255,0.1)',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              {/* Avatar */}
              <div style={{
                width: '90px', height: '90px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #007bff, #0056b3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem', fontWeight: '800', color: 'white',
                boxShadow: '0 8px 25px rgba(0,123,255,0.4)',
                marginBottom: '1rem', letterSpacing: '-1px',
              }}>AW</div>

              <h3 style={{ fontWeight: '800', fontSize: '1.1rem', color: isDark ? 'white' : '#0f172a', margin: '0 0 0.2rem', textAlign: 'center' }}>Adlin Wiseley</h3>
              <p style={{ fontSize: '0.82rem', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(15,23,42,0.5)', margin: '0 0 0.5rem', textAlign: 'center' }}>Junior Software Developer</p>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(15,23,42,0.4)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                <LocationIcon size={12} />
                <span>Thoothukudi, India</span>
              </div>

              <div style={{ width: '100%', height: '1px', background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)', marginBottom: '1.5rem' }} />

              {/* Info rows */}
              {[
                { label: 'Experience', value: '8 Months' },
                { label: 'Company', value: 'Skillmine Tech' },
                { label: 'Focus', value: 'UI Development' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(15,23,42,0.45)', fontWeight: '500' }}>{row.label}</span>
                  <span style={{ fontSize: '0.8rem', color: isDark ? 'rgba(255,255,255,0.85)' : '#0f172a', fontWeight: '600' }}>{row.value}</span>
                </div>
              ))}

              <div style={{ width: '100%', height: '1px', background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)', margin: '0.5rem 0 1.25rem' }} />

              {/* Social icon buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} title={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,123,255,0.06)',
                      border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,123,255,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isDark ? 'rgba(255,255,255,0.7)' : '#007bff',
                      textDecoration: 'none', transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,123,255,0.15)'; e.currentTarget.style.color = '#007bff'; e.currentTarget.style.borderColor = 'rgba(0,123,255,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,123,255,0.06)'; e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.7)' : '#007bff'; e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,123,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAbout;
