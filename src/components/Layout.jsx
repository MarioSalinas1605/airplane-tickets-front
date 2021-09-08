import React from 'react';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';

function Layout({ children }) {
    return (
        <div className="Layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export { Layout }