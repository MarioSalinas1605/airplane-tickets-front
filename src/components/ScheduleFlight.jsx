import React from 'react';
import '../assets/styles/ScheduleFlight.scss';

function ScheduleFlight({ dataFlight }) {
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
                    <button className="ListOfFlights__button">{`Elegir Tarifa: ${dataFlight.price}`}</button>
                </div>
            </div>
        </article>
    )
}

export { ScheduleFlight }