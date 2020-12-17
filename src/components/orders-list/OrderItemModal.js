import React from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';

const OrderItemModal = ({ order, onClose, showModal = false }) => {
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
    } = order;
    return (
        <Modal
        dimmer="blurring"
        open={showModal}
        onClose={onClose}>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' value={title} />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Name' value={name} />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Email' value={email} />
                        <Form.Input fluid label='Phone' value={phone} />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Street' value={street} />
                        <Form.Input fluid label='City' value={city} />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Zip' value={zip} />
                        <Form.Input fluid label='Country' value={country} />
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    content="Save Order"
                    labelPosition='right'
                    icon='checkmark'
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
};

export default OrderItemModal;
