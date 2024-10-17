import React, { useEffect, useState } from 'react';
import CourseData from '../../assets/contents/CoursesData.json'
import SingleCourse from './SingleCourse';
import useFetch from '../../hook/useFetch';
import { getAPIHeaders, showMessage } from '../../common/Utils';
import { API } from '../../common/Constants';
import Spinner from '../common/Spinner';
import NoData from '../common/NoData';
import { Fade } from 'react-reveal';

const AllCourses = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const [courses, setCourses] = useState<any>(CourseData);

    // useEffect(() => {
    //     callFetch(API.SEARCH_LEARNINGS,
    //         'GET',
    //         null,
    //         null,
    //         null
    //     );
    // }, []);

    // useEffect(() => {
    //     if(data){
    //         setCourses(data)
    //     }
    // }, [data]);

    // useEffect(() => {
    //     if(error){
    //         showMessage(error.response?.data,'ERROR')
    //     }
    // }, [error]);

    return (
        <>
            <Spinner show={isLoading} />
            <section className="course-page-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="course-page-heading">
                                <Fade left delay={200}>
                                    <h1>Our Courses</h1>
                                </Fade>
                        </div>
                        <Fade left delay={400}>
                            <div className="course-intro">
                                <p>
                                We believe that every individual faces unique challenges, and our goal is to help you find tailored solutions. Our process begins by working with you to identify the specific problem. Once we have a clear understanding, we collaborate to design a solution that sets a well-defined objective. From there, we embark on a transformative journey together, ensuring every step is aligned with achieving your desired outcomes. This methodology is at the heart of all the programs we offer at The First Touch. We offer these programs with the brand name <span>The English Teacher </span>.
                                </p>
                            </div>
                        </Fade>
                    </div>
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