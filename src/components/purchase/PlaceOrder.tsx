import React from 'react';
import { Fade } from 'react-reveal';
import OrderView from './OrderView';
import PlaceOrderForm from './PlaceOrderForm';

interface Props {
    order: any
    setProgress: (inProgress:boolean) =>void
    setActiveStep: (step: number) => void
}

const PlaceOrder = ({order,setProgress, setActiveStep}:Props) => {

    const onSuccess = () => {
        setActiveStep(2);
    }

    return (
        <>
      
            <section className="event-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <Fade left>
                                <OrderView order={order} />
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right>
                                    <PlaceOrderForm onSuccess={onSuccess} setProgress={setProgress} order={order}/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    );
};

export default PlaceOrder;