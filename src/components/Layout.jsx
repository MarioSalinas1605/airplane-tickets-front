import React from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

import '../assets/styles/Layout.scss'

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