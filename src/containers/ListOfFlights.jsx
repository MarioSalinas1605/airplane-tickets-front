import '../assets/styles/ListOfFlights.scss'

function ListOfFlights() {
    return (
        <div className="ListOfFlights">
            <h3>Horarios de vuelo</h3>
            {
                [0, 1, 3].map((item, index) => (
                    <article className="ListOfFlights__article" key={index}>
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
                ))
            }
        </div>
    )
}

export { ListOfFlights }