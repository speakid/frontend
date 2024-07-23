import {InfinitySpin} from "react-loader-spinner";
import {color_red_default} from "../../constants/colors";
import React from "react";

export const LoadingContainer = ({children, isLoading, showLoader = true}) => {
    return (
        <>
            {isLoading ?
                showLoader? <InfinitySpin visible={true} width={200} color={color_red_default}/> : null
                :
                <>{children}</>
            }
        </>
    )
}