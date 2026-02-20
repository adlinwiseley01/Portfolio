import React from 'react';

const skillsData = [
    {
        name: "HTML",
        level: 90,
        color: "#007bff",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" /></svg>
        ),
    },
    {
        name: "JavaScript",
        level: 85,
        color: "#007bff",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
        ),
    },
    {
        name: "React.js",
        level: 90,
        color: "#007bff",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.725 0 1.247 1.374.578 4.022-.005.02-.01.04-.014.059a23.994 23.994 0 0 0-1.037-.17 23.994 23.994 0 0 0-.974-.112 23.994 23.994 0 0 0-.648-1.017 23.994 23.994 0 0 0-.74-.994c.97-.868 1.927-1.494 2.73-1.748.1-.03.194-.04.105-.04zm-9.799 0c.097 0 .19.012.288.04.809.253 1.773.88 2.748 1.752a23.994 23.994 0 0 0-.737.992 23.994 23.994 0 0 0-.65 1.02 23.994 23.994 0 0 0-.972.11 23.994 23.994 0 0 0-1.035.17c-.672-2.641-.15-4.084.58-4.084zm4.915 1.87c.26.38.516.782.762 1.21.246-.43.5-.832.764-1.212-.253-.006-.507-.01-.762-.01s-.51.004-.764.012zm-.46 2.4a19.03 19.03 0 0 1 .46-.016c.154 0 .308.006.46.016a23.994 23.994 0 0 0-.46.64 23.994 23.994 0 0 0-.46-.64zm-4.94.612c.41.07.83.15 1.256.244a23.994 23.994 0 0 1 .43-1.058 23.994 23.994 0 0 1-.726-.97c-.49.577-.907 1.174-1.275 1.784h.315zm9.88 0h.315c-.37-.61-.786-1.208-1.277-1.785a23.994 23.994 0 0 1-.725.97 23.994 23.994 0 0 1 .43 1.058c.428-.094.847-.174 1.257-.243zM12 8.547c.37.52.727 1.075 1.062 1.656H10.94c.334-.58.69-1.136 1.06-1.656zM7.44 10.89l-.005.018a21.89 21.89 0 0 0-.42 1.098c.194.372.4.742.62 1.107a21.928 21.928 0 0 0 .62-1.107 21.928 21.928 0 0 0-.815-1.116zm9.124 0c-.258.36-.514.735-.755 1.122a21.89 21.89 0 0 0 .62 1.107c.22-.365.427-.735.62-1.107a21.928 21.928 0 0 0-.485-1.122zM12 10.87c-.443 0-.88.018-1.308.05a21.89 21.89 0 0 0-.66 1.084c.21.363.424.72.66 1.063.427.032.864.05 1.308.05s.88-.018 1.307-.05c.237-.342.45-.7.66-1.063a21.89 21.89 0 0 0-.66-1.084 21.89 21.89 0 0 0-1.307-.05zm-4.55.61c-.02.055-.04.11-.058.167a21.89 21.89 0 0 0-.317 1.04c.33.085.673.161 1.026.226a21.89 21.89 0 0 1-.43-1.07 21.89 21.89 0 0 1-.22-.363zm9.1 0c-.07.12-.145.24-.22.362a21.89 21.89 0 0 1-.43 1.07c.352-.064.695-.14 1.026-.225a21.89 21.89 0 0 0-.376-1.207zm-7.71 2.11a21.89 21.89 0 0 1-.978-.223 21.89 21.89 0 0 0 .4 1.075 21.89 21.89 0 0 1 .578-1.117v.265zm6.32 0v-.265a21.89 21.89 0 0 1 .578 1.117 21.89 21.89 0 0 0 .4-1.075c-.316.083-.643.156-.978.223zm-5.47.804a21.89 21.89 0 0 0 .73.975 21.89 21.89 0 0 0 .458-1.038 21.89 21.89 0 0 1-1.188.063zm4.62 0a21.89 21.89 0 0 1-1.188-.063 21.89 21.89 0 0 0 .458 1.038c.25-.304.494-.624.73-.975zm-2.31.372c-.256.42-.512.812-.764 1.17.255.006.51.01.763.01s.508-.004.764-.01a21.89 21.89 0 0 1-.763-1.17z" /></svg>
        ),
    },
    {
        name: "Angular.js",
        level: 95,
        color: "#007bff",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.982 11.999.0zm7.064 18.31h-2.638l-1.422-3.503H8.996L7.575 18.31H4.937L11.999 2.6z" /></svg>
        ),
    },
    {
        name: "Responsive Design",
        level: 85,
        color: "#007bff",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
        ),
    },
    {
        name: "Git / GitHub",
        level: 80,
        color: "#007bff",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        ),
    },
    {
        name: "UI/UX Principles",
        level: 75,
        color: "#007bff",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
        ),
    },
    {
        name: "API Integration",
        level: 85,
        color: "#007bff",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
        ),
    },
];

const Skills = ({ theme }) => {
    const isDark = theme === 'dark';
    return (
        <section id="skills" style={{ padding: '6rem 2rem', background: isDark ? '#080808' : '#f1f5f9', transition: 'background 0.3s' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.3)',
                        color: '#3b82f6', padding: '0.35rem 1rem', borderRadius: '50px',
                        fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px',
                        textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem'
                    }}>Expertise</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: isDark ? 'white' : '#0f172a', letterSpacing: '-0.5px', margin: 0 }}>
                        My Skills
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                    {skillsData.map((skill, index) => (
                        <div key={index} style={{
                            background: isDark ? 'linear-gradient(145deg, #141414, #1c1c1c)' : 'white',
                            borderRadius: '16px',
                            border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)',
                            boxShadow: isDark ? 'none' : '0 2px 15px rgba(0,0,0,0.05)',
                            padding: '1.75rem',
                            transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                            cursor: 'default',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'rgba(0,123,255,0.35)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)';
                                e.currentTarget.style.boxShadow = isDark ? 'none' : '0 2px 15px rgba(0,0,0,0.05)';
                            }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                    <span style={{ color: '#007bff', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
                                    <h3 style={{ fontSize: '0.97rem', fontWeight: '700', color: isDark ? 'white' : '#0f172a', margin: 0 }}>{skill.name}</h3>
                                </div>
                                <span style={{ fontSize: '0.88rem', fontWeight: '800', color: '#3b82f6' }}>{skill.level}%</span>
                            </div>
                            <div style={{ width: '100%', height: '6px', background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)', borderRadius: '99px', overflow: 'hidden' }}>
                                <div style={{
                                    width: `${skill.level}%`, height: '100%',
                                    background: '#007bff',
                                    borderRadius: '99px',
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
