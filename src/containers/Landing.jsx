import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFetchFlights } from '../hooks/useFetchFlights.js';
import { ChooseFly } from '../components/ChooseFly.jsx';
import { Offers } from '../components/Offers.jsx';
import { Subscribe } from '../components/Subscribe.jsx';
import { Loader } from '../components/Loader.jsx';
import { Error } from '../components/Error.jsx';

import { setFinishPayment } from '../actions';
import '../assets/styles/Landing.scss';

function Landing() {
    const dispatch = useDispatch();
    const { loading, error } = useFetchFlights();
    const isPaymentFinished = useSelector(state => state.paymentFinished);

    useEffect(() => {
        return () => {
            if (isPaymentFinished) {
                dispatch(setFinishPayment(false));
            }
        }
    }, [])

    if (error) {
        return <Error />
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="Landing">
            {
                isPaymentFinished && <section className="Landing__paymentFinished">
                    <h3>¡Gracias por tu reserva!</h3>
                </section>
            }
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