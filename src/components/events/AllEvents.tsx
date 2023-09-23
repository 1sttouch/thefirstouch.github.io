import React, { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import Spinner from '../common/Spinner';
import PurchaseItemCard from '../PurchaseItemCard';
import { showMessage } from '../../common/Utils';
import { Fade } from 'react-reveal';
import NoData from '../common/NoData';

const AllEvents = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [events, setEvents] = useState<any>([]);

    useEffect(() => {
        if(error){
            showMessage(error.response?.data,'ERROR')
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
                        {
                        events?.length ? 
                            events.map(event =>
                                <div className="col-xl-4 col-lg-12" key={event._id}>
                                    <Fade right delay={100}>
                                        <PurchaseItemCard 
                                        itemLink={`/events/event-details?id=${event._id}`}
                                        maxWidth={400} purchaseItem={event} showActionBar showAddToCart/>
                                    </Fade>
                                </div>
                            )
                            : <NoData/>
                        }
                        {/* <Pagination /> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllEvents;