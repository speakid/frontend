import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Config from "../../Config";
import {color_red_default} from "../../constants/colors";
import {InfinitySpin} from "react-loader-spinner";

export const RedirectToLoginIfNotAuthenticated = ({children}) => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const jwt = Cookies.get('jwt');
        if(jwt === null){
            return navigate("auth/login")
        } else{
            console.debug("Check authentication")
            axios.get(Config.BACKEND_ADDR + "/auth/token_auth", {params: {token: jwt}}).then(res => {
                if (res.status === 200){
                    console.debug("Authentication check passed")
                    setChecked(true)
                } else {
                    console.warn("Authentication check not passed. Redirecting to login page")
                    navigate("/auth/login")
                }
                setChecked(true)
            }).catch(err=>{
                console.error("Can't authenticate. Err: ", err)
                navigate("/auth/login")
                setChecked(true)
            })
        }

    })
    return (
        <>{checked? children : <InfinitySpin visible={true} width={200} color={color_red_default}/>}</>
    )
}