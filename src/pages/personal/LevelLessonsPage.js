import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PersonalDefaultPage from "./PersonalDefaultPage";
import {OnestBoldDefault, OnestNormalDefault} from "../../components/styled/TextComponents";
import {BsDownload, BsEye, BsPlus} from "react-icons/bs";
import {color_grey_light, color_red_default, color_white} from "../../constants/colors";
import {useEffect, useState} from "react";
import axios from "axios";
import Config from "../../Config";
import {setAllLessons} from "../../store/LessonsProgramSlice";

const SearchBar = ({searchValue, setSearchValue}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <input style={{
                height: 45,
                width: "100%",
                backgroundColor: color_white,
                borderRadius: 10,
                border: `1px solid ${color_grey_light}`
            }} placeholder={"   Введите запрос..."} value={searchValue} onChange={(event) => setSearchValue(event.target.value)}>
            </input>
        </div>
    )
}
const LessonGridBlock = ({image, title, openPath}) => {
    return (
        <div style={{
            width: 228,
            height: 226,
            border: 20,
            display: "flex",
            padding: 20,
            flexDirection: "column",
            gap: 20,
            backgroundColor: color_white,
            justifyContent: "space-between",
            alignContent: "center",
            borderRadius: 20
        }}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img alt={image} style={{
                    width: 218,
                    height: 141,
                    border: 20,
                    borderRadius: 20
                }} src={image}/>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <OnestBoldDefault>{title}</OnestBoldDefault>
                <a href={openPath} target="_blank" rel="noopener noreferrer"><BsEye style={{color: color_red_default, fontSize: 25}}/></a>
            </div>
        </div>
    )
}
export const LevelLessonsPage = () => {
    const {levelId} = useParams();
    const lessonsProgram = useSelector(state => state.lessonsProgram);
    const [searchValue, setSearchValue] = useState("")
    useEffect(()=>{
        // axios.get(Config.BACKEND_ADDR + `/lessons`).
    })


    return (
        <PersonalDefaultPage>
            <div style={{display: "flex", flexDirection: "column", gap: 40}}>
                <SearchBar searchValue={searchValue} setSearchValue={(newValue) => setSearchValue(newValue)}/>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 20
                }}>
                    {lessonsProgram.find(el=>el.id === parseInt(levelId))
                        .lessons
                        .toSorted((a, b) => a.index - b.index)
                        .filter(el=> {
                            if(searchValue === "" || searchValue === null) return true
                            return el.name.toLowerCase().includes(searchValue.toLowerCase())
                        })
                        .map(el=>(
                            <LessonGridBlock image={Config.CLOUD_ADDR + "/speakid/" + el.image} title={el.name + "__"+el.index} openPath={Config.CLOUD_ADDR + "/speakid/" + el.file}/>
                        ))}
                </div>
            </div>
        </PersonalDefaultPage>
    )
}