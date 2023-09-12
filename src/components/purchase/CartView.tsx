import React, { useEffect, useState } from 'react';
import EventData from '../../jsonData/EventData.json'
import SingleEvent from '../SingleEvent';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import { getAPIHeaders } from '../../common/Utils';
import CartItem from './CartItem';

const CartView = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [cartItems, setCartItems] = useState<any>([]);

    useEffect(() => {
            callFetch(API.CART,
            'GET',
            getAPIHeaders(),
            null,
            null
        );
    }, []);

    useEffect(() => {
        if(data){
            setCartItems(data?.items)
        }
    }, [data]);
    return (
        <>
            <h1 className="faq-style1-title">Your Purchase Selection</h1>
            {cartItems.map(item =>
                <CartItem item={item} key={item._id} />
            )}
        </>
    );
};

export default CartView;