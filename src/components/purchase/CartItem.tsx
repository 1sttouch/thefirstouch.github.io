import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { getDayMonthTime } from '../../common/Utils';

const CartItem = ({ item }) => {
    let { image, title, description, amount } = item

    return (
        <>
            <div className="course-inner" style={{display: "inline-block"}}>
                <div className="course-thumb">
                    <img src={`${image}`} alt="courseImage" />
                    <div className="read-more-button">
                        <Link to="/course#">Learn More</Link>
                    </div>
                </div>
                <div className="course-meta">
                    <span className="course-price">₹{amount}</span>
                </div>
                <div className="course-desc">
                    <h2><Link to="/course#">{title}</Link></h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default CartItem;