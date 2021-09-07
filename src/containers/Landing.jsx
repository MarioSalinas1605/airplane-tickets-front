import { ChooseFly } from '../components/ChooseFly.jsx';
import { Offers } from '../components/Offers.jsx';
import { Subscribe } from '../components/Subscribe.jsx';

import '../assets/styles/Landing.scss';

function Landing() {

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