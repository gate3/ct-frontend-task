import React from 'react';
import { Segment, Form, Button, Grid } from 'semantic-ui-react';

const InlineStyle = () => (
    <style>
        {`
        .grid {
          position: relative;
          height: 100vh;
        }
         .ui-centered-raised-card {
            margin: 0;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        
    `}
    </style>
);
const OrderItemEdit = ({ order }) => {
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
        <>
        <InlineStyle/>
        <Grid centered columns={2}>
            <Grid.Column>
                <Segment raised className="ui-centered-raised-card">
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Title' value={title} />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Name' value={name} />
                            <Form.Input fluid label='Name' value={bookingDate} />
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

                    <Button
                        fluid
                        content="Save Order"
                        labelPosition='right'
                        icon='checkmark'
                        positive
                    />
                </Segment>
            </Grid.Column>
        </Grid>
        </>
    )
};

export default OrderItemEdit;
