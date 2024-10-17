import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import HomeEvent from './HomeEvent';
import Carousel from 'react-multi-carousel';
import SingleEvent from './SingleEvent';
import { showMessage } from '../../common/Utils';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import NoData from '../common/NoData';
import EventsSlider from './EventsSlider';
import PurchaseItemCard from '../PurchaseItemCard';
import EventsData from '../../assets/contents/events.json'

const Event = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [events, setEvents] = useState<any>(EventsData);
    const [children, setChildren] = useState<React.JSX.Element[]>([]);

    useEffect(() => {

        if(events){
            let items :React.JSX.Element[] =[]
            events.map(event =>
                items.push(<PurchaseItemCard
                    itemLink={`/events/event-details?id=${event.id}`}
                    purchaseItem={event} showActionBar showAddToCart/>)
            )
            setChildren(items)
        }
        
    }, [events]);
    
    useEffect(() => {
        if(error){
            showMessage(error.response?.data,'ERROR')
        }
    }, [error]);

    
    // useEffect(() => {
    //     callFetch(API.GET_EVENTS,
    //         'GET',
    //         null,
    //         {
    //             'endTime': 1726960302,
    //             'startTime':1693632594
    //         },
    //         null
    //     );
    // }, []);

    // useEffect(() => {
    //     if(data){
    //         setEvents(data)
    //     }
    // }, [data]);

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    return (
        // <EventsSlider/>
        <>
            <section className="event-sec pt-100 pb-70">
                <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-title">
                                    <h1>join our events</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="all-latest-news">
                                    <div className="latest-blog-carousel-wrap">
                                        {children?.length ? 
                                            <Carousel
                                                infinite={true}
                                                draggable={true}
                                                arrows={true}
                                                pauseOnHover={true}
                                                slidesToSlide={1}
                                                showDots={false}
                                                swipeable={true}
                                                autoPlay={false}
                                                autoPlaySpeed={3000}
                                                customRightArrow={<CustomRightArrow onClick={undefined} />}
                                                customLeftArrow={<CustomLeftArrow onClick={undefined} />}
                                                responsive={{
                                                    laptop: {
                                                        breakpoint: {
                                                            max: 3000,
                                                            min: 992
                                                        },
                                                        items: 3,
                                                        partialVisibilityGutter: 80
                                                    },
                                                    tablet: {
                                                        breakpoint: {
                                                            max: 991,
                                                            min: 768
                                                        },
                                                        items: 2,
                                                        partialVisibilityGutter: 40
                                                    },
                                                    mobile: {
                                                        breakpoint: {
                                                            max: 767,
                                                            min: 1
                                                        },
                                                        items: 1,
                                                        partialVisibilityGutter: 40
                                                    }
                                                }}>

                                                {children}

                                            </Carousel>
                                            :
                                            <NoData/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </section>
        </>
    );
};

export default Event;