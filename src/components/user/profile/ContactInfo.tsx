import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { toast } from 'react-toastify';

const ContactInfo = () => {
    const [enableEdit,setEnableEdit] = useState(false) ;

    const user = {
         firstName: 'Ronaldo',
         lastName: 'Silva',
         email: 'r.silva@gmail.com',
         phoneNumber: 234234232,
         dob: '21/04/1990'
        }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        setEnableEdit(false)
        toast("Updated Successful",{position:'bottom-right'})
    }

    const onClickEdit = () => {
        setEnableEdit(true)
    }

    return (
        <> 
            <div className="join-us-form position-relative">
                <h1 className="join-us-form-title">Profile Details</h1>
        
                {

                    enableEdit ? 
                            <>
                            <form onSubmit={handleSubmit}>
                                <div className="join-us-field">
                                    <div className="single-input-field">
                                        <input type="text" name='first-name' value={user.firstName} autoComplete='off' placeholder="First Name *" required />
                                    </div>
                                    <div className="single-input-field">
                                        <input type="text" name='last-name' value={user.lastName} autoComplete='off' placeholder="Last Name *" required={true}/>
                                    </div>
                                    <div className="single-input-field">
                                        <input type="email" name='email' value={user.email} autoComplete='off' placeholder="Email *" required={true}/>
                                    </div>
                                    <div className="single-input-field">
                                        <input type="number" name='phone-number' value={user.phoneNumber} autoComplete='off' placeholder="Phone Number *" required={true}/>
                                    </div>
                                    <button className='register-btn' type="submit" name='submit'>Save</button>
                                </div>
                            </form>
                            </>
                        
                        :
                        <div className="event-details-info">

                            <ul>
                                <li>First Name:<span>{user.firstName}</span></li>
                                <li>Last Name:<span>{user.lastName}</span></li>
                                <li>Date of Birth:<span>{user.dob}</span></li>
                                <li>Email Address:<span>{user.email}</span></li>
                                <li>Phone number:<span>{user.phoneNumber}</span></li>
                            </ul>
                            <div className="get-course-btn">
                                <Link to="#" onClick={onClickEdit}>Edit</Link>
                            </div>
                        </div>                

                }
           </div>
        </>
    );
};

export default ContactInfo;