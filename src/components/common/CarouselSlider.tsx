import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import NoData from './NoData';

interface Props {
    heading: string
    headingLink?: string
    children: React.JSX.Element[]
}

const CarouselSlider = ({heading, headingLink, children}: Props) => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    return (
        <>
            <section className={`home-v2 blog-sec pt-20 pb-70 flex-div-center`} >
                <div className="slider-box overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-title">
                                {
                                    headingLink ? <Link to={`${headingLink}`}><h1>{heading}<h6>view all</h6></h1></Link>
                                
                                    : <h1>{heading}</h1>
                                }
                                
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="all-latest-news">
                                    <div className="latest-blog-carousel-wrap">
                                    {children?.length ?  <Carousel
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
                                                    partialVisibilityGutter: 80
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

                                            {children}

                                        </Carousel>
                                        : <NoData/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarouselSlider;