import React, { useEffect, useState } from 'react';
import CourseData from '../../jsonData/CourseData.json'
import SingleCourse from './SingleCourse';
import useFetch from '../../hook/useFetch';
import { getAPIHeaders, showMessage } from '../../common/Utils';
import { API } from '../../common/Constants';
import Spinner from '../common/Spinner';
import NoData from '../common/NoData';

const AllCourses = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [courses, setCourses] = useState<any>([]);

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

    useEffect(() => {
        if(error){
            showMessage(error.response?.data,'ERROR')
        }
    }, [error]);

    return (
        <>
            <Spinner show={isLoading} />
            <section className="course-page-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {courses?.length ? courses.map(course =>
                            <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                                <SingleCourse course={course}/>
                            </div>
                        ) : <NoData/>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllCourses;