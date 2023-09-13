import React from 'react';
import { Fade } from 'react-reveal';
import CartView from './CartView';
import CheckoutForm from './CheckoutForm';
import ConfirmOrderView from './ConfirmOrderView';

interface Props {
    setProgress: (inProgress:boolean) =>void
    setActiveStep: (step:number) => void
}

const ConfirmOrder = () => {
    return (
        <>
  
            <section className="event-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <Fade bottom>
                                <ConfirmOrderView />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    );
};

export default ConfirmOrder;