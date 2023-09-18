import React, { useEffect, useState } from 'react';
import CourseData from '../../jsonData/CourseData.json'
import SingleCourse from './SingleCourse';
import useFetch from '../../hook/useFetch';
import { getAPIHeaders, showMessage } from '../../common/Utils';
import { API } from '../../common/Constants';
import Spinner from '../common/Spinner';
import CarouselSlider from '../common/CarouselSlider';
import PurchaseItemCard from '../PurchaseItemCard';
import { Fade } from 'react-reveal';

const LearningsSlider = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [courses, setCourses] = useState<any>([]);
    const [children, setChildren] = useState<React.JSX.Element[]>([]);

    useEffect(() => {

        if(courses){
            let items :React.JSX.Element[] =[]
            courses.map(course =>
                items.push(<PurchaseItemCard purchaseItem={course} showActionBar showAddToCart/>)
            )
            setChildren(items)
        }
        
    }, [courses]);

    useEffect(() => {
        callFetch(API.SEARCH_LEARNINGS,
            'GET',
            null,
            null,
            null
        );
    }, []);

    useEffect(() => {
        if(data){
            setCourses(data)
        }
    }, [data]);

    return (
        <>
            <Spinner show={isLoading} />
            { data?.length ? 
               <Fade right delay={100}> <CarouselSlider headingLink={"/course"} children={children} heading={"Checkout Our Other Learnings"}/></Fade>
            : <></> }
        </>
    );
};

export default LearningsSlider;