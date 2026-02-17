import React from 'react';

const Projects = () => {
    return (
        <section id="projects" style={{ background: '#111' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Current Work</h2>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{
                        background: '#1a1a1a',
                        padding: '3rem',
                        borderRadius: '20px',
                        border: '2px solid #007bff',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: '#007bff',
                            color: 'white',
                            padding: '0.2rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}>IN PROGRESS</div>

                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Auth</h3>
                        <p style={{ color: '#a0a0a0', marginBottom: '2rem', lineHeight: '1.6' }}>
                            I worked as a Junior Software Developer on a secure Authentication System, building the complete UI for login, role-based access, and Multi-Factor Authentication (MFA) with OTP and email verification, along with API integration and proper validation handling.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <span style={{ background: '#333', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.9rem' }}>React</span>
                            <span style={{ background: '#333', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.9rem' }}>Angualr.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
