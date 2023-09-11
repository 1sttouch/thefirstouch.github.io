import React, {useEffect, useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { getAPIHeaders, showMessage } from '../../../common/Utils';
import useFetch from '../../../hook/useFetch';
import { API } from '../../../common/Constants';

interface Props {
    setEnableEdit: (enable: boolean)=>void
    setUserInfo: (userInfo: any)=>void
    setProgress: (porgress: boolean)=>void
}

const ContactInfoView = ({setEnableEdit, setUserInfo, setProgress}:Props) => {
    const {isLoading, error, data, status, callFetch } = useFetch();

    const[firstName, setFirstName] = useState<string>();
    const[lastName, setLastName] = useState<string>();
    const[email, setEmail] = useState<string>();
    const[phoneNumber, setPhoneNumber] = useState<string>();

    useEffect(() => {
        setProgress(isLoading)
    }, [isLoading]);

    useEffect(() => {
        callFetch(API.PROFILE,
            'GET',
            getAPIHeaders(),
            null,
            null
        );
    }, []);

    useEffect(() => {
        if(data && status && status < 299){
            setUserInfo(data);
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setEmail(data.email)
            setPhoneNumber(data.phoneNumber)
        }
    }, [data]);

    useEffect(() => {
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);

    const onClickEdit = () => {
        setEnableEdit(true)
    }

    return (
        <> 
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Profile Details</h1>
                <div className="event-details-info">
                    <ul>
                        <li>First Name:<span>{firstName}</span></li>
                        <li>Last Name:<span>{lastName}</span></li>
                        <li>Date of Birth:<span>{}</span></li>
                        <li>Email Address:<span>{email}</span></li>
                        <li>Phone number:<span>{phoneNumber}</span></li>
                    </ul>
                    <div className="get-course-btn">
                        <Link to="#" onClick={onClickEdit}>Edit</Link>
                    </div>
                </div>       
           </div>
        </>
    );
};

export default ContactInfoView;