import React, { useEffect, useState } from 'react';
import CarouselSlider from './CarouselSlider';
import { showMessage } from '../common/Utils';
import { API } from '../common/Constants';
import useFetch from '../hook/useFetch';
import Spinner from './Spinner';
import PurchaseItemCard from './PurchaseItemCard';

const EventsSlider = () => {
    const [children, setChildren] = useState<React.JSX.Element[]>([]);

    const {isLoading, error, data, status, callFetch } = useFetch();
    const [events, setEvents] = useState<any>([]);

    useEffect(() => {

        if(events){
            let items :React.JSX.Element[] =[]
            events.map(event =>
                items.push(<PurchaseItemCard purchaseItem={event} showActionBar showAddToCart/>)
            )
            setChildren(items)
        }
        
    }, [events]);

    useEffect(() => {
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);

    useEffect(() => {
        callFetch(API.GET_EVENTS,
            'GET',
            null,
            {
                'endTime': 1726960302,
                'startTime':1693632594
            },
            null
        );
    }, []);

    useEffect(() => {
        if(data && status && status < 299){
            setEvents(data)
        }
    }, [data]);

    
    return (
        <>
            <Spinner show={isLoading} />
            { data?.length ? <CarouselSlider children={children} heading={"Checkout Our Other Events"}/> : <></> }
        </>
    );
};

export default EventsSlider;