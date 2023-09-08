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
import JourneyView from './components/user/journey/JourneyView';
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Error404 from './pages/Error404';
import Events from './pages/Events';
import Faq from './pages/Faq';
import Home2 from './pages/Home2';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserHome from './pages/UserHome';
import UserProfile from './pages/UserProfile';
import UserTouchPoints from './pages/UserTouchPoints';

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
      {isLoading ? <PreLoader /> :
        <div>
          <Helmet>
            <title>LearaPress - Education & Courses React Template</title>
            <link rel="shortcut icon" href="favicon.ico"></link>
          </Helmet>

          <Routes>
            <Route path='*' element={<Error404 />}> </Route>

            <Route path='/' element={<Home2 />}> </Route>
            <Route path='/home' element={<Home2 />}> </Route>

            <Route path='/course' element={<Course />}> </Route>

            <Route path='/events' element={<Events />}> </Route>

            <Route path='/about' element={<About />}> </Route>

            <Route path='/faq' element={<Faq />}> </Route>
            <Route path='/error' element={<Error404 />}> </Route>

            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='/signup' element={<SignUp />}> </Route>
            <Route path='/signin' element={<SignIn />}> </Route>


            <Route path='/user-home' element={<UserHome />}> </Route>
            <Route path='/user-profile' element={<UserProfile />}> </Route>
            <Route path='/user-touchpoints' element={<UserTouchPoints />}> </Route>
            <Route path='/user-touchpoints/touchpoint' element={<JourneyView />}> </Route>
          </Routes>
          <ScrollUpBtn />
          <ToastContainer />
        </div>
      }
    </>
  )
}

export default App
