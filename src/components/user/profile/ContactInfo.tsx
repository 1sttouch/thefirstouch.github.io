import React, { useState } from 'react';
import ContactInfoEdit from './ContactInfoEdit';
import ContactInfoView from './ContactInfoView';
import Spinner from '../../common/Spinner';

export interface UserInfo {
    firstName: string
    lastName: string
    phoneNumber: number
    email: string
    _id: string
}

const ContactInfo = () => {

    const[inProgress, setProgress] = useState<boolean>(false);

    const [enableEdit,setEnableEdit] = useState<boolean>(false) ;
    const[userInfo, setUserInfo] = useState<UserInfo>();

    return (
        <>  
            <Spinner show={inProgress} />
            {
            enableEdit ? 
                     <ContactInfoEdit setProgress={setProgress} userInfo={userInfo} setEnableEdit={setEnableEdit} />
                    :
                    <ContactInfoView setProgress={setProgress} setUserInfo={setUserInfo} setEnableEdit={setEnableEdit} />            

            }
        </>
    );
};

export default ContactInfo;