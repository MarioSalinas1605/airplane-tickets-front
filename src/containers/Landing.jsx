import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFetchFlights } from '../hooks/useFetchFlights.js';
import { ChooseFly } from '../components/ChooseFly.jsx';
import { Offers } from '../components/Offers.jsx';
import { Subscribe } from '../components/Subscribe.jsx';

import { setFinishPayment } from '../actions';
import '../assets/styles/Landing.scss';

function Landing() {
    const dispatch = useDispatch();
    useFetchFlights();
    const isPaymentFinished = useSelector(state => state.paymentFinished);

    useEffect(() => {
        return () => {
            if (isPaymentFinished) {
                dispatch(setFinishPayment(false));
            }
        }
    }, [])

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