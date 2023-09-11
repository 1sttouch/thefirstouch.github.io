import React, { useEffect, useState } from 'react';
import { API } from '../../../common/Constants';
import { getAPIHeaders, showMessage } from '../../../common/Utils';
import useFetch from '../../../hook/useFetch';
import { UserInfo } from './ContactInfo';

interface Props {
    setEnableEdit: (enable: boolean)=>void
    userInfo: UserInfo | undefined
    setProgress: (porgress: boolean)=>void
}

const ContactInfoEdit = ({setEnableEdit, userInfo, setProgress}: Props) => {
    const {isLoading, error, data, status, callFetch } = useFetch();
    
    const[profileId, setProfileId] = useState<string | undefined>(userInfo?._id);
    const[firstName, setFirstName] = useState<string | undefined>(userInfo?.firstName);
    const[lastName, setLastName] = useState<string | undefined>(userInfo?.lastName);
    const[email, setEmail] = useState<string| undefined>(userInfo?.email);
    const[phoneNumber, setPhoneNumber] = useState<string | undefined>(String(userInfo?.phoneNumber));

    useEffect(() => {
        setProgress(isLoading)
    }, [isLoading]);

    useEffect(() => {
        if(data && status && status < 299){
            setEnableEdit(false)
            showMessage('Contact Updated Successfully','SUCCESS')
        }
    }, [data]);

    useEffect(() => {
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);
    
    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        callFetch(API.PROFILE,
            'PUT',
            getAPIHeaders(),
            null,
            {
                _id: profileId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: Number(phoneNumber)
            }
        );    
    }

    return (
        <>  
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Edit Profile Details</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="join-us-field">
                            <div className="single-input-field">
                                        <input type="text" name='first-name' autoComplete='off' placeholder="First Name *" required 
                                        onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                            </div>
                            <div className="single-input-field">
                                        <input type="text" name='last-name'  autoComplete='off' placeholder="Last Name *" required
                                        onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                            </div>
                            <div className="single-input-field">
                                        <input type="email" name='email' autoComplete='off' placeholder="Email *" required
                                        onChange={(e)=>setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className="single-input-field">
                                        <input type="number" name='phone-number' autoComplete='off' placeholder="Phone Number *" required
                                        onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}/>
                            </div>
                            <button className='register-btn' type="submit" name='submit'>Save</button>
                    </div>
                </form>
            </div>          
        </>
    );
};

export default ContactInfoEdit;