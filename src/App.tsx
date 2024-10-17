// Css 
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

// BootStrap JS Bundle
import 'bootstrap/dist/js/bootstrap.bundle';

// Components 
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import React from 'react';
import PreLoader from './components/PreLoader';
import ScrollUpBtn from './components/ScrollUpBtn';
import About from './pages/About';
import AboutFull from './pages/AboutFull';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Error404 from './pages/Error404';
import Events from './pages/Events';
import Faq from './pages/Faq';
import Home2 from './pages/Home2';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserHome from './components/user/home/UserHome';
import UserProfile from './components/user/profile/UserProfile';
import UserTouchPoints from './pages/UserTouchPoints';
import OrderConsole from './components/purchase/OrderConsole';
import { AuthProvider } from './hook/authContext';
import EventDetails from './components/events/EventDetails';
import CourseDetails from './components/courses/CourseDetails';

// Components 

function App() {
  //  Preloader 
  let [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
     <AuthProvider>
      {isLoading ? <PreLoader /> :
        <div>
          <Helmet>
            <title>1st touch</title>
            <link rel="shortcut icon" href="favicon.ico"></link>
          </Helmet>

          <Routes>
            <Route path='*' element={<Error404 />}> </Route>

            <Route path='/' element={<Home2 />}> </Route>
            <Route path='/home' element={<Home2 />}> </Route>

            <Route path='/learnings' element={<Course />}> </Route>
            <Route path='/learnings/learning' element={<CourseDetails />}> </Route>

            <Route path='/events' element={<Events />}> </Route>
            <Route path='/events/event-details' element={<EventDetails />}> </Route>

            {/* <Route path='/about' element={<About />}> </Route> */}
            <Route path='/about' element={<AboutFull />}> </Route>

            <Route path='/faq' element={<Faq />}> </Route>
            <Route path='/error' element={<Error404 />}> </Route>

            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='/signup' element={<SignUp />}> </Route>
            <Route path='/signin' element={<SignIn />}> </Route>

            <Route path='/purchase' element={<OrderConsole />}> </Route>


            <Route path='/user-home' element={<UserHome />}> </Route>
            <Route path='/user-profile' element={<UserProfile />}> </Route>
            <Route path='/user-touchpoints' element={<UserTouchPoints />}> </Route>
            <Route path='/user-touchpoints/touchpoint' element={<CourseDetails />}> </Route>
          </Routes>
          <ScrollUpBtn />
          <ToastContainer />
        </div>
      }
      </AuthProvider>
    </>
  )
}

export default App
