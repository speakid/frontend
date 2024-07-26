import { color_grey_dark, color_grey_light, color_grey_ultra_light, color_red_default, color_white } from "../../../../constants/colors";

export const styles = {
    editSelectorContainer: {
        width: 420,
        minHeight: 55,
        backgroundColor: color_grey_ultra_light,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"

    },
    editSelectorButton: {
        width: 196,
        height: 35,
        borderRadius: 10,
        backgroundColor: color_white,
        color: color_grey_dark,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    },
    editSelectorButtonActive: {
        backgroundColor: color_red_default,
        color: color_white
    }
}