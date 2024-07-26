import * as colors from "../../../constants/colors";
import {useState} from "react";

const CheckBoxMain = ({onActivate, onDeactivate, isInactive, register}) => {

    const [checked, setChecked] = useState(false);
    const [hover, setHover] = useState(false);

    const defaultStyle = {
        backgroundColor: colors.color_white,
        // box-shadow: 1px 0 4px 0 rgba(178, 178, 178, 0.29),
        boxShadow: "1px 0 4px 0 rgba(178, 178, 178, 0.29)",
        borderRadius: 5,
        width: 25,
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    function handleClick(e){
        if(checked) onDeactivate()
        else onActivate()
        setChecked(!checked);

    }

    return(
        <div
            style={defaultStyle}
            onClick={!isInactive? handleClick : null}
            onMouseEnter={!isInactive? ()=>setHover(true) : null}
            onMouseLeave={!isInactive? ()=>setHover(false) : null}
        >
            {isInactive === true &&
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 3.75L5.625 10.625L2.5 7.5" stroke="#B1B1B1" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            }
            {hover === true && checked === false &&
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 0.75L3.625 7.625L0.5 4.5" stroke="#F4BEBE" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            }
            {checked===true &&
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 0.75L3.625 7.625L0.5 4.5" stroke="#E12F2F" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            }
        </div>
    )
}

export default CheckBoxMain