import '../assets/styles/ScheduleFlight.scss'

function ScheduleFlight() {
    return (
        <article className="ListOfFlights__article">
            <div className="ListOfFlights__articleContent">
                <div className="ListOfFlights__Time">
                    <h4>8:30am</h4>
                    <p>Salida</p>
                </div>
                <div className="ListOfFlights__Time">
                    <h4>10:30am</h4>
                    <p>Llegada</p>
                </div>
                <div className="ListOfFlights__buttonContainer">
                    <button className="ListOfFlights__button">Elegir Tarifa: 100</button>
                </div>
            </div>
        </article>
    )
}

export { ScheduleFlight }