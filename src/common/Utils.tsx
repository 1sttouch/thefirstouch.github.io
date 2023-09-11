import { ToastOptions, ToastPosition, toast } from "react-toastify";


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getFromLocalStorage = (item: string): string | null => {
    return localStorage.getItem(item)
}

const setInLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key,value)
}

export const getAuthToken = (): string | null => {
   return getFromLocalStorage('token')
}

export const setAuthToken = (token: string) => {
    setInLocalStorage('token',token)
}

export const getAPIHeaders = () => {
    return {
        "Content-Type" : "application/json",
        "Authorization" : getAuthToken()
    }
}

export const getDayMonthTime = (epochDt: number): string => {
    if(epochDt) {
        var dt = new Date(epochDt * 1000);

        // dt.getDate() + ((dt.getDate()-1)%10 == 0 ? 'st': ((dt.getDate()-2)%10 == 0) ? 'nd' : ((dt.getDate()-3)%10 == 0) ? 'rd' : 'th' ) + ' ' + 
       return monthNames[dt.getMonth()]?.substr(0, 3) + ' ' + dt.getDate() + ', '+
           dt.getHours() + ':' + (dt.getMinutes()<10?'0':'') + dt.getMinutes();
    }
    return ''

}

export const durationInHoursMins = (duration: number):string => {
    if(duration){
        var hrs = Math.floor(duration / 3600)
        var mins = Math.floor((duration - (hrs * 3600) ) / 60);
        return hrs + ' hrs ' + mins + ' mins'
    }

    return '';

}

export const showMessage = (message: string , type: 'SUCCESS' | 'INFO' | 'ERROR') => {
    let props: ToastOptions = {
        closeOnClick: true,
        pauseOnHover: false,
        position: 'bottom-center',
        draggable: true,
        theme: "light",
        autoClose: 5000,

    }
    if(type === 'SUCCESS'){
        toast.success(message, props)
    } else if (type === 'ERROR'){
        toast.error(message, props)
    } else {
        toast.info(message, props)
    }
    
}