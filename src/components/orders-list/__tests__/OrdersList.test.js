import React from 'react';
import { render, screen } from "@testing-library/react";
import OrdersList from "../index";

const listOfOrders = [
    {
        address: {
            city: 'Berlin',
            country: 'Germany',
            street: 'Wriezener Str. 12',
            zip: '13055'
        },
        bookingDate: 1554284950000,
        customer: {
            email: 'emad.alam@construyo.de',
            name: 'Emad Alam',
            phone: '015252098067'
        },
        title: 'Test Order 1',
        uid: 'hKlIKPoZc2xCKGTUKZK2'
    }
];
const viewOrderFunc = jest.fn();

describe('<OrdersList />', () => {
    beforeEach(() => render(<OrdersList listOfOrders={listOfOrders} />));
    afterEach(() => jest.clearAllMocks());

    it('should render the unconnected <OrdersList /> component without the app crashing.', () => {
        render(<OrdersList viewOrderFunc={viewOrderFunc}/>)
    });

    it('should display a list of orders that match the number of orders passed in as props.', () => {
        const orders = screen.getAllByTestId(/order-/i);
        expect(orders).toHaveLength(listOfOrders.length);
    });
});
