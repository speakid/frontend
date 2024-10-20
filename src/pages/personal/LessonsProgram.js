import PersonalDefaultPage from "./PersonalDefaultPage";
import {useDispatch, useSelector} from "react-redux";
import {LevelPreview} from "../../components/blocksl/LevelPreview";
import {LevelDescriptionModal} from "../../components/LevelDescriptionModal";
import {useEffect, useState} from "react";
import axios from "axios";
import Config from "../../Config";
import {setAllLessons} from "../../store/LessonsProgramSlice";


export const LessonsProgram = () => {
    const lessonsProgram = useSelector(state => state.lessonsProgram);
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedSummary, setSelectedSummary] = useState("");
    const [showLevelDescription, setShowLevelDescription] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get(Config.BACKEND_ADDR + "/levels").then(res=>{
            let levelsData = res.data
            levelsData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            console.log("Levels: ", levelsData)
            dispatch(setAllLessons(levelsData.map(el=>{
                return {
                    id: el.id,
                    level: el.name,
                    age: el.age_description,
                    image: Config.CLOUD_ADDR + "/" + el.image_path,
                    summary: el.description,
                    lessons: el.materials.map(material=>{
                        return {
                            id: material.id,
                            image: material.image_path,
                            file: material.index_html_path,
                            level: material.level_id,
                            name: material.name,
                            completed: true
                        }
                    })
                }
            })))
        })
    }, [])

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