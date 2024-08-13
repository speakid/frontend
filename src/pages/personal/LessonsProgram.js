import PersonalDefaultPage from "./PersonalDefaultPage";
import {useSelector} from "react-redux";
import {LevelPreview} from "../../components/blocksl/LevelPreview";
import {LevelDescriptionModal} from "../../components/LevelDescriptionModal";
import {useState} from "react";


export const LessonsProgram = () => {
    const lessonsProgram = useSelector(state => state.lessonsProgram);
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedSummary, setSelectedSummary] = useState("");
    const [showLevelDescription, setShowLevelDescription] = useState(false);

    function prepareAndOpenLevelDescription(level, summary){
        setSelectedSummary(summary)
        setSelectedLevel(level)
        setShowLevelDescription(true)
    }

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
                    <LevelPreview levelData={el} openLevelDescription={(level, summary)=>prepareAndOpenLevelDescription(level, summary)}/>
                )}
            </div>
            <LevelDescriptionModal summary={selectedSummary} level={selectedLevel} isOpen={showLevelDescription} closeModalCallback={()=>setShowLevelDescription(false)}/>
        </PersonalDefaultPage>
    )
}