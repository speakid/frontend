import * as colors from "../../constants/colors"
import {useState} from "react";

const AccordionButton = ({onActivate, onDeactivate}) => {
    const [active, setActive] = useState(false);

    function handleClick(e){
        setActive(!active);
        if(active) onDeactivate()
        else onActivate()
    }

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: colors.color_red_default,
                width: 25,
                height: 25,
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {active === true ?
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.80481 3.92676V12.4633" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.53662 8.19482H12.0732" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                :
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.53662 8.19482H12.0732" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            }
        </div>
    )
}

export default AccordionButton