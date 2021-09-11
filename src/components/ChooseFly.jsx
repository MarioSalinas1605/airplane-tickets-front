import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import '../assets/styles/ChooseFly.scss';

function ChooseFly(props) {
    const originList = useSelector(state => state.cities);
    const flights = useSelector(state => state.flights);
    const [destinationList, setDestinationList] = useState([]);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [numSeats, setNumSeats] = useState(0);
    const history = useHistory();

    const handleOriginChange = event => {
        console.log(event.target.value);
        setOrigin(event.target.value);
    }

    const hangleDestinationChange = event => {
        console.log(event.target.value);
        setDestination(event.target.value);
    }

    const handleNumPassengers = event => {
        setNumSeats(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
        if (!origin || !destination || numSeats === 0) {
            alert('Completa los campos')
        } else {
            const flight = flights.find(flightData => flightData.origin === origin && flightData.destination === destination)
            history.push(`/flights/${flight.id}/numSeats/${numSeats}`);
        }
    }

    useEffect(() => {
        if (origin) {
            const filterdDestination = originList.find(city => city.origin === origin)?.destinations;
            setDestinationList(filterdDestination);
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
                        <select
                            name="destiny"
                            value={origin}
                            onChange={handleOriginChange}
                        >
                            {
                                !origin && <option value="choose" defaultValue>Elige un origen</option>
                            }
                            {
                                originList.map(originCity => (
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
                        <select
                            name="origin"
                            disabled={!origin}
                            value={destination}
                            onChange={hangleDestinationChange}
                        >
                            {!destination && <option value="choose" defaultValue>Elige un destino</option>}
                            {
                                destinationList.map((destination, index) => (
                                    <option
                                        key={index}
                                        value={destination}
                                    >
                                        {destination}
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