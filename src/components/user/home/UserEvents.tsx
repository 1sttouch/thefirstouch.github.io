import React, { useEffect, useState } from 'react';
import CarouselSlider from '../../../components/CarouselSlider';
import EventData from '../../../jsonData/EventData.json';
import SingleEvent from '../../SingleEvent';
import { getAPIHeaders, showMessage } from '../../../common/Utils';
import { API } from '../../../common/Constants';
import useFetch from '../../../hook/useFetch';
import Spinner from '../../Spinner';

const UserEvents = () => {
    const [children, setChildren] = useState<React.JSX.Element[]>([]);

    const {isLoading, error, data, status, callFetch } = useFetch();
    const [events, setEvents] = useState<any>([]);

    useEffect(() => {

        if(events){
            let items :React.JSX.Element[] =[]
            events.map(event =>
                items.push(<SingleEvent event={event} />)
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
            getAPIHeaders(),
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
            <CarouselSlider children={children} heading={"Your Events"}/>
        </>
    );
};

export default UserEvents;