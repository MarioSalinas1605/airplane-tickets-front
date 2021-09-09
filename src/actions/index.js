import { ADD_RESERVATION, LOAD_FLIGHTS, LOAD_CITIES } from '../types/index.js';

export const addReservation = payload => ({
    type: ADD_RESERVATION,
    payload
});

export const loadFlights = payload => ({
    type: LOAD_FLIGHTS,
    payload
})

export const loadCities = payload => ({
    type: LOAD_CITIES,
    payload
})