import React, { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import Spinner from '../common/Spinner';
import PurchaseItemCard from '../PurchaseItemCard';
import { showMessage } from '../../common/Utils';

const AllEvents = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [events, setEvents] = useState<any>([]);

    useEffect(() => {
        if(error){
            showMessage(error.response.data,'ERROR')
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
                                {/* <SingleEvent event={event} /> */}
                                <PurchaseItemCard purchaseItem={event} showActionBar showAddToCart/>
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