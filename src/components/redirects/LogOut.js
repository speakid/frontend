import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import Cookies from "js-cookie";

export const LogOut = () => {
    const navigate = useNavigate();
    useEffect(() => {
        Cookies.remove('jwt');
        navigate("/auth/login")
    })

    return (
        <></>
    )
}