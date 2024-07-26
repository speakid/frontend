import { color_red_default } from "../../../../constants/colors"
import { Button } from "../../../controls/Button/Button"
import { OnestNormalDefault } from "../../../styled/TextComponents";
import { styles } from "./styles";

export const StudentInfoEditSelector = ({currentState, stateChangeCallback}) => {

    return (
        <div style={{...styles.editSelectorContainer}}>
            <div style={{
                ...styles.editSelectorButton,
                ...(currentState==="PROFILE" && styles.editSelectorButtonActive)
                }}
                onClick={()=>stateChangeCallback("PROFILE")}
            >
                <OnestNormalDefault>Профиль</OnestNormalDefault>
            </div>
            <div style={{
                ...styles.editSelectorButton,
                ...(currentState==="SCHEDULE" && styles.editSelectorButtonActive)
                }}
                onClick={()=>stateChangeCallback("SCHEDULE")}
            >
                <OnestNormalDefault>Расписание</OnestNormalDefault>
            </div>
        </div>
    )
}