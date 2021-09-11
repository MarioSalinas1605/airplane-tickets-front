import React from 'react';

import '../assets/styles/Error.scss';

function Error({ message = "Lo sentimos algo salió mal 🙁" }) {
    return (
        <section className="Error__container">
            <h3>{message}</h3>
        </section>
    )
}

export { Error }