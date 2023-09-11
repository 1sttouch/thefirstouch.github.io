import React from 'react';
import ContactInfo from './ContactInfo';
import ChangePassword from './ChangePassword';
import RequestCallBack from './RequestCallBack';
import BreadCrumb from '../../BreadCrumb';


const UserProfileConsole = () => {
    return (
        <>
            <BreadCrumb pageTitle="Profile" />
            <section className="course-details-page pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="course-tab">
                                <ul className="service-tab nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role='presentation'>
                                        <button className="nav-link active" id="overview-tab" data-bs-target="#contact-info-tab-pane" data-bs-toggle="tab" type="button" role="tab" aria-controls="contact-info-tab-pane" aria-selected="true">Your Profile</button>
                                    </li>
                                    <li className="nav-item" role='presentation'>
                                        <button className="nav-link" id="curriculum-tab" data-bs-target="#change-pwd-tab-pane" data-bs-toggle="tab" type="button" role="tab" aria-controls="change-pwd-tab-pane" aria-selected="false">Change Password</button>
                                    </li>
                                    <li className="nav-item" role='presentation'>
                                        <button className="nav-link" id="req-call-bck-tab" data-bs-target="#req-call-bck-tab-pane" data-bs-toggle="tab" type="button" role="tab" aria-controls="instructor-tab-pane" aria-selected="false">Request CallBack</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="tab-content" id="myTabContent">

                                {/* --- Contact Info --- */}
                                <div id="contact-info-tab-pane" tabIndex={0} className="tab-pane fade show active" role="tabpanel" aria-labelledby="contact-info-tab">
                                <ContactInfo />
                                </div>

                                {/* --- Change Password --- */}
                                <div id="change-pwd-tab-pane" tabIndex={0} className="tab-pane fade" role="tabpanel" aria-labelledby="change-pwd-tab">
                                    <ChangePassword/>
                                </div>

                                {/* --- Request Callback --- */}
                                <div id="req-call-bck-tab-pane" tabIndex={0} className="tab-pane fade" role="tabpanel" aria-labelledby="req-call-bck-tab">
                                    <RequestCallBack />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserProfileConsole;