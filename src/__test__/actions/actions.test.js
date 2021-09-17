import { expect } from "@jest/globals";
import { addReservation } from "../../actions";
import { ADD_RESERVATION } from "../../types";
import { Reservation } from "../../__mocks__/ReservationMock";

describe('Actions', () => {
    test(`${ADD_RESERVATION} Action`, () => {
        const payload = Reservation;
        const expected = {
            type: ADD_RESERVATION,
            payload
        }
        expect(addReservation(payload)).toEqual(expected);
    })
})