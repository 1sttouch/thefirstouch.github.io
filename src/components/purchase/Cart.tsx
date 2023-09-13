import React from 'react';
import { Fade } from 'react-reveal';
import CartView from './CartView';
import CheckoutForm from './CheckoutForm';

interface Props {
    setOrder: (order:any)=> void
    setProgress: (inProgress:boolean) =>void
    setActiveStep: (step:number) => void
}

const Cart = ({setOrder, setProgress, setActiveStep}: Props) => {

    const onSuccess = () => {
        setActiveStep(1);
    }

    return (
        <>
  
            <section className="event-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <Fade left>
                                <CartView />
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right>
                                <CheckoutForm 
                                    onSuccess={onSuccess} 
                                    setProgress={setProgress} 
                                    setOrder={setOrder}
                                />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    );
};

export default Cart;