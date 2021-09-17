import React from 'react';
import { useSelector } from 'react-redux';
import { Reservation } from '../components/Reservation.jsx';

import '../assets/styles/ListOfReservations.scss';

function ListOfReservations() {
    const reservations = useSelector(state => state.reservations);
    const reducer = (sum, val) => sum + parseFloat(val.price);

    const total = reservations.reduce(reducer, 0);

    if (!reservations.length) {
        return <h3 className="ListOfReservations__emptyTitle">Por favor selecciona un vuelo 🙂</h3>
    }

    return (
        <div className="ListOfReservations">
            <section className="ListOfReservations__title">
                <h3>Tus reservaciones</h3>
                <h3 className="ListOfReservations__total">Total: {total}</h3>
            </section>
            <div className="LisOfReservations__container">
                {
                    reservations.map((reservation, index) => (
                        <Reservation key={reservation.code} reservationData={reservation} />
                    ))
                }
            </div>
        </div>
    )
}

export { ListOfReservations }

