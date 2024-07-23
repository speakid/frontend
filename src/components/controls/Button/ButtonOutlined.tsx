import {FC, ReactNode} from "react";
import {color_red_default, color_transparent, color_white} from "../../../constants/colors";
import {Button} from "./Button";

type ButtonBigDefaultProps = {
    children: ReactNode,
    width: number,
    height: number,
    active: boolean,
    borderColor: string,
    color: string,
    fontSize: number
}
export const ButtonOutlined: FC<ButtonBigDefaultProps> = ({
    children,
    width,
    height,
    active,
    borderColor= color_red_default,
    color = color_red_default,
    fontSize = 16
}) => {
    return (
        <Button
            outline={false}
            width={width}
            height={height}
            active={active}
            backgroundColor={color_transparent}
            color={color}
            borderColor={borderColor}
            fontSize={fontSize}
        >
            {children}
        </Button>
    )
}