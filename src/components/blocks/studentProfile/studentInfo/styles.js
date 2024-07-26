import { color_red_default, color_white } from "../../../../constants/colors";

export const styles = {
    studentImageContainer: {
        width: 130,
        height: 130,
        position: "relative"
    },
    studentImage: {
        width: 130,
        height: 130,
        borderRadius: "50%",
        objectFit: "cover"
    },
    studentImageChangeButton: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        color: color_white,
        backgroundColor: color_red_default,
        position: "absolute",
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    studentNameContainer: {
        // width: 240,
        height: 60,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    studentImageNameContainer: {
        width: 420,
        height: 130,
        display: "flex",
        flexDirection: "row",
        gap: 25,
        alignItems: "center"
    },
    studentInfoContainer: {
        width: 480,
        height: 800,
        backgroundColor: color_white,
        borderRadius: 20,
        boxSizing: "border-box",
        padding: 30,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        overflow: "scroll"
    }
}