import React from 'react';
import Banner from '../components/Banner';
import CoursesH2 from '../components/courses/CoursesH2';
import Event from '../components/events/Event';
import Footer from '../components/common/Footer';
import Header5 from '../components/common/Header5';
import LatestBlogPost from '../components/LatestBlogPost';
import WhyChooseH2 from '../components/WhyChooseH2';

const Home2 = () => {
    return (
        <>
            <Header5 />
            <Banner />
            <WhyChooseH2 />
            <CoursesH2/>
            <Event />
            <LatestBlogPost/>
            <Footer />
        </>
    );
};

export default Home2;