import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { HashLink as Link } from 'react-router-hash-link';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import { getDayMonthTime, showMessage } from '../../common/Utils';
import AddToCartButton from '../purchase/AddToCartButton';
import ErrorPageContent from '../error/ErrorPageContent';

const EventDetailsContent = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const {isLoading, error, data, status, callFetch } = useFetch();

    const [event, setEvent] = useState<any>();

    useEffect(() => {
        if(data){
            setEvent(data)
        }
    }, [data]);

    useEffect(() => {
        if(error){
            showMessage(error.response?.data,'ERROR')
        }
    }, [error]);

    useEffect(() => {
        let id = searchParams.get('id');
        if(id) {
            callFetch(API.GET_EVENTS + "/" + id,
                'GET',
                null,
                null,
                null
            );
        }

    }, [searchParams]);



    return (
        <>
           { data ? 
            <section className="blog-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="media">
                                <div className="single-post">
                                    <h2 className="related-research-title">{event?.title}</h2>
                                    
                                    <div className="single-post-thumb">
                                        <img src="/img/research-details/rsd1.jpg" alt="researchDetails" />
                                    </div>
                                    <div className="single-post-text">
                                        <h2>{event?.description}
                                            <Typography marginTop={1} component="div">
                                                <span className="fa-solid fa-location-pin" style={{ color: "#f1c40f", marginRight:"6px"}}/>
                                                <span>{event?.location}</span>
                                                <span className="fa-regular fa-clock"  style={{ color: "#f1c40f", marginRight:"6px", marginLeft:"6px"}}/>
                                                <span>{getDayMonthTime(event?.startTime)} - {getDayMonthTime(event?.endTime)}</span>
                                            </Typography> 
                                            
                                        </h2>
                                        <p>Lorem ipsum dolor sit amet, ad vix diceret necessitatibus, tempor honestatis nam id. Ne propriae reformidans eum, libris tractatos vituperatoribus his ne. Dolor eruditi usu eu, labore diceret at qui, ei harum vidisse has. Dicant maluisset reprehendunt ad usu. Quo labitur convenire in, ex pri consul praesent abhorreant. Vel vidisse definitiones id, per aliquid maiorum democritum cu.Lorem ipsum dolor sit amet, ad vix diceret necessitatibus, tempor honestatis nam id. Ne propriae reformidans eum, libris tractatos vituperatoribus his ne. Dolor eruditi usu eu, labore diceret at qui, ei harum vidisse has. Dicant maluisset reprehendunt ad usu. Quo labitur convenire in, ex pri consul praesent abhorreant. Vel vidisse definitiones id, per aliquid maiorum democritum cu.</p>
                                        <p>Ne idque utamur sea, et mei dolor aperiri. Novum mucius duo ut, legere omittam an sea. Quo fugit petentium cu. Ut usu ornatus appareat lobortis, his cu ignota officiis. Ei ius wisi animal, saepe contentiones ad nec. Probo discere ne nam, ad his habeo numquam quaestio.Ne idque utamur sea, et mei dolor aperiri. Novum mucius duo ut, legere omittam an sea. Quo fugit petentium cu. Ut usu ornatus appareat lobortis, his cu ignota officiis. Ei ius wisi animal, saepe contentiones ad nec. Probo discere ne nam, ad his habeo numquam quaestio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            : <ErrorPageContent />
            }
        </>
    );
};

export default EventDetailsContent;