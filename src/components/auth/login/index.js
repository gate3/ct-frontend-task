import React, {useState} from 'react';
import {Grid, Segment, Form, Button, Header} from "semantic-ui-react";
import {ReactComponent as LoginImage} from '../../../assets/img/key-auth.svg';
import {LoginErrorMessages} from './login-constants';

const InlineStyle = () => (
    <style>
        {`
        .grid {
          position: relative;
          height: 100vh;
        }
        label {
            float: left;
        }
        .ui-centered-raised-card {
            margin: 0;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        h3 {
            margin-top: 0px;
            margin-bottom: 20px;
            
        }
    `}
    </style>
);

const Login = ({ onSubmit }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onFormSubmit = () => {
        setFormSubmitted(true);
        if(username && password) onSubmit({ username, password});
    };

    return <>
        <InlineStyle/>
        <Grid centered columns={4}>
            <Grid.Column>
                <Segment raised={true} textAlign={"center"} className="ui-centered-raised-card">
                    <div>
                        <LoginImage width={60} height={120}/>
                        <Header as="h3">
                            Please Login
                        </Header>
                    </div>
                    <Form onSubmit={() => onFormSubmit()}>
                        <Form.Input
                            error={(formSubmitted && !username) ? LoginErrorMessages.emptyUsername : false}
                            onChange={fieldReference => setUsername(fieldReference.target.value)}
                            fluid
                            label="Username"
                            placeholder="Username"
                            id="username"
                        />
                        <Form.Input
                            error={(formSubmitted && !password) ? LoginErrorMessages.emptyPassword : false}
                            onChange={fieldReference => setPassword(fieldReference.target.value)}
                            fluid
                            label="Password"
                            placeholder="Password"
                            type="password"
                            id="password"
                        />
                        <Button
                            onClick={() => console.log('eeee')}
                            type="submit"
                            positive
                            disabled={!username || !password}>
                            Login
                        </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    </>
};

export default Login;
