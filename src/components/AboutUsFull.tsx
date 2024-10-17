import React from 'react';
import { Fade } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import { HashLink as Link } from 'react-router-hash-link';
import videoThumb from '/img/about/video_thumb.jpg'

const AboutUsFull = (props) => {
    const { bgGray } = props;

    return (
        <>
            <section className={`${bgGray} about-us-sec pt-100 pb-70`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="about-desc">
                                <Fade left delay={200}>
                                    <h1>FEEL The First Touch</h1>
                                </Fade>
                                <Fade left delay={400}>
                                    <p>At The First Touch, our guiding philosophy centres around empowering individuals to achieve their highest potential and excel in all aspects of life. We are committed to fostering a nurturing, inclusive environment where learners from diverse backgrounds can flourish and reach new heights.</p>
                                    <p>Our programs are meticulously designed to promote lifelong learning, equipping participants not just with knowledge, but also with the practical skills and confidence required to thrive in today’s dynamic world. We prioritise transformative growth through mindset evolution, interpersonal prowess, and impactful communication—key elements that drive both personal and professional excellence.</p>
                                    <p>Understanding that each individual’s journey is unique, we specialise in offering bespoke courses crafted to address your distinct needs. Our approach begins by partnering with you to identify your specific challenges. From there, we co-create a tailored solution with a clear, actionable objective. This collaboration lays the foundation for a transformative journey, ensuring every step aligns seamlessly with your aspirations and success.</p>
                                    <p>This philosophy forms the cornerstone of every training program we offer at The First Touch. Our mission is to help you navigate your journey, unlock new possibilities, and ultimately achieve the success you deserve.</p>
                                    <p>Our unique offerings are dedicated to guiding young kids, working professionals, college students, fresh graduates seeking employment, skilled professionals without a degree and pretty much everyone else in their pursuit of excellence through English language training and Football, through behavioural courses centred on improvement and achievement of specific individual targets.</p>
                                    <p>We understand the significance of that initial connection – the first touch – that sets the foundation for everything.</p>
                                    <p>We join the industry with a decade long journey of excelling in teaching across universities and colleges and consulting in the learning and development domain. It helped us work on  both sides, helping students develop these skills through the prescribed syllabi of the colleges/universities that we were working with during this time as well as what the organisations really need in their workforce in the age of AI.</p>
                                    <p>We understood the job seeker as well as the job poster challenges and decided to bridge this gap. All this while, of course, the focus always remains on the core value of helping people achieve their best selves and keep themselves there to excel in the modern world, at the workplace, as well as out of it.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>

                    <div id="ideology" className="row">
                        <div className="col-lg-12 col-12">
                            <div className="about-desc">
                                <Fade right delay={200}>
                                    <h1>Our Ideology</h1>
                                </Fade>
                                <Fade right delay={400}>
                                    <p>At The First Touch, our core ideology revolves around empowering individuals to achieve their full potential and excel in their personal and professional lives. We believe in providing a supportive and inclusive learning environment where individuals from diverse backgrounds can grow and thrive.</p>
                                    <p>Our programs are designed with a focus on lifelong learning, helping participants acquire not just knowledge, but also the practical skills and confidence they need to succeed in today's rapidly changing world. We emphasise the importance of mindset shift, interpersonal skills, and effective communication as key drivers of personal and professional success.</p>
                                    <p>Recognizing the unique needs of each individual, we offer tailor-made courses customised just for you. We believe that every individual faces unique challenges, and our goal is to help you find tailored solutions. Our process begins by working with you to identify the specific problem. Once we have a clear understanding, we collaborate to design a solution that sets a well-defined objective. From there, we embark on a transformative journey together, ensuring every step is aligned with achieving your desired outcomes. This methodology is at the heart of all the training programs we offer.</p>
                                    <p>With our individualised courses, you get the full attention of your teacher, who can adapt lessons to your learning style and pace. Whether you need to improve your academic writing, professional communication skills, or conversational fluency, we are here to support you every step of the way.</p>
                                    <p>Our commitment to excellence and adaptability ensures that our courses are constantly updated with the latest research and best practices in learning and development. By prioritising engagement and active participation, we create immersive experiences that allow individuals to immediately apply what they've learned in real-world scenarios.</p>
                                    <p>Our goal is to bridge the gap between academic learning and workplace demands, empowering individuals to navigate the complexities of the modern world with confidence and resilience. Through personalised training programs and ongoing support, we strive to make a meaningful impact on the lives of those we work with.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>

                    <div id="why-us" className="row">
                        <div className="col-lg-12 col-12">
                            <div className="about-desc">
                                <Fade left delay={200}>
                                    <h1>Why Work with Us?</h1>
                                </Fade>
                                <Fade left delay={400}>
                                    <p>At The First Touch, we take pride in offering a comprehensive, personalised approach to learning and development. Here are just a few reasons why you should choose us for your English language proficiency courses and training programs:</p>
                                </Fade>
                                <div style={{ padding:"20px" }}>
                                    <Fade left delay={200}>
                                        <h2>Customised Training</h2>
                                    </Fade>
                                    <Fade left delay={400}>
                                        <p>We understand that each individual and group has unique needs and goals. That's why we tailor our courses to meet the specific requirements of each participant, ensuring personalised attention and a tailored learning experience.</p>
                                    </Fade>

                                    <Fade left delay={200}>
                                        <h2>Experienced Instructors</h2>
                                    </Fade>
                                    <Fade left delay={400}>
                                        <p>Our team consists of seasoned professionals with extensive backgrounds in teaching, consulting, and learning and development. Their passion for helping others succeed, combined with their expertise, ensures you receive high-quality instruction and guidance throughout your training.</p>
                                    </Fade>

                                    <Fade left delay={200}>
                                        <h2>Engaging and Interactive Learning</h2>
                                    </Fade>
                                    <Fade left delay={400}>
                                        <p>We emphasise active participation and experiential learning to keep you engaged and motivated. Through real-world scenarios, role-playing exercises, and collaborative activities, you'll be able to apply new knowledge and skills immediately.</p>
                                    </Fade>

                                    <Fade left delay={200}>
                                        <h2>Comprehensive Assessment</h2>
                                    </Fade>
                                    <Fade left delay={400}>
                                        <p>We use pre-course and post-course assessments to measure your progress and track your development. These evaluations allow us to set our course for the learning journey ahead, adjust our approach as needed, ensuring we achieve our learning objectives.</p>
                                    </Fade>

                                    <Fade left delay={200}>
                                        <h2>Ongoing Support</h2>
                                    </Fade>
                                    <Fade left delay={400}>
                                        <p>Our relationship with you doesn't end when the course does. We offer ongoing support and follow-up to help you apply what you've learned in your personal and professional life. We're here to answer any questions and provide guidance even after your training is complete. Let’s think of it as a lifetime relationship.</p>
                                    </Fade>

                                    <Fade left delay={200}>
                                        <h2>Focus on Employability</h2>
                                    </Fade>
                                    <Fade left delay={400}>
                                        <p>We prioritise practical skills and real-world applications to help you excel in the modern workplace. Our programs include guidance on job hunting, interview preparation, and workplace readiness, empowering you to thrive in your career.</p>
                                    </Fade>
                                
                                    <Fade left delay={200}>
                                        <h2>Flexible Learning Options</h2>
                                    </Fade>
                                    <Fade left delay={400}>
                                        <p>We offer both online and offline courses, making it easy for you to fit learning into your schedule. Whether you prefer in-person sessions or virtual learning, we have options to suit your preferences. The calendar for the program is also created taking the learner’s preferences and availability into account. </p>
                                    </Fade>

                                    <Fade left delay={200}>
                                        <h2>Holistic Approach</h2>
                                    </Fade>
                                    <Fade left delay={400}>
                                        <p>We consider all aspects of your development, including your mindset, skills, and confidence. Our holistic approach ensures you grow not only in your professional abilities but also in your personal well-being.</p>
                                    </Fade>
                                </div>
                                <Fade left delay={400}>
                                    <p>By choosing us you're investing in a transformative learning experience that goes beyond traditional education. We are dedicated to helping you reach your full potential and achieve lasting success in your personal and professional life. Let us navigate this journey together.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>

                    <div id="methodology" className="row">
                        <div className="col-lg-12 col-12">
                            <div className="about-desc">
                                <Fade right delay={200}>
                                    <h1>Research Models</h1>
                                </Fade>
                                <Fade right delay={400}>
                                    <p>At The First Touch we employ evidence-based approaches to design and deliver our courses, ensuring that our training is both effective and impactful for our participants. We leverage research models and methodologies from the fields of education, learning, and professional development to create engaging, hands-on learning experiences. One of the primary models we use is the Harvard Business Review's 70-20-10 model, which emphasises a balanced approach to learning and development:</p>
                                    <p>70% Experiential Learning: The majority of our training focuses on learning through real-world experiences and hands-on application. This includes case studies, role-playing scenarios, and practical exercises that allow participants to immediately put theoretical concepts into practice.</p>
                                    <p>20% Social Learning: We encourage collaboration and peer-to-peer interaction to facilitate learning through observation, discussion, and shared experiences. This social aspect helps participants gain new perspectives and insights, fostering a deeper understanding of the material.</p>
                                    <p>10% Formal Training: We provide structured, instructor-led sessions that deliver foundational knowledge and guidance. This includes lectures, presentations, and other formal teaching methods (Online and Offline) that establish a strong base for further learning and application.</p>
                                    <p>We also integrate the latest research and insights from reputable sources. This allows us to stay updated with emerging trends and tailor our training programs to address the specific needs and challenges faced by our participants.</p>
                                    <p>By combining these research models with our expertise and industry experience, we create courses that are relevant, engaging, and tailored to the unique needs of each individual or group. This approach ensures that our participants not only acquire new knowledge and skills but also develop the confidence and adaptability needed to excel in their personal and professional lives.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsFull;