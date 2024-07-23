import {color_red_default, color_white} from "../../../../../constants/colors";

export const styles = {
    profileImageUpdatingContainer: {
        backgroundColor: color_white,
        borderRadius: 20,
        width: 530,
        height: 163,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    profileImageUpdatingActionContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    profileImageUpdatingActionIcon: {
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: "#FEEFEF",
        color: color_red_default,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13
    },
    profileImageUpdatingImageCircle: {
        width: 113,
        height: 113,
        borderRadius: "50%"
    }
}