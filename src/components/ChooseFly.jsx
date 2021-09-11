import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import '../assets/styles/ChooseFly.scss';

function ChooseFly(props) {
    const originList = useSelector(state => state.cities);
    const flights = useSelector(state => state.flights);
    const [destinationList, setDestinationList] = useState([]);
    const [formState, setFormState] = useState({
        numSeats: 0,
        origin: '',
        destination: ''
    })
    const history = useHistory();

    const handleInput = event => {
        setFormState(state => ({
            ...state,
            [event.target.id]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formState.origin || !formState.destination || formState.numSeats === 0) {
            alert('Completa los campos')
        } else {
            const flight = flights.find(flightData => flightData.origin === formState.origin && flightData.destination === formState.destination)
            history.push(`/flights/${flight.id}/numSeats/${formState.numSeats}`);
        }
    }

    useEffect(() => {
        if (formState.origin) {
            const filterdDestination = originList.find(city => city.origin === formState.origin)?.destinations;
            setDestinationList(filterdDestination);
        }
    }, [formState.origin])

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
                            id="origin"
                            name="origin"
                            value={formState.origin}
                            onChange={handleInput}
                        >
                            {
                                !formState.origin && <option value="choose" defaultValue>Elige un origen</option>
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
                            id="destination"
                            name="destination"
                            disabled={!formState.origin}
                            value={formState.destination}
                            onChange={handleInput}
                        >
                            {!formState.destination && <option value="choose" defaultValue>Elige un destino</option>}
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
                            id="numSeats"
                            type="number"
                            min="0"
                            max="144"
                            placeholder="0"
                            value={formState.numSeats}
                            onChange={handleInput}
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