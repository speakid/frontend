import {color_grey_dark, color_transparent} from "../../../constants/colors";
import {FC, ReactNode, useEffect} from "react";


type ButtonProps = {
    children: ReactNode,
    outline: boolean,
    width: number,
    height: number,
    active: boolean,
    backgroundColor: string ,
    color: string,
    borderColor: string ,
    fontSize: number,
    type?: string
}

export const Button: FC<ButtonProps> = ({
    children,
    outline,
    width,
    height,
    active = true,
    backgroundColor,
    color,
    borderColor,
    fontSize,
    type = null,
}) => {
    const buttonStyle = {
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            color: color,
            borderColor: borderColor,
            fontSize: fontSize,
            borderRadius: 10,
            boxShadow: "null",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 0,
            cursor: "pointer"
    }
    return (
        <button style={buttonStyle}>
            {children}
        </button>
    )
}


