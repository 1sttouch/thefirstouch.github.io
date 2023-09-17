import React, {useState,useEffect,useContext, Children} from 'react'
import { getAuthToken } from '../common/Utils';

const AuthContext = React.createContext({})

interface Props {
    children: React.ReactNode
}


export function useAuth() : any{
    return useContext(AuthContext);
}

export function AuthProvider ({children}:Props) {
    const [authUser,setAuthUser] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let authToken = getAuthToken() ;
        if(authToken){
            setAuthUser('Some User')
            setIsLoggedIn(true)
        }
      }, [])

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}