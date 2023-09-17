import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useFetch from '../../hook/useFetch';
import { API } from '../../common/Constants';
import { getAPIHeaders, showMessage } from '../../common/Utils';
import Spinner from '../common/Spinner';

interface Props {
    itemId: string
    itemType: string
}

const AddToCartButton = ({itemId, itemType}:Props) => {
    const {isLoading, error, data, status, callFetch } = useFetch();

    const onCartAddSuccess = () => {
        showMessage("Item added to cart successfully",'SUCCESS')
    }
    
    useEffect(() => {
        if( status && status < 299){
            onCartAddSuccess()
        }
    }, [status]);

    useEffect(() => {
        console.log(error)
        if(error){
            showMessage(error?.response?.data,'ERROR')
        }
    }, [error]);

    
    const validate = () => {
        if(itemId && itemType) {
            return true;
        }

        return false;
    }

    const handleSubmit = (event) => {  
        if(validate()){
            callFetch(API.CART,
                'PUT',
                getAPIHeaders(),
                null,
                {
                    _id : itemId,
                    type: itemType
                }
            );
        } else {
            showMessage("Missing item id or item type",'ERROR')
        }   

    }

    return (
        <>
           <Spinner show={isLoading} />
           <Link onClick={handleSubmit}><i className="fa fa-shopping-cart" style={{ color: "#f1c40f", marginRight:"6px"}}></i>{"Add to Cart"}</Link>
        </>

    );
};

export default AddToCartButton;