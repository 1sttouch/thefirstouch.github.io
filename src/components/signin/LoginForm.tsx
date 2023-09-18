import React, { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { API }  from '../../common/Constants'
import { showMessage } from '../../common/Utils';
import { useAuth } from '../../hook/authContext';

interface Props {
    setProgress: (porgress: boolean)=>{}
    onSuccess: (data: any)=>{}
}

const LoginForm = ({setProgress, onSuccess}) => {
    const {authUser, setAuthUser, setIsLoggedIn, isLoggedIn} = useAuth();

    const {isLoading, error, data, status, callFetch } = useFetch();

    const[username, setUserName] = useState<string | undefined>(undefined);
    const[password, setPassword] = useState<string | undefined>(undefined);
    
    useEffect(() => {
        setProgress(isLoading)
    }, [isLoading]);
    
    useEffect(() => {
        if(data && status && status < 299){
            setAuthUser(username);
            setIsLoggedIn(true);
            reset();
            onSuccess(data);
        }
    }, [status]);

    useEffect(() => {
        if(error){
            showMessage(error.response.data,'ERROR')
        }
    }, [error]);

    const reset = () => {
        setUserName(undefined)
        setPassword(undefined)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        callFetch(API.LOGIN,
            'POST',
            null,
            null,
            {
                username: username,
                password: password
            }
        );
    }

    return (
        <>
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="text" name='user-name' autoComplete='off' placeholder="User Name *" required
                            onChange={(e)=>setUserName(e.target.value)} value={username} />
                        </div>
                        <div className="single-input-field">
                            <input type="password" name='password' autoComplete='off' placeholder="Password *" required={true}
                            onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </div>
                        <button className='register-btn' type="submit" name='submit'>Login Now</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginForm;