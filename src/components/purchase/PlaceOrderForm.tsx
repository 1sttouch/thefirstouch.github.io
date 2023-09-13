import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useFetch from '../../hook/useFetch';
import { getAPIHeaders, showMessage } from '../../common/Utils';
import { API } from '../../common/Constants';

interface Props {
    order: any
    setProgress: (inProgress:boolean) =>void
    onSuccess: () => void
}


const PlaceOrderForm = ({order, setProgress, onSuccess}) => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    
    useEffect(() => {
        setProgress(isLoading)
    }, [isLoading]);
    
    useEffect(() => {
        if(status && status < 299){
            onSuccess();
        }
    }, [status]);

    useEffect(() => {
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);


    const handleSubmit = () => {
       
            callFetch(API.CONFIRM_ORDER + "/" + order?._id,
                'POST',
                getAPIHeaders(),
                null,
                null
            );
    }

    return (
        <>
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Order Details</h1>
                <div className="event-details-info">
                    <h2> Billing Address </h2>
                    <ul>
                        <li>Address :
                            <span>
                                {order?.billingAddress?.addressLine1 + (order?.billingAddress?.addressLine2 ? ", "+ order?.billingAddress?.addressLine2 : "")} <br/>
                                {order?.billingAddress?.city  + ", "
                                + order?.billingAddress?.state + ", "
                                + order?.billingAddress?.country + ", "
                                + order?.billingAddress?.pin
                                }
                            </span>
                        </li>
                    </ul>
                    <h2> Billing </h2>
                    <ul>
                        <li>Amount :<span>₹ {order?.amount}</span></li>
                    </ul>
                    <div className="get-course-btn">
                        <Link onClick={handleSubmit} >Confirm Your Order</Link>
                    </div>
                </div>       
           </div>
        </>
    );
};

export default PlaceOrderForm;