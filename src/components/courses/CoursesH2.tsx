import React, { useEffect, useState } from 'react';
import SingleCourse from './SingleCourse';
import Carousel from 'react-multi-carousel';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import { getAPIHeaders } from '../../common/Utils';

const CoursesH2 = (props) => {
    const { courseV2 } = props

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

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;
    };

    return (
        <>
            <section className={`${courseV2} course-sec overflow-hidden pt-100 pb-100`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h1>Our Feature Course</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="course-list-sec">
                            <div className="all-course">
                                <div className="course-carousel-wrap-v2">
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
                                                partialVisibilityGutter: 40
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

                                        {courses.map(course =>
                                            <SingleCourse key={course._id} course={course} />
                                        )}

                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursesH2;