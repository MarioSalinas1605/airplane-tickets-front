import React, { useState } from 'react';

import '@styles/Header.scss';

function Header() {
    const [showHamburguerItems, setShowHamburguerItems] = useState(false);

    const handleHamburguerButton = () => {
        setShowHamburguerItems(prevState => !prevState);
    }

    return (
        <header className="Header">
            <div className="Header_container">
                <a href="/" className="Header__Icon">
                    <h1>✈️ Fly</h1>
                </a>
                <button className="Header__MenuIcon" onClick={handleHamburguerButton}>Menu</button>

                <div className="Header__MenuList">
                    <ul>
                        <li>Cuenta</li>
                        <li>Reservaciones</li>
                        <li>Pagar</li>
                    </ul>
                </div>
            </div>


            {
                showHamburguerItems && (
                    <div className="Header_hamburgerItems">
                        <ul>
                            <li>Cuenta</li>
                            <li>Reservaciones</li>
                            <li>Pagar</li>
                        </ul>
                    </div>
                )
            }
        </header >
    )
}

export { Header }