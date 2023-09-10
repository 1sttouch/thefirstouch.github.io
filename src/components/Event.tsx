import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import HomeEvent from './HomeEvent';

const Event = () => {

    return (
        <>
            <section className="event-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <Fade left>
                                <HomeEvent />
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="video-inner">
                                <img src={'/img/about/video_thumb.jpg'} alt="VideoThumb" />
                                <div className="video-overly">
                                    <div className="video-button">
                                        <a href="https://www.youtube.com/watch?v=YzDz8g1z83U" className="mfp-iframe video-play"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="about-desc">
                                <p>Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus dapibus, erat ullamcorper odio augue eleifend, consequat enim ullamcorper magnis </p>
                                <Link to="/about#" className="about-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Event;