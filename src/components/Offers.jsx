import React from 'react';
import offerImage from '../assets/images/offer.jpg'

import '../assets/styles/Offers.scss';

function Offers() {
    return (
        <div className="Offers">
            <img src={offerImage} alt="Offers" />
        </div>
    )
}

export { Offers }