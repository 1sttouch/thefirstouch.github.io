import React, { useEffect, useState } from 'react';
import EventData from '../../jsonData/EventData.json'
import SingleEvent from '../SingleEvent';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import { getAPIHeaders } from '../../common/Utils';
import PurchaseItem from './PurchaseItem';

interface Props {
    order: any
}
const OrderView = ({order}:Props) => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [purcahseItems, setPurcahseItems] = useState<any>([]);

    useEffect(() => {
            callFetch(API.ORDER + "/" + order?._id,
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
            <h1 className="faq-style1-title">Your Order Items</h1>
            {purcahseItems.map(item =>
                <PurchaseItem item={item} key={item._id} />
            )}
        </>
    );
};

export default OrderView;