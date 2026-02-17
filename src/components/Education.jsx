import React from 'react';

const Education = () => {
    const eduData = [
        {
            title: "10th Grade",
            school: "X'an Matricualtion .Hr.Sec School",
            location: "Thoothukudi",
            period: "Completed"
        },
        {
            title: "12th Grade",
            school: "X'an Matricualtion .Hr.Sec School",
            location: "Thoothukudi",
            period: "Completed"
        },
        {
            title: "College",
            school: "Kamaraj College of Engineering & Technology",
            Branch: "Artifical Intelligence & Data Science",
            location: "Virudhunagar",
            period: "Undergraduate"
        }
    ];

    return (
        <section id="education">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Education</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                justifyContent: 'center'
            }}>
                {eduData.map((edu, index) => (
                    <div key={index} style={{
                        background: '#1a1a1a',
                        aspectRatio: '1 / 1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '2rem',
                        borderRadius: '8px',
                        border: '1px solid #333',
                        transition: 'border-color 0.3s'
                    }} className="card">
                        <h3 style={{ color: '#007bff' }}>{edu.title}</h3>
                        <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>{edu.school}</p>
                         <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>{edu.Branch}</p>
                        <p style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>{edu.location}</p>
                        <p style={{ marginTop: '1rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{edu.period}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
