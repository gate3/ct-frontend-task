import { createSlice } from '@reduxjs/toolkit'
import OrdersApi from '../../services/orders';

export const initialState = {
    loading: false,
    hasErrors: false,
    responsePayload: null,
};

const ordersListSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        initiateFetchOrders: state => {
            state.loading = true;
        },
        fetchOrdersSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = false;
            state.responsePayload = payload;
        },
        fetchOrdersError: (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.responsePayload = payload;
        },
    }
});

export default ordersListSlice.reducer;

export const {
    initiateFetchOrders, fetchOrdersSuccess, fetchOrdersError,
} = ordersListSlice.actions;

export function fetchOrders () {
    const limit = 50;
    return dispatch => {
        dispatch(initiateFetchOrders());
        try{
            const ordersCallback = function (snapshot) {
                const orders = [];
                snapshot.forEach( order => {
                    const orderItem = order.data();
                    const orderId = orderItem.uid == null ? order.id : orderItem.uid;
                    if (orderId!= null && orderItem.customer != null) orders.push(orderItem);
                });
                dispatch(fetchOrdersSuccess(orders))
            };
            OrdersApi.getOrders(ordersCallback, limit);
        }catch (e) {
            dispatch(fetchOrdersError(e.message))
        }
    }
}
