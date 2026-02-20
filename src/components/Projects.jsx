import React from 'react';

const Projects = ({ theme }) => {
    const isDark = theme === 'dark';
    const tags = ["React", "Angular.js", "REST APIs", "MFA / OTP", "TypeScript"];

    return (
        <section id="projects" style={{ padding: '6rem 2rem', background: isDark ? '#080808' : '#f1f5f9', transition: 'background 0.3s' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.3)',
                        color: '#3b82f6', padding: '0.35rem 1rem', borderRadius: '50px',
                        fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px',
                        textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem'
                    }}>Portfolio</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: isDark ? 'white' : '#0f172a', letterSpacing: '-0.5px', margin: 0 }}>
                        Current Work
                    </h2>
                </div>

                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <div style={{
                        background: isDark ? 'linear-gradient(145deg, #0e1a30, #141d2e)' : 'white',
                        borderRadius: '24px',
                        border: isDark ? '1px solid rgba(0,123,255,0.2)' : '1px solid rgba(0,0,0,0.08)',
                        boxShadow: isDark ? '0 25px 60px rgba(0,0,0,0.4)' : '0 10px 40px rgba(0,0,0,0.08)',
                        padding: '3rem',
                        position: 'relative', overflow: 'hidden',
                    }}>
                        {/* Background glow */}
                        <div style={{
                            position: 'absolute', width: '350px', height: '350px', borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(0,123,255,0.06) 0%, transparent 70%)',
                            top: '-80px', right: '-80px', pointerEvents: 'none',
                        }} />

                        {/* Top bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {['#ff5f56', '#ffbd2e', '#27c93f'].map(color => (
                                    <div key={color} style={{ width: '12px', height: '12px', borderRadius: '50%', background: color, opacity: 0.7 }} />
                                ))}
                            </div>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.28)',
                                padding: '0.28rem 0.85rem', borderRadius: '50px',
                            }}>
                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00d084', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                                <span style={{ color: '#3b82f6', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>In Progress</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px',
                                background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.3rem', flexShrink: 0,
                                boxShadow: '0 8px 20px rgba(0,123,255,0.25)',
                            }}>🔐</div>
                            <h3 style={{ margin: 0, fontSize: '1.75rem', fontWeight: '800', color: isDark ? 'white' : '#0f172a', letterSpacing: '-0.5px' }}>
                                Auth System
                            </h3>
                        </div>

                        <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.65)', lineHeight: '1.8', marginBottom: '2rem', fontSize: '0.97rem' }}>
                            A comprehensive secure Authentication System with complete UI for login flows, role-based access control, and Multi-Factor Authentication (MFA) with OTP and email verification. Includes full API integration and robust validation handling.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7rem', marginBottom: '2rem' }}>
                            {[
                                { icon: '🔑', label: 'Role-Based Access' },
                                { icon: '📧', label: 'Email Verification' },
                                { icon: '📱', label: 'OTP Authentication' },
                                { icon: '🛡️', label: 'Secure API Layer' },
                            ].map(feat => (
                                <div key={feat.label} style={{
                                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                                    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                                    border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
                                    borderRadius: '10px', padding: '0.6rem 0.85rem',
                                }}>
                                    <span style={{ fontSize: '0.95rem' }}>{feat.icon}</span>
                                    <span style={{ color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(15,23,42,0.65)', fontSize: '0.83rem', fontWeight: '500' }}>{feat.label}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                            {tags.map(tag => (
                                <span key={tag} style={{
                                    background: 'rgba(0,123,255,0.09)', border: '1px solid rgba(0,123,255,0.22)',
                                    color: '#3b82f6', padding: '0.32rem 0.85rem',
                                    borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600',
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                }
            `}</style>
        </section>
    );
};

export default Projects;
