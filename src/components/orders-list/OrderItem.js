import React from 'react';
import { Table, Header, Button, Icon } from 'semantic-ui-react'

const OrderItem = (props) => {
    const {
        orderItem,
        itemNumber,
        viewOrderFunc
    } = props;

    const {
        bookingDate,
        title,
        address: {
            city = '',
            country = '',
            street = '',
            zip = ''
        } = {},
        customer: {
            email = '',
            name ='',
            phone =''
        } = {},
    } = orderItem;

    return <Table.Row data-testid={`order-${itemNumber}`}>
        <Table.Cell>{(itemNumber + 1)}</Table.Cell>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{bookingDate}</Table.Cell>
        <Table.Cell>
            <Header as="h4">
                <Header.Content>
                    <Header.Subheader>{`${street}, ${city}, ${zip}`}</Header.Subheader>
                    {country}
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell>
            <Header as="h4">
                <Header.Content>
                    {name}
                    <Header.Subheader>{email}</Header.Subheader>
                    <Header.Subheader>{phone}</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell>
            <Button primary animated onClick={() => viewOrderFunc(orderItem)}>
                <Button.Content visible>View</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right'/>
                </Button.Content>
            </Button>
        </Table.Cell>
    </Table.Row>
};

export default OrderItem;
