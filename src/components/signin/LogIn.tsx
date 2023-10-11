import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import InstructorData from "../../jsonData/InstructorData.json"
import LoginForm from './LoginForm';
import SingleAddedStudent from '../SingleAddedStudent';
import Carousel from 'react-multi-carousel';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import Spinner from '../common/Spinner';
import { setAuthToken } from '../../common/Utils';
import { useSearchParams } from 'react-router-dom'
import LoginWithOTP from './LoginWithOTP';

const LogIn = () => {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(true);
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams()
    
    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    const onForgetPassword = () => {
        setShowLogin(false);
    };

    const onBackToLogin = () => {
        setShowLogin(true);
    };

    const onSuccess = (data) => {
        setAuthToken(data?.token)
        let path = searchParams.get('path')
      
        if(path){
            navigate(path)
        } else {
            navigate('/user-home');
        }     
    };

    return (
        <>
            <Spinner show={inProgress} />
            <div className="join-us-sec">
                <div className="join-us-sec-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <Fade left>
                                <div className="join-us-desc">
                                    <h1>Login now & <span>Unlock our amazing courses</span> and start your journey</h1>
                                    <p>Join us for our online platform and get 150+ free course. Short Time This offer Limited. So You can as soon as possible register now. Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut.</p>

                                    {
                                        showLogin ? 
                                            <h2><a onClick={onForgetPassword} >Click here to <span>login with OTP</span></a></h2>
                                            :
                                            <h2><a onClick={onBackToLogin}> Click here to <span>login with password</span></a></h2>
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="register-recently-added">
                                            <h2>Recently Added Student</h2>
                                            <div className="all-recently-added">
                                                <div className="register-carousel-wrap">
                                                    <Carousel
                                                        infinite={true}
                                                        draggable={true}
                                                        arrows={true}
                                                        pauseOnHover={true}
                                                        slidesToSlide={1}
                                                        showDots={false}
                                                        swipeable={true}
                                                        autoPlay={false}
                                                        customRightArrow={<CustomRightArrow onClick={undefined} />}
                                                        customLeftArrow={<CustomLeftArrow onClick={undefined} />}
                                                        autoPlaySpeed={3000}
                                                        responsive={{
                                                            desktop: {
                                                                breakpoint: {
                                                                    max: 3000,
                                                                    min: 1200
                                                                },
                                                                items: 4,
                                                                partialVisibilityGutter: 40
                                                            },
                                                            laptop: {
                                                                breakpoint: {
                                                                    max: 1199,
                                                                    min: 500
                                                                },
                                                                items: 3,
                                                                partialVisibilityGutter: 40
                                                            },
                                                            tablet: {
                                                                breakpoint: {
                                                                    max: 499,
                                                                    min: 351
                                                                },
                                                                items: 2,
                                                                partialVisibilityGutter: 40
                                                            },
                                                            mobile: {
                                                                breakpoint: {
                                                                    max: 350,
                                                                    min: 1
                                                                },
                                                                items: 1,
                                                                partialVisibilityGutter: 40
                                                            }
                                                        }}>

                                                        {InstructorData.map(instructor =>
                                                            <SingleAddedStudent instructor={instructor} key={instructor.id} />
                                                        )}

                                                    </Carousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-lg-5 col-12">
                            {
                                showLogin ?
                                <Fade right>
                                    <LoginForm setProgress={setProgress} onSuccess={onSuccess}/>
                                </Fade>
                                :
                                <Fade right>
                                    <LoginWithOTP setProgress={setProgress}/>
                                </Fade>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;