import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

export const LogOut = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/auth/login")
    })

    return (
        <></>
    )
}