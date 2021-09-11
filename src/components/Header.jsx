import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../assets/styles/Header.scss';

function Header() {
    const [showHamburguerItems, setShowHamburguerItems] = useState(false);

    const handleHamburguerButton = () => {
        setShowHamburguerItems(prevState => !prevState);
    }

    return (
        <header className="Header">
            <div className="Header_container">
                <Link className="Header__link" to="/">
                    <h1 className="Header__title">✈️ Fly</h1>
                </Link>
                <a href="/" className="Header__Icon">

                </a>
                <button className="Header__MenuIcon" onClick={handleHamburguerButton}>Menu</button>

                <div className="Header__MenuList">
                    <ul>
                        <Link to="/reservations">
                            <li>Reservaciones</li>
                        </Link>
                        <Link to="/confirmation-data">
                            <li>Pagar</li>
                        </Link>
                    </ul>
                </div>
            </div>


            {
                showHamburguerItems && (
                    <div className="Header_hamburgerItems">
                        <ul>
                            <Link to="/reservations">
                                <li>Reservaciones</li>
                            </Link>
                            <Link to="/confirmation-data">
                                <li>Pagar</li>
                            </Link>
                        </ul>
                    </div>
                )
            }
        </header >
    )
}

export { Header }