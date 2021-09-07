import { ScheduleFlight } from '../components/ScheduleFlight.jsx';

import '../assets/styles/ListOfFlights.scss'

function ListOfFlights() {
    return (
        <div className="ListOfFlights">
            <div className="ListOfFlights__title">
                <h3>Horarios de vuelo</h3>
            </div>
            <div className="ListOfFlights__container">
                {
                    [0, 1, 3].map((item, index) => (
                        <ScheduleFlight key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export { ListOfFlights }