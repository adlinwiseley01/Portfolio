import React from 'react';

// SVG icons
const LocationIcon = ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const CodeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const Experience = ({ theme }) => {
    const isDark = theme === 'dark';
    const experiences = [
        {
            title: "Junior Software Developer",
            badge: "Full-Time",
            company: "Skillmine Technologies",
            location: "Bangalore, India",
            duration: "8 Months",
            period: "2024 – Present",
            description: "Working as a full-time Junior Software Developer, contributing to core product features — building responsive UIs, integrating REST APIs, and implementing MFA authentication flows.",
            tags: ["React", "Angular", "API Integration", "MFA"],
            Icon: BriefcaseIcon,
        },
        {
            title: "Software Development Intern",
            badge: "Internship",
            company: "Skillmine Technologies",
            location: "Bangalore, India",
            duration: "6 Months",
            period: "2023 – 2024",
            description: "Gained hands-on experience in Junior Software Development, learning industry workflows, best practices, and contributing to real-world product development.",
            tags: ["HTML", "CSS", "JavaScript", "React"],
            Icon: CodeIcon,
        }
    ];

    return (
        <section id="experience" style={{ padding: '6rem 2rem', background: isDark ? '#0c0c0c' : '#f8fafc', transition: 'background 0.3s' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.3)',
                        color: '#3b82f6', padding: '0.35rem 1rem', borderRadius: '50px',
                        fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px',
                        textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem'
                    }}>Career</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: isDark ? 'white' : '#0f172a', letterSpacing: '-0.5px', margin: 0 }}>
                        Work Experience
                    </h2>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute', left: '28px', top: '28px', bottom: '28px', width: '2px',
                        background: 'linear-gradient(180deg, #007bff 0%, rgba(0,123,255,0.1) 100%)',
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {experiences.map((exp, index) => (
                            <div key={index} style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
                                {/* Icon circle dot */}
                                <div style={{
                                    width: '56px', height: '56px', flexShrink: 0,
                                    background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: isDark
                                        ? '0 0 0 4px #0c0c0c, 0 0 0 6px rgba(0,123,255,0.25)'
                                        : '0 0 0 4px #f8fafc, 0 0 0 6px rgba(0,123,255,0.25)',
                                }}>
                                    <exp.Icon />
                                </div>

                                {/* Card */}
                                <div style={{
                                    flex: 1,
                                    background: isDark ? 'linear-gradient(145deg, #141414, #1c1c1c)' : 'white',
                                    borderRadius: '20px',
                                    border: isDark ? '1px solid rgba(0,123,255,0.15)' : '1px solid rgba(0,0,0,0.07)',
                                    boxShadow: isDark ? 'none' : '0 2px 20px rgba(0,0,0,0.06)',
                                    padding: '2rem',
                                    transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                                    cursor: 'default',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateX(8px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,123,255,0.12)';
                                        e.currentTarget.style.borderColor = 'rgba(0,123,255,0.35)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateX(0)';
                                        e.currentTarget.style.boxShadow = isDark ? 'none' : '0 2px 20px rgba(0,0,0,0.06)';
                                        e.currentTarget.style.borderColor = isDark ? 'rgba(0,123,255,0.15)' : 'rgba(0,0,0,0.07)';
                                    }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.3rem' }}>
                                                <h3 style={{ margin: 0, color: isDark ? 'white' : '#0f172a', fontWeight: '700', fontSize: '1.1rem' }}>{exp.title}</h3>
                                                <span style={{
                                                    background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.25)',
                                                    color: '#3b82f6', padding: '0.18rem 0.65rem',
                                                    borderRadius: '50px', fontSize: '0.68rem', fontWeight: '700',
                                                    textTransform: 'uppercase', letterSpacing: '0.5px',
                                                }}>{exp.badge}</span>
                                            </div>
                                            <h4 style={{ margin: 0, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(15,23,42,0.5)', fontWeight: '500', fontSize: '0.9rem' }}>
                                                {exp.company}
                                            </h4>
                                            {/* Location with SVG pin */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem', color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,42,0.4)', fontSize: '0.82rem' }}>
                                                <LocationIcon size={12} />
                                                {exp.location}
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ color: '#3b82f6', fontWeight: '700', fontSize: '0.9rem' }}>{exp.duration}</div>
                                            <div style={{ color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,42,0.4)', fontSize: '0.78rem' }}>{exp.period}</div>
                                        </div>
                                    </div>

                                    <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.6)', lineHeight: '1.7', marginBottom: '1.25rem', fontSize: '0.93rem', marginTop: '0.75rem' }}>
                                        {exp.description}
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {exp.tags.map(tag => (
                                            <span key={tag} style={{
                                                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                                border: isDark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.09)',
                                                color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.6)',
                                                padding: '0.28rem 0.75rem', borderRadius: '8px',
                                                fontSize: '0.78rem', fontWeight: '500',
                                            }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
