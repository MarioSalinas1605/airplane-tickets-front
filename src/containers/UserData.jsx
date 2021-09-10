import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { clearReservation } from '../actions';
import '../assets/styles/UserData.scss';

function UserData() {
    const dispatch = useDispatch();
    const history = useHistory();
    const flights = useSelector(state => state.flights);
    const [formState, setFormState] = useState({
        name: '',
        lastName: '',
        address: '',
        email: ''
    })

    const handleInput = event => {
        setFormState({
            ...formState,
            [event.target.id]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
        dispatch(clearReservation());
        history.push('/');
    }

    if (flights.length === 0) {
        return <h3>Por favor selecciona un vuelo</h3>
    }

    return (
        <section className="UserData">
            <div className="UserData__container">
                <h3>Reserva de Vuelos</h3>
                <form action="submit" className="UserData__form" onSubmit={handleSubmit}>
                    <div className="UserData__input">
                        <label>Nombre:</label>
                        <input
                            id="name"
                            value={formState.name}
                            onChange={handleInput}
                            type="text"
                        />
                    </div>
                    <div className="UserData__input">
                        <label>Apellidos:</label>
                        <input
                            id="lastName"
                            value={formState.lastName}
                            onChange={handleInput}
                            type="text"
                        />
                    </div>
                    <div className="UserData__input">
                        <label>Dirección:</label>
                        <input
                            id="address"
                            value={formState.address}
                            onChange={handleInput}
                            type="text"
                        />
                    </div>
                    <div className="UserData__input">
                        <label>Correo Electrónico:</label>
                        <input
                            id="email"
                            value={formState.email}
                            onChange={handleInput}
                            type="email"
                        />
                    </div>
                    <div className="UserData__buttonContainer">
                        <button
                            type="submit"
                            className="UserData__button"
                            disabled={!formState.name || !formState.lastName || !formState.address || !formState.email}
                        >
                            Reservar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export { UserData }