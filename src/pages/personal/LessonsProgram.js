import PersonalDefaultPage from "./PersonalDefaultPage";
import {useSelector} from "react-redux";
import {LevelPreview} from "../../components/blocksl/LevelPreview";


export const LessonsProgram = () => {
    const lessonsProgram = useSelector(state => state.lessonsProgram);

    return (
        <PersonalDefaultPage>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 50,
                gap: 30
            }}>
                {lessonsProgram.map(el =>
                    <LevelPreview levelData={el}/>
                )}
            </div>
        </PersonalDefaultPage>
    )
}