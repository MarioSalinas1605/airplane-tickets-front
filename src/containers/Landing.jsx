import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { loadFlights, loadCities } from '../actions/index.js'
import { ChooseFly } from '../components/ChooseFly.jsx';
import { Offers } from '../components/Offers.jsx';
import { Subscribe } from '../components/Subscribe.jsx';

import '../assets/styles/Landing.scss';

function Landing() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)


    useEffect(() => {
        fetchFlights()
    }, [])

    async function fetchFlights() {
        try {
            setIsLoading(true);
            setIsError(false);
            const { data, status } = await axios({
                url: `http://still-taiga-02756.herokuapp.com/flights`,
                method: "get"
            });
            if (status === 200) {
                dispatch(loadFlights(data.flights));
                dispatch(loadCities(data.cities));
                setIsLoading(false);
            }
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    }

    return (
        <div className="Landing">
            <section className="Landing_main">
                <ChooseFly />
                <Offers />
            </section>
            <section className="Landing_subscribe">
                <Subscribe />
            </section>
        </div>
    )
}

export { Landing }