import React, { useEffect, useState } from 'react';
import useFetch from '../hook/useFetch';
import { API } from '../common/Constants';
import { showMessage } from '../common/Utils';

interface Props {
    setProgress: (porgress: boolean)=>{}
    onSuccess: (data: any)=>{}
}

const ContactForm = ({setProgress, onSuccess}) => {
    const {isLoading, error, data, status, callFetch } = useFetch(); 

    const[firstName, setFirstName] = useState<string>();
    const[lastName, setLastName] = useState<string>();
    const[email, setEmail] = useState<string>();
    const[phoneNumber, setPhoneNumber] = useState<string>();
    const[content, setContent] = useState<string>();

    useEffect(() => {
        setProgress(isLoading)
    }, [isLoading]);
    
    useEffect(() => {
        if(data && status && status < 299){
            reset();
            onSuccess(data);
        }
    }, [data, status]);

    useEffect(() => {
        if(error){
           showMessage(error.response?.data,'ERROR')
        }
    }, [error]);


    const reset = () => {
        setFirstName('')
        setLastName('')
        setContent('')
        setEmail('')
        setPhoneNumber('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
       
        var payload = {
            firstName: firstName,
            lastName: lastName,
            content: content,
            email: email,
            phoneNumber: Number(phoneNumber)
        }
       
        callFetch(API.QUERY,
                'POST',
                null,
                null,
                payload
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="contact-page-form">
                    <div className="row">
                        <h2>Send your message</h2>
                        <div className="col-md-6">
                            <input type="text" name='firstName' placeholder="First Name*" autoComplete="off" required 
                             onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name='lastName' placeholder="Last Name*" autoComplete="off" required 
                             onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                        </div>
                        <div className="col-md-6 ">
                            <div className="single-input-field">
                                <input type="number" name='phone' placeholder="Phone Number*" autoComplete="off" required 
                                onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-input-field">
                                <input type="email" name='email' placeholder="E-mail*" autoComplete="off" required 
                                 onChange={(e)=>setEmail(e.target.value)} value={email}/>
                            </div>
                        </div>
                        <div className="col-md-12 message-input">
                            <div className="single-input-field">
                                <textarea placeholder="Write Your Message*" name='comment-form' autoComplete="off" required
                                 onChange={(e)=>setContent(e.target.value)} value={content}/>
                            </div>
                        </div>
                        <div className="single-input-fields-btn">
                            <button type="submit" name='submit'>Send Now</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;