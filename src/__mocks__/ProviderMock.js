import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import reducer from '../reducers/index';

const initialState = {
    cities: [],
    flights: [],
    reservations: [
        {
            code: 'cam2',
            departureTime: '10am',
            arrivalTime: '12pm',
            price: '80',
            availableSeats: 100,
            numSeats: '2',
            origin: 'Cancún',
            destination: 'Monterrey'
        },
        {
            code: 'cam3',
            departureTime: '12am',
            arrivalTime: '2pm',
            price: '100',
            availableSeats: 100,
            numSeats: '2',
            origin: 'Cancún',
            destination: 'Monterrey'
        }
    ],
    paymentFinished: false
}

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        {props.children}
    </Provider>
)

export { ProviderMock }