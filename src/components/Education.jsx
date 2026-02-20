import React from 'react';

// SVG icon for location pin
const LocationIcon = ({ size = 13 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

// Academic icons as SVGs
const GradCapIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const SchoolIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const BookIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

const Education = ({ theme }) => {
    const isDark = theme === 'dark';
    const eduData = [
        {
            title: "10th Grade",
            school: "X'an Matriculation Hr.Sec School",
            location: "Thoothukudi",
            period: "Completed",
            Icon: SchoolIcon,
        },
        {
            title: "12th Grade",
            school: "X'an Matriculation Hr.Sec School",
            location: "Thoothukudi",
            period: "Completed",
            Icon: BookIcon,
        },
        {
            title: "B.E. College",
            school: "Kamaraj College of Engineering & Technology",
            Branch: "Artificial Intelligence & Data Science",
            location: "Virudhunagar",
            period: "Undergraduate",
            Icon: GradCapIcon,
        }
    ];

    return (
        <section id="education" style={{ padding: '6rem 2rem', background: isDark ? '#0c0c0c' : '#f8fafc', transition: 'background 0.3s' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.3)',
                        color: '#3b82f6', padding: '0.35rem 1rem', borderRadius: '50px',
                        fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px',
                        textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem'
                    }}>Education</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: isDark ? 'white' : '#0f172a', letterSpacing: '-0.5px', margin: 0 }}>
                        Academic Journey
                    </h2>
                </div>

                <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    {eduData.map((edu, index) => (
                        <div key={index} style={{
                            background: isDark ? 'linear-gradient(145deg, #141414, #1c1c1c)' : 'white',
                            borderRadius: '20px',
                            border: isDark ? '1px solid rgba(0,123,255,0.2)' : '1px solid rgba(0,0,0,0.07)',
                            boxShadow: isDark ? 'none' : '0 2px 20px rgba(0,0,0,0.06)',
                            padding: '2.5rem 2rem',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                            position: 'relative', overflow: 'hidden',
                            transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'default',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.borderColor = 'rgba(0,123,255,0.5)';
                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,123,255,0.15)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = isDark ? 'rgba(0,123,255,0.2)' : 'rgba(0,0,0,0.07)';
                                e.currentTarget.style.boxShadow = isDark ? 'none' : '0 2px 20px rgba(0,0,0,0.06)';
                            }}>
                            {/* Top accent line */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#007bff' }} />

                            {/* SVG icon circle */}
                            <div style={{
                                width: '65px', height: '65px', borderRadius: '50%',
                                background: 'rgba(0,123,255,0.1)', border: '2px solid rgba(0,123,255,0.3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#007bff', marginBottom: '1.5rem',
                            }}>
                                <edu.Icon />
                            </div>

                            <h3 style={{ color: '#3b82f6', fontWeight: '700', fontSize: '1.05rem', marginBottom: '0.75rem' }}>{edu.title}</h3>
                            <p style={{ fontWeight: '600', color: isDark ? 'white' : '#0f172a', marginBottom: '0.5rem', lineHeight: '1.4', fontSize: '0.93rem' }}>
                                {edu.school}
                            </p>
                            {edu.Branch && (
                                <p style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(15,23,42,0.55)', fontSize: '0.83rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                                    {edu.Branch}
                                </p>
                            )}
                            {/* Location with SVG pin icon */}
                            <p style={{ fontSize: '0.83rem', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(15,23,42,0.45)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                                <LocationIcon size={13} />
                                {edu.location}
                            </p>

                            <span style={{
                                background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.3)',
                                color: '#3b82f6', padding: '0.3rem 1rem',
                                borderRadius: '50px', fontSize: '0.72rem', fontWeight: '700',
                                letterSpacing: '1px', textTransform: 'uppercase',
                            }}>{edu.period}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
