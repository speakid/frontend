import { color_grey_dark, color_grey_light, color_grey_ultra_light, color_red_default, color_transparent, color_white } from "../../../../constants/colors";

export const styles = {
    infoEditContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 5
    },
    infoEditForm:{
        display: "flex", 
        flexDirection: "column",
        gap: 20,
    },
    weekdaySelectorContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: 420,
        gap: 10
    },
    weekDaySelectorButton: {
        width: 50,
        // padding: "0px 10px",
        height: 40,
        borderRadius: 10,
        backgroundColor: color_grey_ultra_light,
        color: color_grey_dark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },
    weekDaySelectorButtonActive: {
        backgroundColor: color_red_default,
        color: color_white
    },
    timeSelectContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 20
    },
    timeSelect: {
        width: 420,
        height: 40,
        backgroundColor: color_grey_ultra_light,
        color: color_grey_dark,
        borderRadius: 10,
        borderColor: color_transparent,
        padding: 10
    }
}