import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "Full Time Employee",
            company: "Skillmine Technologies",
            duration: "8 Months",
            description: "Working as a full-time Junior Software Developer, contributing to core product features."
        },
        {
            title: "Internship",
            company: "Skillmine",
            duration: "6 Months",
            description: "Gained hands-on experience in Junior Software Development and industry workflows."
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Work Experience</h2>
                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: '#007bff',
                        zIndex: 0
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {experiences.map((exp, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                gap: '2rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {/* Dot */}
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: '#007bff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    border: '4px solid #0c0c0c'
                                }}>
                                    <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%' }}></div>
                                </div>

                                <div style={{
                                    background: '#1a1a1a',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                    border: '1px solid #333',
                                    width: '100%'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        <h3 style={{ margin: 0, color: '#007bff' }}>{exp.title}</h3>
                                        <span style={{ color: '#a0a0a0', fontWeight: 'bold' }}>{exp.duration}</span>
                                    </div>
                                    <h4 style={{ margin: '0 0 1rem 0', opacity: 0.8 }}>{exp.company}</h4>
                                    <p style={{ color: '#a0a0a0' }}>{exp.description}</p>
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
