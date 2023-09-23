import React, { useEffect, useState } from 'react';
import EventData from '../../../jsonData/EventData.json'
import Pagination from '../../common/Pagination';
import JourneySummary from './JourneySummary'
import useFetch from '../../../hook/useFetch';
import PurchaseItemCard from '../../PurchaseItemCard';
import { getAPIHeaders, showMessage } from '../../../common/Utils';
import { API } from '../../../common/Constants';

const Journies = () => {
    const [children, setChildren] = useState<React.JSX.Element[]>([]);
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [learnings, setLearnings] = useState<any>([]);

    useEffect(() => {

        if(learnings){
            let items :React.JSX.Element[] =[]
            learnings.map(learning =>
                items.push(<PurchaseItemCard 
                    maxWidth={400} 
                    purchaseItem={learning} 
                    itemLink={`/user-touchpoints/touchpoint?id=${learning._id}`}
                    showRatting/>)
            )
            setChildren(items)
        }
        
    }, [learnings]);

    useEffect(() => {
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);

    useEffect(() => {
        callFetch(API.PURCHASE,
            'GET',
            getAPIHeaders(),
            {
                'type': 'LEARNING'
            },
            null
        );
    }, []);

    useEffect(() => {
        if(data && status && status < 299){
            setLearnings(data)
        }
    }, [data]);



    return (
        <>
            <section className="event-v2-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {/* {EventData.map(event =>
                                    <div className="col-lg-4 col-md-6 col-12" key={event.id}>
                                        <JourneySummary event={event} />
                                    </div>
                                )} */}
                                {/* <Pagination /> */}

                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Journies;
