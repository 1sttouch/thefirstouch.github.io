import React from 'react';
import { toast } from 'react-toastify';

const ChangePassword = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Login Successful",{position:'bottom-right'})
    }

    return (
        <>
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Change Password Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="password" name='current-password' autoComplete='off' placeholder="Current Password *" required />
                        </div>
                        <div className="single-input-field">
                            <input type="password" name='password' autoComplete='off' placeholder="Password *" required={true}/>
                        </div>
                        <div className="single-input-field">
                            <input type="password" name='confirm-password' autoComplete='off' placeholder="Confirm Password *" required={true}/>
                        </div>
                        <button className='register-btn' type="submit" name='submit'>Change Now</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChangePassword;