import { expect } from "@jest/globals";
import reducer from "../../reducers";
import { ADD_RESERVATION } from "../../types";
import { Reservation } from "../../__mocks__/ReservationMock";

describe('Reducers', () => {
    test('Return initial state', () => {
        expect(reducer({}, {})).toEqual({});
    })

    test(`${ADD_RESERVATION} reducers`, () => {
        const initialState = {
            reservations: []
        }
        const payload = Reservation;
        const action = {
            type: ADD_RESERVATION,
            payload
        }
        const expected = {
            reservations: [Reservation]
        }
        expect(reducer(initialState, action)).toEqual(expected);
    })
})