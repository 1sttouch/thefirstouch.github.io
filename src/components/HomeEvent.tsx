import React, { useEffect, useState } from 'react';
import EventData from '../jsonData/EventData.json'
import SingleEvent from './SingleEvent';
import useFetch from '../hook/useFetch';
import { API } from '../common/Constants';
import { getAPIHeaders } from '../common/Utils';

const HomeEvent = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [events, setEvents] = useState<any>([]);

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
        if(data){
            setEvents(data)
        }
    }, [data]);
    return (
        <>
            <h1 className="faq-style1-title">Join Our Event</h1>
            {events.slice(0, 3).map(event =>
                <SingleEvent event={event} key={event._id} />
            )}
        </>
    );
};

export default HomeEvent;