import {color_white} from "../../constants/colors";

const DefaultContainer = ({children, width = null, height= null}) => {
    return(
        <div style={{
            borderRadius: 20,
            padding: 20,
            backgroundColor: color_white,
            width: width,
            height: height,
            minHeight: "max-content"
        }}>
            {children}
        </div>
    )
}

export default DefaultContainer