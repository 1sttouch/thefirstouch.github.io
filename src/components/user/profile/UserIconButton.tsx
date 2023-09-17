import React from "react";
import MenuDropDown, { ActionItem } from "../../common/MenuDropDown";
import { useNavigate } from "react-router-dom";
import { removeAuthToken, setAuthToken } from "../../../common/Utils";
import { useAuth } from "../../../hook/authContext";


export default function UserIconButton () { 
    const {authUser, setAuthUser, setIsLoggedIn, isLoggedIn} = useAuth() ;
    const navigate = useNavigate();
    let items:ActionItem[] = []

    const onClickProfile = () => {
        navigate('/user-profile');
    }
    const onClickLogOut = () => {
        removeAuthToken()
        setIsLoggedIn(false)
		setAuthUser(null)
        navigate('/signin');
    }

    items.push({
        name: "Profile",
        action: onClickProfile
    })

    items.push({
        name: "Log Out",
        action: onClickLogOut
    })

    return (
        <MenuDropDown items={items} iconEle={<i className="fa fa-user"></i>}/>
    )
}