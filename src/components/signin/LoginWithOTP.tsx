import React, { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { API }  from '../../common/Constants'
import { setAuthToken, showMessage } from '../../common/Utils';
import { useAuth } from '../../hook/authContext';
import { useNavigate } from 'react-router-dom';

interface Props {
    setProgress: (porgress: boolean)=>{}
}

const LoginWithOTP = ({setProgress}) => {
    const {authUser, setAuthUser, setIsLoggedIn, isLoggedIn} = useAuth();
    const navigate = useNavigate();
    
    const {isLoading, error, data, status, callFetch } = useFetch();

    const[username, setUserName] = useState<string | undefined>(undefined);
    const[otp, setOTP] = useState<string | undefined>(undefined);
    const[otpSent, setOTPSent] = useState<boolean>(false);
    const[otpSentMsg, setOTPSentMsg] = useState<boolean>(false);
    
    useEffect(() => {
        setProgress(isLoading)
    }, [isLoading]);
    
    useEffect(() => {
        if(status && status < 299){ 
            setOTPSent(true)
            setOTPSentMsg(true)
        }
    }, [status]);

    useEffect(() => {
        if(data){ 
            setAuthToken(data.token);
            setAuthUser(username);
            setIsLoggedIn(true);
            navigate('/user-home');
        }
    }, [data]);

    useEffect(() => {
        if(otpSentMsg){
            showMessage('OTP sent! Please check your email','INFO')
        }
        setOTPSentMsg(false)
    }, [otpSentMsg]);

    useEffect(() => {
        if(error){
            showMessage(error.response?.data,'ERROR')
        }
    }, [error]);

    const reset = () => {
        setUserName(undefined)
        setOTP(undefined)
    }


    const sendOTP = (event) => {
        event.preventDefault()
        
        callFetch(API.RESET_PASSWORD,
            'POST',
            null,
            null,
            {
                username: username,
            }
        );
    }


    const handleSubmitSendOTP = (event) => {
        event.preventDefault()
        event.target.reset()
        sendOTP(event);
    }

    const handleSubmitConfirmOTP = (event) => {
        event.preventDefault()
        event.target.reset()
        callFetch(API.RESET_PASSWORD_VERIFY,
            'POST',
            null,
            null,
            {
                username: username,
                otp: otp
            }
        );
    }

    return (
        <>
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Login with OTP</h1>


                { otpSent ?
                        <form onSubmit={handleSubmitConfirmOTP}>
                            <div className="join-us-field">
                                <div className="single-input-field">
                                    <input type="text" name='user-name' autoComplete='off' placeholder="User Name *" required
                                    onChange={(e)=>setUserName(e.target.value)} value={username} disabled/>
                                </div>
                                
                                <button id="send-otp" className='register-btn full-width' onClick={sendOTP}>Resend OTP</button>
                              
                                
                                <div className="single-input-field">
                                    <input type="text" name='otp' autoComplete='off' placeholder="OTP *" required
                                    onChange={(e)=>setOTP(e.target.value)} value={otp} />
                                </div>
                                <button id="confirm-otp" className='register-btn full-width' type="submit" name='submit'>Confirm OTP</button>
                                
                            </div>
                        </form>
                    :
                    <form onSubmit={handleSubmitSendOTP}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="text" name='user-name' autoComplete='off' placeholder="User Name *" required
                            onChange={(e)=>setUserName(e.target.value)} value={username} disabled={otpSent}/>
                        </div>
                        <button id="send-otp" className='register-btn full-width' type="submit" name='submit'>Send OTP</button>


                    </div>
                </form>
                }
            </div>
        </>
    );
};

export default LoginWithOTP;