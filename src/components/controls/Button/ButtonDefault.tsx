import {FC, ReactNode} from "react";
import {color_red_default, color_transparent, color_white} from "../../../constants/colors";
import {Button} from "./Button";

type ButtonBigDefaultProps = {
    children: ReactNode,
    width: number,
    height: number,
    active: boolean
}
export const ButtonDefault: FC<ButtonBigDefaultProps> = ({
    children,
    width,
    height,
    active
}) => {
    return (
        <Button
            outline={false}
            width={width}
            height={height}
            active={active}
            backgroundColor={color_red_default}
            color={color_white}
            borderColor={color_transparent}
            fontSize={16}
        >
            {children}
        </Button>
    )
}