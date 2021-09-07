import '../assets/styles/Reservation.scss';

function Reservation() {
    return (
        <article className="Reservation">
            <span>X</span>
            <div className="Reservation__container">
                <div className="Reservation__origin">
                    <h4>CDMX</h4>
                    <p>Origen</p>
                </div>
                <div className="Reservation__destiny">
                    <h4>Cancun</h4>
                    <p>Destino</p>
                </div>
                <div className="Reservation__Time">
                    <h4>8:30am - 10:30am</h4>
                    <p>Horario</p>
                </div>
                <div className="Reservation__numPeople">
                    <h4>4</h4>
                    <p>Personas</p>
                </div>
                <div className="Reservation__price">
                    <h4>Precio: 100</h4>
                </div>
            </div>
        </article>
    )
}

export { Reservation }