import React from 'react';
import { Reservation } from '@components/Reservation.jsx';
import '@styles/ListOfReservations.scss';

function ListOfReservations() {
    return (
        <div className="ListOfReservations">
            <section className="ListOfReservations__title">
                <h3>Tus reservaciones</h3>
                <h3>Total: $1000</h3>
            </section>
            <div className="LisOfReservations__container">
                {
                    [0, 1].map((item, index) => (
                        <Reservation key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export { ListOfReservations }

