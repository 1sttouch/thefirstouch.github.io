import React, { useState } from 'react';
import Footer from '../common/Footer';
import Cart from './Cart';
import Spinner from '../common/Spinner';
import PlaceOrder from './PlaceOrder';
import ConfirmOrder from './ConfirmOrder';
import Header5 from '../common/Header5';


const Purchase = () => {

    const [order, setOrder] = useState<any | null>(null);
    const [inProgress, setProgress] = useState<boolean>(false);
    const [activeStep, setActiveStep] = useState(0);
    
    return (
        <>
            <Spinner show={inProgress} />
            <Header5/>
              {
                activeStep === 0 ? 
                  <Cart setOrder={setOrder} setProgress={setProgress} setActiveStep={setActiveStep} /> :
                activeStep === 1 ?
                  <PlaceOrder order={order} setProgress={setProgress} setActiveStep={setActiveStep}/> :
                <ConfirmOrder/>                
              } 
            <Footer />
        </>
    );
};

export default Purchase;