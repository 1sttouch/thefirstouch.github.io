import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useFetch from '../hook/useFetch';
import DatePicker from './DatePicker';
import { API } from '../common/Constants';

interface Props {
    setProgress: (porgress: boolean)=>{}
    onSuccess: (data: any)=>{}
}


const RegistrationForm = ({setProgress, onSuccess}) => {
    const {isLoading, error, data, status, callFetch } = useFetch(); 

    const[firstName, setFirstName] = useState<string | undefined>(undefined);
    const[lastName, setLastName] = useState<string | undefined>(undefined);
    const[username, setUserName] = useState<string | undefined>(undefined);
    const[password, setPassword] = useState<string | undefined>(undefined);
    const[confirmPassword, setConfirmPassword] = useState<string | undefined>(undefined);
    const[email, setEmail] = useState<string | undefined>(undefined);
    const[phoneNumber, setPhoneNumber] = useState<number | undefined>(undefined);

    useEffect(() => {
        setProgress(isLoading)
    }, [isLoading]);
    
    useEffect(() => {
        if(data && status && status < 299){
            reset();
            onSuccess(data);
        }
    }, [data]);

    useEffect(() => {
        if(error){
            toast(error.response.data,{position:'bottom-right'})
        }
    }, [error]);

    const validate = () => {
        if(password !== confirmPassword) {
            return false;
        }

        return true;
    }

    const reset = () => {
        setFirstName(undefined)
        setLastName(undefined)
        setUserName(undefined)
        setPassword(undefined)
        setConfirmPassword(undefined)
        setEmail(undefined)
        setPhoneNumber(undefined)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        if(validate()){
            callFetch(API.SIGN_UP,
                'POST',
                null,
                null,
                {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    password: password,
                    email: email,
                    phoneNumber: phoneNumber
                }
            );
        } else {
            toast("Password mismatch",{position:'bottom-right'})
        }

    }


    return (
        <>
                            
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="text" name='first-name' autoComplete='off' placeholder="First Name *" required 
                            onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        </div>
                        <div className="single-input-field">
                            <input type="text" name='last-name' autoComplete='off' placeholder="Last Name *" required 
                            onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                        </div>
                        <div className="single-input-field">
                            <DatePicker/>
                        </div>
                        <div className="single-input-field">
                            <input type="email" name='email' autoComplete='off' placeholder="Email *" required={true}
                            onChange={(e)=>setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="single-input-field">
                            <input type="number" name='phone' autoComplete='off' placeholder="Phone Number" required 
                            onChange={(e)=>setPhoneNumber(Number(e.target.value))} value={phoneNumber}/>
                        </div>
                        <div className="single-input-field">
                            <input type="text" name='user-name' autoComplete='off' placeholder="Username *" required 
                            onChange={(e)=>setUserName(e.target.value)} value={username}/>
                        </div>
                        <div className="single-input-field">
                            <input type="password" name='password' autoComplete='off' placeholder="Password *" required 
                            onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </div>
                        <div className="single-input-field">
                            <input type="password" name='confirm-password' autoComplete='off' placeholder="Confirm Password *" required 
                            onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        </div>                   
                        <button className='register-btn' type="submit" name='submit'>
                            Register Now 
                        </button>
                    </div>
                </form>

            </div>
        </>
    );
};

export default RegistrationForm;