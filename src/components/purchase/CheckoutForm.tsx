import React, { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import { getAPIHeaders, showMessage } from '../../common/Utils';

interface Props {
    setProgress: (porgress: boolean)=>void
    setOrder: (order: any)=>void
    onSuccess:() => void
}


const PlaceOrder = ({setProgress, setOrder, onSuccess}: Props) => {
    const {isLoading, error, data, status, callFetch } = useFetch(); 

    const[addressLine1, setAddressLine1] = useState<string>();
    const[addressLine2, setAddressLine2] = useState<string>();
    const[city, setCity] = useState<string>();
    const[state, setState] = useState<string>();
    const[country, setCountry] = useState<string>("India");
    const[pin, setPin] = useState<string>();

    useEffect(() => {
        setProgress(isLoading)
    }, [isLoading]);
    
    useEffect(() => {
        if(data && status && status < 299){
            reset();
            setOrder(data);
            onSuccess();
        }
    }, [data]);

    useEffect(() => {
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);

    const reset = () => {
        setAddressLine1('')
        setAddressLine2('')
        setCity('')
        setState('')
        setCountry('')
        setPin('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
      
            callFetch(API.CHECKOUT,
                'POST',
                getAPIHeaders(),
                null,
                {
                    addressLine1: addressLine1,
                    addressLine2: addressLine2,
                    city: city,
                    state: state,
                    country: country,
                    pin: pin
                }
            );
   

    }


    return (
        <>
                            
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Share Billing Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="text" name='address-line-1' autoComplete='off' placeholder="Address Line 2 *" required 
                            onChange={(e)=>setAddressLine1(e.target.value)} value={addressLine1}/>
                        </div>
                        <div className="single-input-field">
                            <input type="text" name='address-line-2' autoComplete='off' placeholder="Address Line 2 *" required 
                            onChange={(e)=>setAddressLine2(e.target.value)} value={addressLine2}/>
                        </div>
                        <div className="single-input-field">
                            <input type="text" name='city' autoComplete='off' placeholder="City *" required={true}
                            onChange={(e)=>setCity(e.target.value)} value={city} />
                        </div>
                        <div className="single-input-field">
                            <input type="text" name='state' autoComplete='off' placeholder="State *" required={true}
                            onChange={(e)=>setState(e.target.value)} value={state} />
                        </div>
                        <div className="single-input-field">
                            <input disabled type="text" name='country' autoComplete='off' placeholder="Country *" required 
                            onChange={(e)=>setCountry(e.target.value)} value={country}/>
                        </div>  
                        <div className="single-input-field">
                            <input type="number" name='pin' autoComplete='off' placeholder="PIN *" required 
                            onChange={(e)=>setPin(e.target.value)} value={pin}/>
                        </div>           
                        <button className='register-btn' type="submit" name='submit'>
                            Place Order 
                        </button>
                    </div>
                </form>

            </div>
        </>
    );
};

export default PlaceOrder;