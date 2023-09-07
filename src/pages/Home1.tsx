import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Courses from '../components/Courses';
import AnotherCourse from '../components/AnotherCourse';
import CountUp from '../components/CountUp';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Instructor from '../components/Instructor';
import Testimonial from '../components/Testimonial';
import OverView from '../components/OverView';
import CallToAction from '../components/CallToAction';
import LatestBlogPost from '../components/LatestBlogPost';
import Footer from '../components/Footer';


const Home1 = () => {
    return (
        <>
            <Header />
            <Banner />
            <AboutUs />
            <Courses />
            <AnotherCourse />
            <CountUp />
            <Gallery />
            <WhyChooseUs />
            <Instructor />
            <Testimonial />
            <OverView />
            <CallToAction />
            <LatestBlogPost />
            <Footer />
        </>
    );
};

export default Home1;