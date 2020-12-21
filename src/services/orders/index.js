import firebaseConnection from '../database/firebase-connection';
const {database} = firebaseConnection();

const getOrders = (callback, limit = 50, orderByField = 'bookingDate') => {
    const ordersRef = database.collection('orders');
    return ordersRef.limit(limit).orderBy(orderByField).onSnapshot(callback);
};

const OrdersApi = {
    getOrders
};

export default OrdersApi
