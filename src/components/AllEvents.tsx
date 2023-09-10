import React, { useEffect, useState } from 'react';
import EventData from '../jsonData/EventData.json'
import SingleEvent from './SingleEvent';
import Pagination from './Pagination';
import useFetch from '../hook/useFetch';
import { API } from '../common/Constants';
import { getAPIHeaders } from '../common/Utils'
import Spinner from './Spinner';

const AllEvents = () => {
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
            <Spinner show={isLoading} />
            <section className="event-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {events.map(event =>
                            <div className="col-xl-6 col-lg-12" key={event.id}>
                                <SingleEvent event={event} />
                            </div>
                        )}
                        {/* <Pagination /> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllEvents;