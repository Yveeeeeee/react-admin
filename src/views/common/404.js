import React from 'react';

export const NotFoundPage = () => {
    const errPageProps = {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10000,
            background: '#fff',
        }
    };
    return (
        <div {...errPageProps}>
            <h1 style={{ textAlign: "center", marginTop: 50, fontSize: 52, }}>404</h1>
        </div>
    );
}