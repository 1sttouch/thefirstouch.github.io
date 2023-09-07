import React from 'react';
import { toast } from 'react-toastify';

const LoginForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Login Successful",{position:'bottom-right'})
    }

    return (
        <>
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="text" name='user-name' autoComplete='off' placeholder="User Name *" required />
                        </div>
                        <div className="single-input-field">
                            <input type="password" name='password' autoComplete='off' placeholder="Password *" required={true}/>
                        </div>
                        <button className='register-btn' type="submit" name='submit'>Login Now</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginForm;