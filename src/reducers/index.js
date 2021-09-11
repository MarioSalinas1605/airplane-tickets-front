import { LOAD_FLIGHTS, ADD_RESERVATION, LOAD_CITIES, REMOVE_RESERVATION, CLEAR_RESERVATION, SET_FINISH_PAYMENT } from '../types/index.js';
const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_FLIGHTS:
            return {
                ...state,
                flights: [...action.payload]
            };
        case LOAD_CITIES:
            return {
                ...state,
                cities: [...action.payload]
            };
        case ADD_RESERVATION:
            return {
                ...state,
                reservations: [...state.reservations, action.payload]
            };
        case REMOVE_RESERVATION:
            const filteredReservations = state.reservations.filter(reservation => reservation.code != action.payload)
            return {
                ...state,
                reservations: [...filteredReservations]
            }
        case CLEAR_RESERVATION:
            return {
                ...state,
                reservations: []
            }
        case SET_FINISH_PAYMENT:
            return {
                ...state,
                paymentFinished: action.payload
            }
        default:
            return state;
    }
}

export default reducer;