import React from 'react';

import '../assets/styles/Footer.scss';

function Footer() {
    return (
        <footer className="Footer">
            <a className="Footer__terms" href="/">Terminos de uso</a>
            <a className="Footer__privacy" href="/">Declaración de privacidad</a>
            <a className="Footer__help" href="/">Centro de ayuda</a>
        </footer>
    )
}

export { Footer }