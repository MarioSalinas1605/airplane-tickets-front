import React from 'react';
import { mount, shallow } from 'enzyme';

import { ProviderMock } from '../../__mocks__/ProviderMock';
import { ListOfReservations } from '../../containers/ListOfReservations';

describe('<ListOfReservations />', () => {

    test('Render of component ListOfReservations', () => {
        const listOfReservations = shallow(
            <ProviderMock>
                <ListOfReservations />
            </ProviderMock>
        )
        expect(listOfReservations.length).toEqual(1);
    })

    test('Render total', () => {
        const listOfReservations = mount(
            <ProviderMock>
                <ListOfReservations />
            </ProviderMock>
        )
        const totalTitle = listOfReservations.find('.ListOfReservations__total');
        expect(totalTitle.text()).toEqual("Total: 180");
    })

    test('Render list of Reservations', () => {
        const listOfReservations = mount(
            <ProviderMock>
                <ListOfReservations />
            </ProviderMock>
        )
        const totalTitle = listOfReservations.find('article');
        expect(totalTitle.length).toEqual(2);
    })

})