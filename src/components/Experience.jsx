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

const LaptopIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
);

const Experience = ({ theme }) => {
    const isDark = theme === 'dark';
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const experiences = [
        {
            title: "Software Development Intern",
            badge: "Internship",
            company: "Skillmine Technologies",
            location: "Sivakasi, India",
            duration: "6 Months",
            period: "2025",
            description: "Gained hands-on experience in Junior Software Development, learning industry workflows, best practices, and contributing to real-world product development.",
            tags: ["HTML", "CSS", "JavaScript", "React"],
            Icon: LaptopIcon,
        },
        {
            title: "Junior Software Developer",
            badge: "Full-Time",
            company: "Skillmine Technologies",
            location: "Sivakasi, India",
            duration: "8 Months",
            period: "2025 – Present",
            description: "Working as a full-time Junior Software Developer, contributing to core product features — building responsive UIs, integrating REST APIs, and implementing MFA authentication flows.",
            tags: ["React", "Angular", "API Integration", "MFA"],
            Icon: BriefcaseIcon,
        }
    ];

    return (
        <section id="experience" style={{ padding: '6rem 2rem', background: isDark ? '#0c0c0c' : '#f8fafc', transition: 'background 0.3s' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{
                        background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.3)',
                        color: '#3b82f6', padding: '0.35rem 1rem', borderRadius: '50px',
                        fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px',
                        textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem'
                    }}>Career Path</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: isDark ? 'white' : '#0f172a', letterSpacing: '-0.5px', margin: 0 }}>
                        Work Experience
                    </h2>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Vertical line with gradient and pulse effect */}
                    <div style={{
                        position: 'absolute',
                        left: isMobile ? '28px' : '50%',
                        transform: isMobile ? 'none' : 'translateX(-50%)',
                        top: '0', bottom: '0', width: '4px',
                        background: 'linear-gradient(180deg, #3b82f6 0%, rgba(59, 130, 246, 0.1) 100%)',
                        borderRadius: '4px',
                    }}>
                        <div style={{
                            position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)',
                            width: '12px', height: '12px', background: '#3b82f6', borderRadius: '50%',
                            boxShadow: '0 0 10px #3b82f6'
                        }} />
                        <div style={{
                            position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
                            width: '12px', height: '12px', background: 'rgba(59, 130, 246, 0.3)', borderRadius: '50%'
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {experiences.map((exp, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: isMobile ? 'flex-start' : (isLeft ? 'flex-start' : 'flex-end'),
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: '100%',
                                    zIndex: 1
                                }}>
                                    {/* Roadmap Node - Center for desktop, Left for mobile */}
                                    <div style={{
                                        position: 'absolute',
                                        left: isMobile ? '0' : '50%',
                                        transform: isMobile ? 'none' : 'translateX(-50%)',
                                        width: '60px', height: '60px',
                                        background: isDark ? '#1a1a1a' : 'white',
                                        borderRadius: '50%',
                                        border: '4px solid #3b82f6',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#3b82f6',
                                        boxShadow: isDark
                                            ? '0 0 20px rgba(59, 130, 246, 0.3)'
                                            : '0 10px 25px rgba(0,0,0,0.1)',
                                        zIndex: 2,
                                    }}>
                                        <exp.Icon />
                                    </div>

                                    {/* Card Container */}
                                    <div style={{
                                        width: isMobile ? 'calc(100% - 80px)' : '45%',
                                        marginLeft: isMobile ? '80px' : '0',
                                        textAlign: 'left'
                                    }}>
                                        <div style={{
                                            background: isDark ? 'linear-gradient(145deg, #141414, #1c1c1c)' : 'white',
                                            borderRadius: '24px',
                                            border: isDark ? '1px solid rgba(0,123,255,0.15)' : '1px solid rgba(0,0,0,0.07)',
                                            boxShadow: isDark ? 'none' : '0 4px 25px rgba(0,0,0,0.05)',
                                            padding: '2.5rem',
                                            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s',
                                            cursor: 'default',
                                            position: 'relative'
                                        }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = isMobile ? 'scale(1.02)' : (isLeft ? 'translateX(-10px) scale(1.02)' : 'translateX(10px) scale(1.02)');
                                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,123,255,0.15)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = isDark ? 'none' : '0 4px 25px rgba(0,0,0,0.05)';
                                            }}>

                                            {/* Connector line for desktop */}
                                            {!isMobile && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    [isLeft ? 'right' : 'left']: '-20px',
                                                    width: '20px',
                                                    height: '2px',
                                                    background: '#3b82f6',
                                                    zIndex: -1
                                                }} />
                                            )}

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                <div>
                                                    <h3 style={{ margin: '0 0 0.4rem', color: isDark ? 'white' : '#0f172a', fontWeight: '800', fontSize: '1.25rem' }}>{exp.title}</h3>
                                                    <h4 style={{ margin: 0, color: '#3b82f6', fontWeight: '600', fontSize: '1rem', opacity: 0.9 }}>
                                                        {exp.company}
                                                    </h4>
                                                </div>
                                                <div style={{ textAlign: 'right', minWidth: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                                                    <span style={{
                                                        background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.25)',
                                                        color: '#3b82f6', padding: '0.2rem 0.75rem',
                                                        borderRadius: '50px', fontSize: '0.7rem', fontWeight: '700',
                                                        textTransform: 'uppercase', letterSpacing: '0.5px',
                                                        marginBottom: '0.2rem'
                                                    }}>{exp.badge}</span>
                                                    <div style={{ color: isDark ? 'rgba(255,255,255,0.8)' : '#0f172a', fontWeight: '700', fontSize: '0.95rem' }}>{exp.duration}</div>
                                                    <div style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(15,23,42,0.5)', fontSize: '0.8rem' }}>{exp.period}</div>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(15,23,42,0.6)', fontSize: '0.85rem' }}>
                                                <LocationIcon size={14} />
                                                {exp.location}
                                            </div>

                                            <p style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(15,23,42,0.7)', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                                {exp.description}
                                            </p>

                                            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                                                {exp.tags.map(tag => (
                                                    <span key={tag} style={{
                                                        background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                                        color: '#3b82f6',
                                                        padding: '0.35rem 0.85rem', borderRadius: '12px',
                                                        fontSize: '0.8rem', fontWeight: '600',
                                                    }}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Experience;
