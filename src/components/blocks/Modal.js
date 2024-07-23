import {color_grey_light} from "../../constants/colors";

const Modal = ({children, isOpen}) => {
    return (
        <div style={{
            display: isOpen? "flex" : null,
            width: "100%",
            height: "100%",
            position: "fixed",
            backgroundColor: color_grey_light,
            // opacity: "10%"
        }}>
            {children}
        </div>
    )
}

export default Modal