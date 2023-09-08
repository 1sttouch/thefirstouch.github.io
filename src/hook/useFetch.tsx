import { useState, useEffect } from "react";
import axios from "axios";

interface FetchCall {
  data: any
  status: number | null
  isLoading: boolean
  error: any
  callFetch: (endpoint: string,
       method: 'POST' | 'GET' | 'DELETE' | 'PUT', 
       query:any, 
       headers:any, 
       body:any) => void
}

 
const useFetch = ():FetchCall => {
    const [data,setData] = useState<any>(null);
    const [status,setStatus] = useState<number | null>(null);
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [error,setError] = useState<any>(null);



    const fetchData = async (endpoint, method, query, headers, body) => {
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
        } finally {
            setIsLoading(false)
        }
      };

    const callFetch = (endpoint, method, query, headers, body) => {
        setIsLoading(true)
        fetchData(endpoint, method, query, headers, body);
    }

    return { data, status, isLoading, error, callFetch };
}

export default useFetch;