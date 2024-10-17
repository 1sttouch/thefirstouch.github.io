import React from 'react';
import OverViewImg from '/img/banner/slide1.jpg'
import { HashLink as Link } from 'react-router-hash-link';

interface Props {
    course? : any
}
const CourseOverView = ({course}) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="course-details">
                        <img src={OverViewImg} alt="OverViewImg" />
                        <h2><Link to="#">{course?.title}</Link></h2>
                        <p>{course?.details}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseOverView;