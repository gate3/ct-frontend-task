import loginReducer, {
    initialState,
    initiateUserLogin, userLoginSuccess, userLoginError,
    initiateUserLogout, userLogoutSuccess, userLogoutError
} from "../login-redux-slice";

// Arrange
const modifyState = (newState = {}) => ({
    ...initialState,
    ...newState
});

describe('Authentication Reducers', () => {
    it('should be able to return the initial state.', () => {
        // Act
        const actualState = loginReducer(undefined, {});

        // Assert
        expect(actualState).toBe(initialState)
    });

    describe('Login Reducers', () => {
        it('should return login state with loading state being true.', () => {
           // Arrange
           const expectedState = modifyState({  loading: true });

           // Act
           const actualState = loginReducer(initialState, initiateUserLogin());

           // Assert
           expect(actualState).toMatchObject(expectedState);
        });
        it('should return login success state with logged in user data.', () => {
            // Arrange
            const userData = {
                userId: 'SomeuserId'
            };
            const expectedState = modifyState({
                responsePayload: {
                    ...userData
                }
            });

            // Act
            const actualState = loginReducer(initialState, userLoginSuccess(userData));

            // Assert
            expect(actualState).toMatchObject(expectedState);
        });

        it('should return logout success state with logged in user data.', () => {
            // Arrange
            const errorData = {
                message: 'Invalid username or password'
            };
            const expectedState = modifyState({
                hasErrors: true,
                responsePayload: {
                    ...errorData,
                }
            });

            // Act
            const actualState = loginReducer(initialState, userLoginError(errorData));

            // Assert
            expect(actualState).toMatchObject(expectedState);
        });
    });

    describe('Logout Reducers', () => {
        it('should return logout state with loading state being true.', () => {
            // Arrange
            const expectedState = modifyState({  loading: true });

            // Act
            const actualState = loginReducer(initialState, initiateUserLogout());

            // Assert
            expect(actualState).toMatchObject(expectedState);
        });
        it('should return logout success state with no new user data.', () => {
            // Arrange
            const logoutData = null;

            // Act
            const actualState = loginReducer(initialState, userLogoutSuccess(logoutData));

            // Assert
            expect(actualState).toMatchObject(initialState);
        });

        it('should return login success state with logged in user data.', () => {
            // Arrange
            const errorData = {
                message: 'Error logging user out.'
            };
            const expectedState = modifyState({
                hasErrors: true,
                responsePayload: {
                    ...errorData,
                }
            });

            // Act
            const actualState = loginReducer(initialState, userLogoutError(errorData));

            // Assert
            expect(actualState).toMatchObject(expectedState);
        });
    });
});
