import React from 'react';
import { render, screen, fireEvent, waitForElement } from "@testing-library/react";
import Login from "../index";

const userLoginData = {
    username: 'doyinolarewaju@gmail.com',
    password: 'password'
};
const onSubmit = jest.fn();
const errorMessages = {
    usernameError: 'Username field is required!',
    passwordError: 'Password field is required!'
};


describe('<Login />', () => {
    beforeEach(() => {
        // Arrange
        render(<Login onSubmit={onSubmit} />)
    });
    it('should render the unconnected <Login /> component without the app crashing.', function () {
        render(<Login />)
    });

    it('should display an error if username and password fields are empty and the user should not be able to submit the form', async () => {
        // Act
        await waitForElement(async () => {
            await fireEvent.submit(screen.getByRole('button'));
        });

        // Assert
        await waitForElement(async () => {
            expect(screen.getByText(errorMessages.usernameError)).toBeInTheDocument();
            expect(screen.getByText(errorMessages.passwordError)).toBeInTheDocument()
        });
        expect(onSubmit).toHaveBeenCalledTimes(0);
        expect(screen.getByLabelText(/username/i).value).toBe("");
        expect(screen.getByLabelText(/password/i).value).toBe("");
    });

    it('should display an error if username field is empty and the user should not be able to submit the form', async () => {
        //Arrange
        fireEvent.input(screen.getByLabelText(/password/i), {
            target: {
                value: userLoginData.password
            }
        });

        // Act
        await waitForElement(async () => {
            await fireEvent.submit(screen.getByRole('button'));
        });

        // Assert
        await waitForElement(async () => {
            expect(screen.getByText(errorMessages.usernameError)).toBeInTheDocument();
        });
        expect(onSubmit).toHaveBeenCalledTimes(0);
        expect(screen.getByLabelText(/username/i).value).toBe("");
        expect(screen.getByLabelText(/password/i).value).toBe(userLoginData.password);
    });

    it('should display an error if password field is empty and the user should not be able to submit the form', async () => {
        // Arrange
        fireEvent.input(screen.getByLabelText(/username/i), {
            target: {
                value: userLoginData.username
            }
        });

        // Act
        await waitForElement(async () => {
            await fireEvent.submit(screen.getByRole('button'));
        });

        // Assert
        await waitForElement(async () => {
            expect(screen.getByText(errorMessages.passwordError)).toBeInTheDocument();
        });
        expect(onSubmit).toHaveBeenCalledTimes(0);
        expect(screen.getByLabelText(/username/i).value).toBe(userLoginData.username);
        expect(screen.getByLabelText(/password/i).value).toBe("");
    });

    it('should be able to submit their email and password by clicking the submit button', async () => {
        // Arrange
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

        // Act
        await waitForElement(async () => {
            await fireEvent.submit(screen.getByRole('button'));
        });

        // Assert
        expect(onSubmit).toHaveBeenCalled();
        expect(screen.getByLabelText(/username/i).value).toBe(userLoginData.username);
        expect(screen.getByLabelText(/password/i).value).toBe(userLoginData.password);
    });
});
