import React from 'react';

const Skills = () => {
    const skills = [
        { name: "HTML", level: "90%" },       
        { name: "JavaScript", level: "85%" },
        { name: "React.Js", level: "90%" },
         { name: "Angular.Js", level: "95%" },
        { name: "Responsive Design", level: "85%" },
        { name: "Git / GitHub", level: "80%" },
        { name: "UI/UX Principles", level: "75%" },
        { name: "API Integration", level: "85%" }
    ];

    return (
        <section id="skills" style={{ background: '#111' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>My Skills</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {skills.map((skill, index) => (
                        <div key={index} style={{
                            background: '#1a1a1a',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid #333',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
                            <div style={{
                                width: '100%',
                                height: '6px',
                                background: '#333',
                                borderRadius: '3px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: skill.level,
                                    height: '100%',
                                    background: '#007bff'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
