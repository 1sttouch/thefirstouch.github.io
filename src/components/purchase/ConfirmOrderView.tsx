import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ConfirmOrderView = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="course-instructor">
                       
                        <div className="instructor-img">
                            <img src="/img/client/client1.png" alt="client" />
                        </div>
                        <div className="details">
                            <h2><Link to="#">Your Order Is Confirmed</Link></h2>
                            <span>Happing Learning!</span>
                        </div>
                        <div className="rating">
                            <p>Your Order is confirmed . Please access your touch points to view purchased items.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmOrderView;