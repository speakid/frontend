import { color_grey_dark, color_grey_light, color_grey_ultra_light, color_red_default, color_transparent, color_white } from "../../../../constants/colors";

export const styles = {
    infoEditForm: {
        width: 420,
        height: 390,
        display: "flex",
        flexDirection: "column",
        gap: 25
    },
    infoEditContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 5
    },
    levelSelectorContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: 420,
        gap: 10
    },
    infoEditSmallTextInput: {
        width: 205,
        height: 50,
        backgroundColor: color_grey_ultra_light,
        color: color_grey_dark,
        borderRadius: 10,
        borderColor: color_transparent
    },
    levelSelectorButton: {
        // width: 60,
        padding: "0px 10px",
        height: 40,
        borderRadius: 10,
        backgroundColor: color_grey_ultra_light,
        color: color_grey_dark,
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
    },
    levelSelectorButtonActive: {
        backgroundColor: color_red_default,
        color: color_white
    }
}