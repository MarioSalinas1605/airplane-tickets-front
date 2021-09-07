import '../assets/styles/Subscribe.scss'

function Subscribe() {
    return (
        <article className="Subscribe">
            <div className="Subscribe__textContent">
                <h3>¿Está buscando ofertas especiales?</h3>
                <p>Suscríbase aquí y reciba ofertas personalizadas e inspiración para viajar en su bandeja de entrada.</p>
            </div>
            <div className="Subscribe__buttonContainer">
                <button className="Subscribe__button">Suscribase ya</button>
            </div>
        </article>
    )
}

export { Subscribe }