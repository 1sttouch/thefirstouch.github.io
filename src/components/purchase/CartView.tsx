import React, { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import { getAPIHeaders } from '../../common/Utils';
import PurchaseItemCard from '../PurchaseItemCard';

const CartView = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [purcahseItems, setPurcahseItems] = useState<any>([]);

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
            setPurcahseItems(data?.items)
        }
    }, [data]);
    return (
        <>
            <h1 className="faq-style1-title">Your Purchase Selection</h1>
            {purcahseItems.map(item =>
                <PurchaseItemCard purchaseItem={item} key={item._id} />
            )}
        </>
    );
};

export default CartView;