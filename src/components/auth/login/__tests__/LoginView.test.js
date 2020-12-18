import React from 'react';
import { render, screen, fireEvent, act } from "@testing-library/react";
import Login, {LoginView} from "../index";
import {LoginErrorMessages} from "../login-constants";

// Arrange
const userLoginData = {
    username: 'doyinolarewaju@gmail.com',
    password: 'password'
};
const onSubmit = jest.fn();
const errorMessages = {
    usernameError: LoginErrorMessages.emptyUsername,
    passwordError: LoginErrorMessages.emptyPassword
};


describe('<LoginView />', () => {
    beforeEach(() => render(<LoginView onSubmit={onSubmit} />));
    afterEach(() => jest.clearAllMocks());

    it('should render the unconnected <LoginView /> component without the app crashing.', function () {
        render(<LoginView />)
    });

    it('should display an error if username and password fields are empty and the user should not be able to submit the form', async () => {
        // Act
        await act(async () => {
            await fireEvent.submit(screen.getByRole('button'));
        });

        // Assert
        await act(async () => {
            expect(screen.getByText(errorMessages.usernameError)).toBeInTheDocument();
            expect(screen.getByText(errorMessages.passwordError)).toBeInTheDocument()
        });
        expect(onSubmit).toHaveBeenCalledTimes(0);
        expect(screen.getByLabelText(/username/i).value).toBe("");
        expect(screen.getByLabelText(/password/i).value).toBe("");
    });

    it('should display an error if username field is empty and the user should not be able to submit the form', async () => {
        // Act
        fireEvent.input(screen.getByLabelText(/password/i), {
            target: {
                value: userLoginData.password
            }
        });

        await act(async () => {
            await fireEvent.submit(screen.getByRole('button'));
        });

        // Assert
        await act(async () => {
            expect(screen.getByText(errorMessages.usernameError)).toBeInTheDocument();
        });
        expect(onSubmit).toHaveBeenCalledTimes(0);
        expect(screen.getByLabelText(/username/i).value).toBe("");
        expect(screen.getByLabelText(/password/i).value).toBe(userLoginData.password);
    });

    it('should display an error if password field is empty and the user should not be able to submit the form', async () => {
        // Act
        fireEvent.input(screen.getByLabelText(/username/i), {
            target: {
                value: userLoginData.username
            }
        });

        await act(async () => {
            await fireEvent.submit(screen.getByRole('button'));
        });

        // Assert
        await act(async () => {
            expect(screen.getByText(errorMessages.passwordError)).toBeInTheDocument();
        });
        expect(onSubmit).toHaveBeenCalledTimes(0);
        expect(screen.getByLabelText(/username/i).value).toBe(userLoginData.username);
        expect(screen.getByLabelText(/password/i).value).toBe("");
    });

    it('should be able to submit their email and password by clicking the submit button', async () => {
        // Act
        fireEvent.input(screen.getByLabelText(/username/i), {
            target: {
                value: userLoginData.username
            }
        });
        fireEvent.input(screen.getByLabelText(/password/i), {
            target: {
                value: userLoginData.password
            }
        });

        await act(async () => {
            await fireEvent.submit(screen.getByRole('button'));
        });

        // Assert
        expect(onSubmit).toHaveBeenCalled();
        expect(screen.getByLabelText(/username/i).value).toBe(userLoginData.username);
        expect(screen.getByLabelText(/password/i).value).toBe(userLoginData.password);
    });
});
