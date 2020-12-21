import React from 'react';
import { Table } from 'semantic-ui-react'
import OrderItem from "./OrderItem";

const OrdersListView = ({listOfOrders = [], viewOrderFunc}) => {
    const ordersList = Array.isArray(listOfOrders) ? listOfOrders : [];
    return <>
        <Table padded="very" striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>SN</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Booking Date</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                    <Table.HeaderCell>Customer</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    ordersList.map((order, itemNumber) => {
                        const orderDate = new Date(order.bookingDate);
                        const bookingDate = isNaN(orderDate.getTime()) ? '' : `${orderDate.getDate()}.${orderDate.getMonth() + 1}.${orderDate.getFullYear()}`;
                        return <OrderItem
                            orderItem={order}
                            bookingDate={bookingDate}
                            itemNumber={itemNumber}
                            data-testid={`order-item-${itemNumber}`}
                            viewOrderFunc={viewOrderFunc}
                            key={itemNumber}
                        />
                    })
                }
            </Table.Body>
        </Table>
    </>
};

export default OrdersListView
