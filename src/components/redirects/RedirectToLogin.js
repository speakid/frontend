import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

export const RedirectToLogin = ({children}) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("redirect...")
        // navigate("/auth/login")
    })

    return (
        <>{children}</>
    )
}