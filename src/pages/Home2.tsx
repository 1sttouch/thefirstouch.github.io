import React from 'react';
import Banner from '../components/Banner';
import CoursesH2 from '../components/CoursesH2';
import Event from '../components/Event';
import Footer from '../components/Footer';
import Header5 from '../components/Header5';
import LatestBlogPost from '../components/LatestBlogPost';
import WhyChooseH2 from '../components/WhyChooseH2';

const Home2 = () => {
    return (
        <>
            <Header5 />
            <Banner />
            <WhyChooseH2 />
            <CoursesH2 courseV2="home-v2" />
            <Event />
            <LatestBlogPost blogStyle="home-v2" />
            <Footer />
        </>
    );
};

export default Home2;