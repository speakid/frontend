import {color_grey_light, color_red_default, color_red_light, color_white} from "../../../../constants/colors";

export const styles = {
    weeklyTaskRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 15,
        paddingTop: 15,
        paddingBottom: 15,
        transition: "5s",
        borderBottom: `1px solid ${color_grey_light}`
    },
    completedWeeklyTaskRow: {
        borderBottom: `1px solid ${color_red_default}`
    },
    lastWeeklyTaskRow: {
        borderBottom: "none"
    },
    weeklyTaskCircle: {
        width: 20,
        minWidth: 20,
        height: 20,
        minHeight: 20,
        borderRadius: "50%",
        backgroundColor: color_white,
        border: `1px solid ${color_red_light}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: color_white,
        boxSizing: "border-box"
    },
    completedWeeklyTaskCircle: {
        backgroundColor: color_red_light,
        border: null
    },
    weeklyTasksContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    weeklyTasksHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    weeklyTasksRowContainer: {
        display: "flex",
        flexDirection: "column",
        overflow: "scroll",
        height: "100%"
    }
}