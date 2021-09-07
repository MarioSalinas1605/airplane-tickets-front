import '../assets/styles/ChooseFly.scss'

function ChooseFly() {
    return (
        <section className="ChooseFly">
            <form action="submit" className="ChooseFly__form" >
                <h3>Reservar un vuelo</h3>
                <div className="ChooseFly__formContainer">
                    <div className="ChooseFly__city">
                        <select name="destiny">
                            <option value="cdmx" defaultValue>CDMX</option>
                            <option value="puebla" >Puebla</option>
                            <option value="monterrey">Monterrey</option>
                        </select>
                        <span>Origen</span>
                    </div>
                    <div className="ChooseFly__city">
                        <select name="origin">
                            <option value="cdmx" defaultValue>CDMX</option>
                            <option value="puebla" >Puebla</option>
                            <option value="monterrey">Monterrey</option>
                        </select>
                        <span>Destino</span>
                    </div>

                    <div className="ChooseFly__passengers">
                        <input type="number" min="0" max="144" placeholder="0" />
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