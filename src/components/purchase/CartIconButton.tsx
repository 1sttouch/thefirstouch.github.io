import React from "react";
import MenuDropDown, { ActionItem } from "../common/MenuDropDown";
import { useNavigate } from "react-router-dom";


export default function CartIconButton () { 

    const navigate = useNavigate();
    let items:ActionItem[] = []

    const onClickMyCart = () => {
        navigate('/purchase');
    }

    items.push({
        name: "My Cart",
        action: onClickMyCart
    })

    return (
        <MenuDropDown items={items} iconEle={<i className="fa fa-shopping-cart"></i>}/>
    )
}