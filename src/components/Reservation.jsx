import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../actions';
import '../assets/styles/Reservation.scss';

function Reservation({ reservationData }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeReservation(reservationData.code))
    }

    return (
        <article className="Reservation">
            <span onClick={handleDelete}>X</span>
            <div className="Reservation__container">
                <div className="Reservation__origin">
                    <h4>{reservationData.origin}</h4>
                    <p>Origen</p>
                </div>
                <div className="Reservation__destiny">
                    <h4>{reservationData.destination}</h4>
                    <p>Destino</p>
                </div>
                <div className="Reservation__Time">
                    <h4>{`${reservationData.departureTime} - ${reservationData.arrivalTime}`}</h4>
                    <p>Horario</p>
                </div>
                <div className="Reservation__numPeople">
                    <h4>{reservationData.numSeats}</h4>
                    <p>Personas</p>
                </div>
                <div className="Reservation__price">
                    <h4>{`Precio: ${reservationData.price}`}</h4>
                </div>
            </div>
        </article>
    )
}

export { Reservation }