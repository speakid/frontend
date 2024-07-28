import PersonalDefaultPage from "./PersonalDefaultPage";
import {useSelector, useStore} from "react-redux";
import {store} from "../../store/Store";

const LevelPreview = (levelData) => {
    return (
        <div>

        </div>
    )
}

export const LessonsProgram = () => {
    const lessonsProgram = useSelector(state=>state.lessonsProgram);

    return (
        <PersonalDefaultPage>

        </PersonalDefaultPage>
    )
}