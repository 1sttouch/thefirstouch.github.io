import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { TextField } from '@mui/material';

const RegistrationForm = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Registration Successful",{position:'bottom-right'})
    }

    return (
        <>
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="join-us-field">
                        <div className="single-input-field">
                            <input type="text" name='first-name' autoComplete='off' placeholder="First Name *" required />
                        </div>
                        <div className="single-input-field">
                            <input type="text" name='last-name' autoComplete='off' placeholder="Last Name *" required />
                        </div>
                        <div className="single-input-field">
                            <input type="email" name='email' autoComplete='off' placeholder="Email *" required={true}/>
                        </div>
                        <div className="single-input-field">
                            <input type="number" name='phone' autoComplete='off' placeholder="Phone No" required />
                        </div>
                        <div className="single-input-field">
                        <TextField
                            variant='outlined'
                            id="date-of-birt"
                            type="date"     
                            label="Date of Birth *"
                            sx={{
                                width: "100%",
                                borderRadius: 0,
                                border : 'none',
                                padding: '0px 0px',
                                margin: '10px 0px',                        
                            }}        
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                sx:{
                                    width: "100%",
                                    borderRadius: 0,
                                    border : '0px solid #ddd',
                                    "&:hover": {
                                        border: "0px solid #ddd",
                                    },
                                }
                            }}
                            
                        />
                        </div>                        
                        <button className='register-btn' type="submit" name='submit'>Register Now </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;