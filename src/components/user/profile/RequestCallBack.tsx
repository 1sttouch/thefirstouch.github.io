import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useFetch from '../../../hook/useFetch';
import { getAPIHeaders, showMessage } from '../../../common/Utils';
import { API } from '../../../common/Constants';

const RequestCallBack = () => {
    const {isLoading, error, data, status, callFetch } = useFetch();

    useEffect(() => {
        if(data && status && status < 299){
            showMessage('Callback requested Successfully','SUCCESS')
        }
    }, [data]);


    useEffect(() => {
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);

    const handleSubmit = (event) => {
        event.preventDefault()
        
        callFetch(API.CALLBACK,
            'POST',
            getAPIHeaders(),
            null,
            {}
        );    
   
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="course-instructor">
                        <form onSubmit={handleSubmit}>
                        <div className="instructor-img">
                            <img src="/img/client/client1.png" alt="client" />
                        </div>
                        <div className="details">
                            <h2><Link to="#">Request callback</Link></h2>
                            <span>let us reach you</span>
                        </div>
                        <div className="rating">
                            <p>Errem delicatissimi no mel, error vocibus ut vim, te mei aeterno nominavi delectus. Tamquam ornatus pro no, cum id elitr soleat maluisset. Mel quas everti insolens cu, duo harum feugiat an.</p>
                        </div>
                        <div className="get-course-btn">
                            <button  type="submit" name='submit'>Submit Request</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestCallBack;