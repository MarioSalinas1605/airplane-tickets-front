import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { addReservation } from '../actions/index.js';
import '../assets/styles/ScheduleFlight.scss';

function ScheduleFlight({ dataFlight, numSeats, origin, destination }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChooseFlight = () => {
        const reservationData = {
            ...dataFlight,
            numSeats,
            origin,
            destination
        }
        console.log(reservationData);
        dispatch(addReservation(reservationData));
        history.push('/');
    }

    return (
        <article className="ListOfFlights__article">
            <div className="ListOfFlights__articleContent">
                <div className="ListOfFlights__Time">
                    <h4>{dataFlight.departureTime}</h4>
                    <p>Salida</p>
                </div>
                <div className="ListOfFlights__Time">
                    <h4>{dataFlight.arrivalTime}</h4>
                    <p>Llegada</p>
                </div>
                <div className="ListOfFlights__buttonContainer">
                    <button className="ListOfFlights__button" onClick={handleChooseFlight}>{`Elegir Tarifa: ${dataFlight.price}`}</button>
                </div>
            </div>
        </article>
    )
}

export { ScheduleFlight }