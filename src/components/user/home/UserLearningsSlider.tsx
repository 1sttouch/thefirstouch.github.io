import React, { useEffect, useState } from 'react';
import CarouselSlider from '../../common/CarouselSlider';
import { getAPIHeaders, showMessage } from '../../../common/Utils';
import { API } from '../../../common/Constants';
import useFetch from '../../../hook/useFetch';
import Spinner from '../../common/Spinner';
import PurchaseItemCard from '../../PurchaseItemCard';
import { Fade } from 'react-reveal';

const UserLearnings = () => {
    const [children, setChildren] = useState<React.JSX.Element[]>([]);

    const {isLoading, error, data, status, callFetch } = useFetch();
    const [learnings, setLearnings] = useState<any>([]);

    useEffect(() => {

        if(learnings){
            let items :React.JSX.Element[] =[]
            learnings.map(event =>
                items.push(<PurchaseItemCard purchaseItem={event} showRatting/>)
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
            <Spinner show={isLoading} />
            {data?.length ? 
                <Fade right delay={100}><CarouselSlider children={children} heading={"Your Learnings"}/> </Fade>
            : <></>}
        </>
    );
};

export default UserLearnings;