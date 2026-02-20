import React from 'react';

const MailIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GithubIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const LocationIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);


const contactInfo = [
    {
        Icon: MailIcon,
        label: 'Email',
        value: 'adlinwiseley1@gmail.com',
        href: 'mailto:adlinwiseley1@gmail.com',
    },
    {
        Icon: PhoneIcon,
        label: 'Phone',
        value: '+91 63691 45824',
        href: 'tel:+916369145824',
    },
    {
        Icon: LocationIcon,
        label: 'Location',
        value: 'Thoothukudi, Tamil Nadu',
        href: null,
    },
    {
        Icon: LinkedInIcon,
        label: 'LinkedIn',
        value: 'adlinwiseley',
        href: 'https://in.linkedin.com/in/adlin-wiseley-i-b269a0252',
    },
    {
        Icon: GithubIcon,
        label: 'GitHub',
        value: 'adlinwiseley01',
        href: 'https://github.com/adlinwiseley01',
    },
];

const Contact = ({ theme }) => {
    const isDark = theme === 'dark';

    return (
        <section id="contact" style={{ padding: '6rem 2rem', background: isDark ? '#080808' : '#f1f5f9', transition: 'background 0.3s' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.3)',
                        color: '#3b82f6', padding: '0.35rem 1rem', borderRadius: '50px',
                        fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px',
                        textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem',
                    }}>Get in Touch</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: isDark ? 'white' : '#0f172a', letterSpacing: '-0.5px', margin: '0 0 1rem' }}>
                        Contact Me
                    </h2>
                    <p style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(15,23,42,0.55)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
                        I'm open to new opportunities. Feel free to reach out — I'll get back to you as soon as possible!
                    </p>
                </div>

                {/* Contact info cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                    {contactInfo.map(({ Icon, label, value, href }) => {
                        const cardStyle = {
                            display: 'flex', alignItems: 'center', gap: '1.25rem',
                            background: isDark ? 'linear-gradient(145deg, #141414, #1c1c1c)' : 'white',
                            borderRadius: '16px',
                            border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)',
                            boxShadow: isDark ? 'none' : '0 2px 15px rgba(0,0,0,0.05)',
                            padding: '1.1rem 1.4rem',
                            transition: 'transform 0.25s, border-color 0.25s',
                            textDecoration: 'none',
                            cursor: href ? 'pointer' : 'default',
                        };
                        const CardTag = href ? 'a' : 'div';
                        const cardProps = href
                            ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' }
                            : {};

                        return (
                            <CardTag key={label} {...cardProps} style={cardStyle}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.borderColor = 'rgba(0,123,255,0.4)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'; }}>
                                {/* Icon box */}
                                <div style={{
                                    width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
                                    background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.25)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#007bff',
                                }}>
                                    <Icon />
                                </div>

                                {/* Label + value */}
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.73rem', fontWeight: '700', color: isDark ? 'rgba(255,255,255,0.38)' : 'rgba(15,23,42,0.42)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.2rem' }}>
                                        {label}
                                    </div>
                                    <span style={{ color: isDark ? 'rgba(255,255,255,0.88)' : '#0f172a', fontSize: '0.95rem', fontWeight: '600' }}>
                                        {value}
                                    </span>
                                </div>

                                {/* Arrow for clickable cards */}
                                {href && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,123,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                    </svg>
                                )}
                            </CardTag>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Contact;
