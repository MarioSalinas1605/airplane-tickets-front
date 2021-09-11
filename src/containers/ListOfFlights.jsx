import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetchFlights } from '../hooks/useFetchFlights.js';
import { ScheduleFlight } from '../components/ScheduleFlight.jsx';
import { Loader } from '../components/Loader.jsx';
import { Error } from '../components/Error.jsx';

import '../assets/styles/ListOfFlights.scss';

function ListOfFlights(props) {
    const { loading, error } = useFetchFlights();
    const { id, numSeats } = props.match.params;
    const flights = useSelector(state => state.flights);
    const [filteredFlights, setFilteredFlights] = useState({});

    useEffect(() => {
        const flight = flights.find(flight => flight.id == id);
        setFilteredFlights(flight);
        console.log(filteredFlights);
    }, [flights])

    if (error) {
        return <Error />
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="ListOfFlights">
            <div className="ListOfFlights__title">
                <h3>Horarios de vuelo</h3>
            </div>
            <div className="ListOfFlights__container">
                {
                    filteredFlights?.flightsOfDay && filteredFlights.flightsOfDay.map((flight, index) => (
                        <ScheduleFlight
                            key={index}
                            dataFlight={flight}
                            numSeats={numSeats}
                            origin={filteredFlights.origin}
                            destination={filteredFlights.destination}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export { ListOfFlights }