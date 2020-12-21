import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersListView from "./OrderListView";
import {fetchOrders} from "./order-list-redux-slice";

const OrdersList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchOrders())
    }, [dispatch]);
    const {
        loading,
        hasErrors,
        responsePayload
    } = useSelector(state => state.orders);
    return <OrdersListView
        listOfOrders={responsePayload}
        loading={loading}
    />;
};

export default OrdersList
