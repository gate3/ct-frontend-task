import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    userLogin,
    initialState,
    initiateUserLogin, userLoginSuccess, userLoginError,
    initiateUserLogout, userLogoutSuccess, userLogoutError, userLogout
} from "../login-redux-slice";
import {MockUserData} from "../login-constants";
import AuthService from "../../../../services/auth/auth-service";

jest.mock('../../../../services/auth/auth-service');

const {userLoginData} = MockUserData;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Arrange
const expectedAuthActions = {
    initiateUserLogin: () => ({
        type:  initiateUserLogin.type
    }),
    userLoginSuccessAction: payload => ({
        type:  userLoginSuccess.type,
        payload
    }),
    userLoginErrorAction: payload => ({
        type:  userLoginError.type,
        payload
    }),
    initiateUserLogout: () => ({
        type:  initiateUserLogout.type
    }),
    userLogoutSuccessAction: payload => ({
        type:  userLogoutSuccess.type,
        payload
    }),
    userLogoutErrorAction: payload => ({
        type:  userLogoutError.type,
        payload
    }),
};

const mockUserData = {
    additionalUserInfo: {
        isNewUser: false,
        providerId: "password"
    },
    credential: null,
    operationType: "signIn",
    user: {
        displayName: null,
        email: "coding-challenge@construyo.de",
        emailVerified: false,
        isAnonymous: false,
        uid: "5iEm1HvIxubLaiKO4yj0Npmvq0F2",
        refreshToken: "AG8BCneBmRgGgtDHryMrU2AKgjbw_KWZD7g_uoHHriP8bSmi19zdz3gYS_USkoGf-rGbwFPB-v0oF9X3wBPkBVPRoSv0G6lylLO1E9RUQoz-_Bzfq9fzSdQG9m-r0wzEraNrGHs5bcqD6bClmiqm71oCwxo1zbihfrsuQZPvYaymQ7aDAyy95d0_WpCwRJBCfURur8bUb-2ZbPmzAIL2M8H6_2douv9aRzB0z2o_GJq0ANdYv3eYjriY-fI4-gjo_5VGbkfVWOqp"
    }
};
const mockErrorData = {
    loginError: 'There is no user record corresponding to this identifier. The user may have been deleted.',
    genericErrorMessage: 'An error occurred'
};

describe('User Auth Actions', () => {
    afterEach(() => jest.clearAllMocks());

    describe('User Login Actions', () => {
        it('should call the userLogin function which should fire off the initiateLogin action and login success action to simulate a successful login.', async () => {
            const loginSuccessMock = jest.fn(async () => mockUserData);
            AuthService.loginUserWithCredentials.mockImplementationOnce(loginSuccessMock);

            const store = mockStore(initialState);
            await store.dispatch(
                userLogin({
                    email: userLoginData.username,
                    password: userLoginData.password
                })
            );

            const actualActions = store.getActions();
            expect(actualActions.length).toBe(2);
            expect(actualActions[0]).toMatchObject(expectedAuthActions.initiateUserLogin());
            expect(actualActions[1]).toMatchObject(expectedAuthActions.userLoginSuccessAction(mockUserData))
        });
        it('should call the userLogin function which should fire off the initiateLogin action and login error action for a failed login.', async () => {
            const loginErrorMock = jest.fn(() => Promise.reject(new Error(mockErrorData.loginError)));
            AuthService.loginUserWithCredentials.mockImplementationOnce(loginErrorMock);

            const store = mockStore(initialState);
            await store.dispatch(
                userLogin({
                    email: userLoginData.username,
                    password: userLoginData.password
                })
            );

            const actualActions = store.getActions();
            expect(actualActions.length).toBe(2);
            expect(actualActions[0]).toMatchObject(expectedAuthActions.initiateUserLogin());
            expect(actualActions[1]).toMatchObject(expectedAuthActions.userLoginErrorAction(mockErrorData.loginError))
        });
    });

    describe('User Logout Actions', () => {
        it('should call the userLogout function which should fire off the initiateUserLogout action and logout success action to simulate a successful logout.', async () => {
            const logoutSuccessMock = jest.fn(async () => null);
            AuthService.logoutUser.mockImplementationOnce(logoutSuccessMock);

            const store = mockStore(initialState);
            await store.dispatch(userLogout());

            const actualActions = store.getActions();
            expect(actualActions.length).toBe(2);
            expect(actualActions[0]).toMatchObject(expectedAuthActions.initiateUserLogout());
            expect(actualActions[1]).toMatchObject(expectedAuthActions.userLogoutSuccessAction(null))
        });
        it('should call the userLogin function which should fire off the initiateLogin action and login error action for a failed login.', async () => {
            const logoutSuccessMock = jest.fn(async () => Promise.reject(new Error(mockErrorData.genericErrorMessage)));
            AuthService.logoutUser.mockImplementationOnce(logoutSuccessMock);

            const store = mockStore(initialState);
            await store.dispatch(userLogout());

            const actualActions = store.getActions();
            expect(actualActions.length).toBe(2);
            expect(actualActions[0]).toMatchObject(expectedAuthActions.initiateUserLogout());
            expect(actualActions[1]).toMatchObject(expectedAuthActions.userLogoutErrorAction(mockErrorData.genericErrorMessage))
        });
    });
});
