import { LOAD_FLIGHTS, ADD_RESERVATION, LOAD_CITIES } from '../types/index.js';
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

        default:
            return state;
    }
}

export default reducer;