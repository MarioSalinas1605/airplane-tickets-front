import React from 'react';

import '../assets/styles/Loader.scss'

function Loader() {
    return (
        <div className="Loader__container">
            <div className="lds-grid">
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}

export { Loader }