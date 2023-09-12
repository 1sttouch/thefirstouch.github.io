import React from 'react';
import CarouselSlider from '../../../components/CarouselSlider';
import SingleBlogPost from '../../SingleBlogPost';
import BlogPostData from '../../../jsonData/BlogPostData.json';
import CourseData from '../../../jsonData/CourseData.json';

const UserLearnings = () => {
    let children : React.JSX.Element[] = []

    BlogPostData.map(blog =>
        children.push(<SingleBlogPost blog={blog} key={blog.id} blogStyle={"home-v2"} />)
    )
    return (
        <>
          
            <CarouselSlider children={children} heading={"Your learnings"}/>
        </>
    );
};

export default UserLearnings;