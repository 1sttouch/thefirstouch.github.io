import React from 'react';
import { Fade } from 'react-reveal';
import Footer from '../Footer';
import UserHeader from '../UserHeader';
import CartView from './CartView';
import PlaceOrder from './PlaceOrder';

const Cart = () => {

    return (
        <>
            <UserHeader/>
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
                                    <PlaceOrder setProgress={()=>{}} onSuccess={()=>{}}/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Cart;