import {color_black, color_grey_light, color_transparent, color_white} from "../../../../constants/colors";

export const styles = {
    weeklyTasksModalContainer: {
        width: 430,
        minHeight: 518,
        backgroundColor: color_white,
        borderRadius: 20,
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        gap: 15,
        padding: 15
    },
    weeklyTasksModalTaskContainer: {
        width: 410,
        height: 101,
        backgroundColor: color_grey_light,
        color: color_black,
        display: "flex",
        borderRadius: 20,
        padding: 10,
        flexDirection: "row"
    },
    weeklyTasksModalTextArea: {
        resize: "none",
        height: 101,
        width: "100%",
        padding: 0,
        border: "0px solid transparent",
        textAlign: "start",
        flexGrow: 1,
        backgroundColor: color_transparent,
        borderColor: "transparent",
        WebkitBoxShadow: "none",
        MozBoxShadow: "none",
        boxShadow: "none",
        outline: "none"
    }
}