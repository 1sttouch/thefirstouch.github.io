import React, { useEffect, useState } from 'react';
import { getAPIHeaders, setAuthToken, showMessage } from '../../../common/Utils';
import useFetch from '../../../hook/useFetch';
import { API } from '../../../common/Constants';
import Spinner from '../../Spinner';

const ChangePassword = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    const[password, setPassword] = useState<string | undefined>();
    const[confirmPassword, setConfirmPassword] = useState<string | undefined>();

    const reset = () => {
        setPassword('')
        setConfirmPassword('')
    }

    useEffect(() => {
        if(data && status && status < 299){
            reset();
            setAuthToken(data?.token)
            showMessage('Password Updated Successfully','SUCCESS')
        }
    }, [data]);

    const validate = () => {
        if(password !== confirmPassword) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(validate()){
            callFetch(API.CHANGE_PASSWORD,
                'PUT',
                getAPIHeaders(),
                null,
                {
                    password: password
                }
            );    
        } else {
            showMessage("Password mismatch",'ERROR')
        }
    }

    return (
        <>
            <Spinner show={isLoading} />
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Change Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="password" name='password' autoComplete='off' placeholder="Password *" required={true}
                             onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </div>
                        <div className="single-input-field">
                            <input type="password" name='confirm-password' autoComplete='off' placeholder="Confirm Password *" required={true}
                                onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        </div>
                        <button className='register-btn' type="submit" name='submit'>Change Now</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChangePassword;