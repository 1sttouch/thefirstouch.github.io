import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const RequestCallBack = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="course-instructor">
                        <div className="instructor-img">
                            <img src="/img/client/client1.png" alt="client" />
                        </div>
                        <div className="details">
                            <h2><Link to="#">Request callback</Link></h2>
                            <span>let us reach you</span>
                        </div>
                        <div className="rating">
                            <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                        </div>
                        <div className="get-course-btn">
                            <Link to="#">Submit Request</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestCallBack;