import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

export const RedirectToLoginOrPersonal = ({children}) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("redirect...")
        // navigate("/service/personal")
    })

    return (
        <>{children}</>
    )
}