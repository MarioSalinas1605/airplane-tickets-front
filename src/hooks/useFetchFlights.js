import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

import { loadFlights, loadCities } from '../actions/index.js'

export const useFetchFlights = () => {
    const dispatch = useDispatch();
    const [fetch_data, setFetchData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const flights = useSelector(state => state.flights);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await axios({
                    url: `http://still-taiga-02756.herokuapp.com/flights`,
                    method: "get"
                });
                dispatch(loadFlights(data.flights));
                dispatch(loadCities(data.cities));
                setFetchData(data);
            } catch (error) {
                setError(error)
            }
            setLoading(false);
        }

        if (flights.length === 0) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, []);

    return { data: fetch_data, loading, error };
}