import React, { useEffect, useState } from 'react';
import CourseData from '../jsonData/CourseData.json'
import SingleCourse from './SingleCourse';
import useFetch from '../hook/useFetch';
import { getAPIHeaders } from '../common/Utils';
import { API } from '../common/Constants';
import Spinner from './Spinner';

const AllCourses = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [courses, setCourses] = useState<any>([]);

    useEffect(() => {
        callFetch(API.SEARCH_LEARNINGS,
            'GET',
            getAPIHeaders(),
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
            <section className="course-page-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {courses.map(course =>
                            <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                                <SingleCourse course={course} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllCourses;