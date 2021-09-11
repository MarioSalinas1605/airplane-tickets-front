import { ADD_RESERVATION, LOAD_FLIGHTS, LOAD_CITIES, REMOVE_RESERVATION, CLEAR_RESERVATION, SET_FINISH_PAYMENT } from '../types/index.js';

export const addReservation = payload => ({
    type: ADD_RESERVATION,
    payload
});

export const removeReservation = payload => ({
    type: REMOVE_RESERVATION,
    payload
});

export const clearReservation = payload => ({
    type: CLEAR_RESERVATION,
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

export const setFinishPayment = payload => ({
    type: SET_FINISH_PAYMENT,
    payload
})