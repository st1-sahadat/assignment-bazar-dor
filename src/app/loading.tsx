import React from 'react';

const LoadingPage = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)',
                fontFamily: 'sans-serif',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '2rem 2.5rem',
                    borderRadius: '20px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(148, 163, 184, 0.25)',
                    boxShadow: '0 25px 50px rgba(15, 23, 42, 0.45)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <div
                    style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        border: '4px solid rgba(148, 163, 184, 0.3)',
                        borderTopColor: '#f59e0b',
                        animation: 'spin 1s linear infinite',
                        boxShadow: '0 0 20px rgba(245, 158, 11, 0.35)',
                    }}
                />

                <p
                    style={{
                        margin: 0,
                        color: '#e2e8f0',
                        fontSize: '1rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                    }}
                >
                    Loading...
                </p>
            </div>

            <style>{`
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default LoadingPage;