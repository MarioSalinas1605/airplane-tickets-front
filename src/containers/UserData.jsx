import '../assets/styles/UserData.scss'

function UserData() {
    return (
        <section className="UserData">
            <div className="UserData__container">
                <h3>Reserva de Vuelos</h3>
                <form action="submit" className="UserData__form">
                    <div className="UserData__input">
                        <label>Nombre:</label>
                        <input type="text" />
                    </div>
                    <div className="UserData__input">
                        <label>Apellidos:</label>
                        <input type="text" />
                    </div>
                    <div className="UserData__input">
                        <label>Dirección:</label>
                        <input type="text" />
                    </div>
                    <div className="UserData__input">
                        <label>Correo Electrónico:</label>
                        <input type="email" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export { UserData }