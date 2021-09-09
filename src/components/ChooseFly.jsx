import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../assets/styles/ChooseFly.scss';

function ChooseFly() {
    const cities = useSelector((state) => state.cities)
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [numSeats, setNumSeats] = useState(0);

    const handleOriginChange = event => {
        setOrigin(event.target.value);
    }

    const handleNumPassengers = event => {
        setNumSeats(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
        if (!origin || !destination || numSeats === 0) {
            alert('Completa los campos')
        }
    }

    useEffect(() => {
        if (origin) {
            const filterdDestination = cities.find(city => city.origin === origin);
            setDestination(filterdDestination);
        }
    }, [origin])

    return (
        <section className="ChooseFly">
            <form
                action="submit"
                className="ChooseFly__form"
                onSubmit={handleSubmit}
            >
                <h3>Reservar un vuelo</h3>
                <div className="ChooseFly__formContainer">
                    <div className="ChooseFly__city">
                        <select name="destiny" value={origin} onChange={handleOriginChange}>
                            {
                                !origin && <option value="choose" defaultValue>Elige un origen</option>
                            }
                            {
                                cities.map(originCity => (
                                    <option
                                        key={originCity.id}
                                        value={originCity.origin}
                                    >
                                        {originCity.origin}
                                    </option>
                                ))
                            }
                        </select>
                        <span>Origen</span>
                    </div>
                    <div className="ChooseFly__city">
                        <select name="origin" disabled={!origin}>
                            {!origin && <option value="choose" defaultValue>Elige un destino</option>}
                            {
                                destination.destinations?.map((destinationCity, index) => (
                                    <option
                                        key={index}
                                        value={destinationCity}
                                    >
                                        {destinationCity}
                                    </option>
                                ))
                            }
                        </select>
                        <span>Destino</span>
                    </div>

                    <div className="ChooseFly__passengers">
                        <input
                            type="number"
                            min="0"
                            max="144"
                            placeholder="0"
                            value={numSeats}
                            onChange={handleNumPassengers}
                        />
                        <span>Número de pasajeros</span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="ChooseFly__submit"
                >
                    Buscar
                </button>
            </form>
        </section>
    )
}

export { ChooseFly }