import {color_black, color_red_default, color_white} from "../constants/colors";

const Logo = ({baseColor = color_black}) => {
    return (
        <div>
                <span style={{
                    fontFamily: "Onest",
                    fontWeight: "Bold",
                    fontSize: 24,
                    color: baseColor
                }}>
                    SPEAK
                    <span style={{color: color_red_default}}>ID</span>
                </span>
        </div>
    )
}

export default Logo