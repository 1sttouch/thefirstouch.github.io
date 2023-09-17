import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { durationInHoursMins, showMessage } from '../../common/Utils';
import AddToCartButton from '../purchase/AddToCartButton';

interface Props {
    course : any
}

const SingleCourse = ({ course }:Props) => {
    let { _id, type ,image, ratting, amount, title, description, duration } = course

    return (
        <>
            <div className="course-inner">
                <div className="course-thumb">
                    <img src={`${image}`} alt="courseImage" />
                    <div className="read-more-button">
                        <Link to="/course#">Learn More</Link>
                    </div>
                </div>
                <div className="course-meta">
                    <span className="course-price">₹{amount}</span>
                    <span className="course-rating">
                        { ratting > 0 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                        { ratting > 1 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                        { ratting > 2 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                        { ratting > 3 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                        { ratting > 4 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                    </span>
                </div>
                <div className="course-desc">
                    <h2><Link to="/course#">{title}</Link></h2>
                    <p>{description}</p>
                </div>
                <div className="course-info">
                    <ul>
                        <li><Link to="#"><i className="fa-regular fa-clock"></i>{durationInHoursMins(duration)}</Link></li>
                        {/* <li><Link onClick={handleSave}><i className="fa fa-heart"></i>{"save"}</Link></li> */}
                        {/* <li><Link onClick={undefined}><i className="fa fa-shopping-cart"></i>{"Add to Cart"}</Link></li> */}
                        <li><AddToCartButton itemId={_id} itemType={type}/></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SingleCourse;