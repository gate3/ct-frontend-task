import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import OrdersListView from "./OrderListView";
import {fetchOrders} from "./order-list-redux-slice";

const OrdersList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
      dispatch(fetchOrders())
    }, [dispatch]);
    const {
        loading,
        hasErrors,
        responsePayload
    } = useSelector(state => state.orders);

    const viewOrderFunc = (order) => {
        history.push(`/${order.uid}`, order)
    };
    return <OrdersListView
        listOfOrders={responsePayload}
        loading={loading}
        viewOrderFunc={viewOrderFunc}
    />;
};

export default OrdersList
