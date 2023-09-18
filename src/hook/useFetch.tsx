import { useState, useEffect } from "react";
import axios from "axios";
import { showMessage } from "../common/Utils";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
interface FetchCall {
  data: any
  status: number | null
  isLoading: boolean
  error: any
  callFetch: (endpoint: string,
       method: 'POST' | 'GET' | 'DELETE' | 'PUT', 
       headers:any, 
       query:any, 
       body:any) => void
}

 
const useFetch = ():FetchCall => {
  
    const navigate = useNavigate();
    const location = useLocation()

    const [data,setData] = useState<any>(null);
    const [status,setStatus] = useState<number | null>(null);
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [error,setError] = useState<any>(null);



    const fetchData = async (endpoint, method, headers, query, body) => {
        setIsLoading(true)
        const options = {
          method: method ? method : 'GET',
          url: `http://localhost:5000/dev/v1/${endpoint}`,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
          params: {
            ...query
          },
          data: body
        };
        try {
            const response = await axios.request(options);
            setData(response.data);
            setStatus(response.status)
            setIsLoading(false);

        } catch (error) {
            setError(error);
            setStatus(error?.response?.status)

            if(error?.response?.status === 401 && location.pathname !== '/signin'){
              navigate('/signin?path='+location.pathname);
            } 

        } finally {
            setIsLoading(false)
        }
      };

    const callFetch = (endpoint, method, headers, query, body) => {
        setData(null)
        setStatus(null)
        setError(null)
        setIsLoading(true)
        fetchData(endpoint, method, headers, query, body);
    }

    return { data, status, isLoading, error, callFetch };
}

export default useFetch;