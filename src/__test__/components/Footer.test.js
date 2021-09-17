import React from 'react';
import { mount } from 'enzyme';
import { Footer } from '../../components/Footer.jsx'

describe('<Footer />', () => {
    const footer = mount(<Footer />);

    test('Render Footer component', () => {
        expect(footer.length).toEqual(1);
    })

    test('Render of links', () => {
        expect(footer.find('.Footer__terms').text()).toEqual('Terminos de uso');
        expect(footer.find('.Footer__privacy').text()).toEqual('Declaración de privacidad');
        expect(footer.find('.Footer__help').text()).toEqual('Centro de ayuda');
    })
})