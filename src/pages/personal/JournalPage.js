import PersonalDefaultPage from "./PersonalDefaultPage";
import {PageTitle} from "../../components/text/PageTitle";
import {
    BsArrowsVertical,
    BsFillTrash3Fill,
    BsPlusLg,
    BsSortDown,
    BsSortUp,
    BsTrash,
    BsTrash2,
    BsTrash3
} from "react-icons/bs";
import {
    color_grey_dark, color_grey_light, color_grey_ultra_light,
    color_red_default,
    color_transparent,
    color_white
} from "../../constants/colors";
import {
    OnestBoldSmall,
    OnestNormalDefault,
    OnestNormalMed,
    OnestNormalSmall, OnestSemiBoldBig, OnestSemiBoldSmall
} from "../../components/styled/TextComponents";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Config from "../../Config";
import {getMyId} from "./PersonalPage";
import {updateAllStudents} from "../../store/StudentsJournalSlice";
import {InfinitySpin} from "react-loader-spinner";
import {LoadingContainer} from "../../components/containers/LoadingContainer";

const styles = {
    journalHeaderContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        gap: 10
    },
    journalHeaderButton: {
        height: 45,
        width: 45,
        borderRadius: "50%",
        backgroundColor: color_white,
        boxSizing: "border-box",
        color: color_red_default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 25,
        flexShrink: 0
    },
    journalSearch: {
        width: 295,
        height: 45,
        backgroundColor: color_white,
        borderRadius: 10,
        borderColor: color_transparent,
        paddingLeft: 15,
        color: color_grey_dark,
    }
}

const JournalSearch = ({searchWord, setSearchWord}) => {
    return (
        <div>
            <OnestNormalDefault>
                <input
                    type={"text"}
                    style={{...styles.journalSearch}}
                    placeholder={"Найти ученика"}
                    value={searchWord}
                    onChange={(e)=>setSearchWord(e.target.value)}
                />
            </OnestNormalDefault>
        </div>
    )
}
const JournalHeader = ({searchWord, setSearchWord, sorting, setNextSorting}) => {
    const navigate = useNavigate();
    const sortingIcon = () => {
        switch (sorting){
            case "ASC": return <BsSortUp/>
            case "DESC": return <BsSortDown/>
            default: return <BsArrowsVertical/>
        }
    }

    return (
        <div style={{...styles.journalHeaderContainer}}>
            <PageTitle title={"Журнал учеников"}/>
            <div style={{flexGrow: 1}}/>
            <JournalSearch searchWord={searchWord} setSearchWord={setSearchWord}/>
            <div
                style={{...styles.journalHeaderButton, cursor: "pointer"}}
                onClick={()=>setNextSorting()}
            >{sortingIcon()}</div>
            <div style={{...styles.journalHeaderButton}}><BsPlusLg onClick={()=>navigate("/service/students/new")}/></div>
        </div>
    )
}

const JournalTableHeader = () => {
    const columns = [
        {
            name: "Имя",
            flex: 1.5,
        },
        {
            name: "Расписание занятий",
            flex: 1.5,
        },
        {
            name:  "Оплаченные занятия",
            flex: 1.5
        },
        {
            name: "Уровень языка",
            flex: 1.5
        },
        {
            name: "Управление",
            flex: 1
        }
    ]
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            {columns.map(el =>
                <div style={{
                    color: color_grey_dark,
                    flex: el.flex
                }}><OnestSemiBoldSmall>{el.name}</OnestSemiBoldSmall></div>
            )}
        </div>
    )
}

const JorunalStudentPreviewData = ({studentName}) => {
    const studentColorList = [
        {
            "backgroundColor": "#9FBFFF",
            "color": "#4482FF",
        },
        {
            "backgroundColor": "#FFE791",
            "color": "#CA9E00",
        },
        {
            "backgroundColor": "#9AECC5",
            "color": "#00BE63",
        }
    ]


    const studentColorScheme = studentColorList[Math.floor(Math.random() * studentColorList.length)];

    return (
        <div style={{
            flex: 1.5,
            display: "flex",
            flexDirection: "row",
            gap: 15
        }}>
            <div style={{
                width: 50,
                height: 50,
                lineHeight: 4,
                borderRadius: "50%",
                color: studentColorScheme.color,
                textAlign: "center",
                background: studentColorScheme.backgroundColor
            }}>
                <OnestNormalSmall>{studentName.split(" ").map(el => Array.from(el)[0]).join("")}</OnestNormalSmall>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center"
            }}>
                {studentName.split(" ").map(el => {
                    return <OnestNormalMed>{el}</OnestNormalMed>
                })}
            </div>
        </div>
    )
}

const JournalStudentLessons = ({studentLessons}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            flex: 1.5
        }}>
            {studentLessons.map(el=>
                <div>
                    <OnestBoldSmall>{el.weekDayShort}</OnestBoldSmall>
                    <OnestNormalSmall>{el.time}</OnestNormalSmall>
                </div>
            )}
        </div>
    )
}

const JournalTableRow = ({studentData, onClick, deleteStudentHandler}) => {
    const [isHover, setIsHover] = useState(false);
    const [isTrashHover, setIsTrashHover] = useState(false);


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "min-content",
            minHeight: 90,
            paddingTop: 15,
            borderBottom: `1px solid ${color_grey_light}`,
            cursor: "pointer",
            backgroundColor: isHover? color_grey_ultra_light : color_transparent
            // justifyContent: "space-around"
        }} onClick={()=>onClick()} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            <JorunalStudentPreviewData studentName={studentData.name}/>
            <JournalStudentLessons studentLessons={studentData.lessonsSchedule}/>
            <div style={{flex: 1.5}}><OnestNormalDefault>{parseInt(studentData.studentId !== -1 && studentData.lessonPrice !== 0? studentData.balance / studentData.lessonPrice : 0)} занятий</OnestNormalDefault></div>
            <div style={{flex: 1.5}}><OnestNormalDefault>{studentData.englishLevel}</OnestNormalDefault></div>
            <div style={{flex: 1}}>
                <div style={{
                    ...styles.journalHeaderButton,
                    fontSize: 16,
                    backgroundColor: color_grey_ultra_light,
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                    border: isTrashHover? `1px solid ${color_grey_light}` : null
                }} onMouseEnter={()=>setIsTrashHover(true)} onMouseLeave={()=>setIsTrashHover(false)}
                onClick={(e)=>{
                    e.stopPropagation()
                    deleteStudentHandler()
                }}
                ><BsFillTrash3Fill/></div>
            </div>
        </div>
    )
}

export function weekDayToFullWeekName(weekDay){
    let weekDayToNameMap = {
        1: {
            full: "Понедельник",
            short: "ПН"
        },
        2: {
            full: "Вторник",
            short: "ВТ"
        },
        3: {
            full: "Среда",
            short: "СР"
        },
        4: {
            full: "Четверг",
            short: "ЧТ"
        },
        5: {
            full: "Пятница",
            short: "ПТ"
        },
        6: {
            full: "Суббота",
            short: "СБ"
        },
        7: {
            full: "Воскресенье",
            short: "ВС"
        },
    }
    if(Object.keys(weekDayToNameMap).includes(weekDay.toString())) return weekDayToNameMap[weekDay]
    return {full: "UNKNOWN", short: "UN"}
}

export function addZeroToTime(timeVal){
    return parseInt(timeVal) < 10 ? `0${timeVal}` : `${timeVal}`
}

async function getStudents(){
    let lessonsData = (await axios.get(Config.BACKEND_ADDR + `/lessons`)).data
    console.log("lessonsData", lessonsData)
    let studentsData = (await axios.get(Config.BACKEND_ADDR + `/students`)).data.map(studentData=>{
        return {
            studentId: studentData.id,
            lessonPrice: studentData.lesson_cost,
            balance: studentData.balance,
            age: studentData.age,
            image: studentData.image,
            payedLessons: parseInt(studentData.balance / studentData.lesson_cost),
            name: studentData.name,
            englishLevel: studentData.english_skill,
            additionalInfo: studentData.info,
            lessonsSchedule: lessonsData.filter(el=>el.student_id === studentData.id && el.not_scheduled !== true).map(el=>{
                let startTime = new Date(el.start_time)
                let endTime = new Date(el.end_time)
                return{
                    weekDay: weekDayToFullWeekName(el.weekday).full,
                    weekDayShort: weekDayToFullWeekName(el.weekday).short,
                    time: `${addZeroToTime(startTime.getHours())}:${addZeroToTime(startTime.getMinutes())} - ${addZeroToTime(endTime.getHours())}:${addZeroToTime(endTime.getMinutes())}`
                }
            }).filter((value, index, self) =>
              index === self.findIndex((t) => (
                t.weekday === value.weekday && t.time === value.time
              ))
            ),
            lessonsProgram: []
        }
    })
    console.log("studentdsData", studentsData)
    return studentsData
}

const JournalTable = ({searchWord, sorting}) => {
    const navigate = useNavigate();
    const studentsJournal = useSelector(state => state.studentsJournal);
    const dispatch = useDispatch();

    const sortedJournal = () => {
        switch (sorting){
            case "ASC": return [...studentsJournal].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            case "DESC": return [...studentsJournal].sort((a,b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
            default: return studentsJournal
        }
    }

    function deleteStudentHandler(studentData){
        axios.delete(Config.BACKEND_ADDR + `/students/${studentData.studentId}`).then(()=>{
            dispatch(updateAllStudents(studentsJournal.filter(el=>el.studentId !== studentData.studentId)))
            alert("Ученик удален")
        })
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: color_white,
            borderRadius: 20,
            padding: 20,
            marginTop: 20,
            justifyContent: "space-around"
        }}>
            <JournalTableHeader searchWord={searchWord}/>
            <div style={{height: 24}}/>
            {sortedJournal().filter(el=>el.name.toLowerCase().includes(searchWord.toLowerCase())).map(el=>
                <JournalTableRow
                    studentData={el}
                    onClick={()=>{navigate(`/service/students/${el.studentId}`)}}
                    deleteStudentHandler={()=>deleteStudentHandler(el)}
                />
            )}
        </div>
    )
}

const PersonalPage = () => {
    const [searchWord, setSearchWord] = useState("");
    const [journalSorting, setJournalSorting] = useState(null);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getStudents().then(res=>{
            dispatch(updateAllStudents(res))
            setIsLoading(false)
        })
    }, [])

    function setNextSorting(){
        let sortingMethods = [null, "ASC", "DESC"];
        let current = sortingMethods.indexOf(journalSorting)
        let nextIndex = current + 1 <= sortingMethods.length - 1? current + 1 : current + 1 - sortingMethods.length
        setJournalSorting(sortingMethods[nextIndex])
    }

    return (
        <>
            <PersonalDefaultPage>
                <LoadingContainer isLoading={isLoading}>
                    <div style={{padding: 20, width: "100%"}}>
                        <JournalHeader
                            searchWord={searchWord}
                            setSearchWord={(word)=>setSearchWord(word)}
                            sorting={journalSorting}
                            setNextSorting={()=>setNextSorting()}
                        />
                        <JournalTable searchWord={searchWord} sorting={journalSorting}/>
                    </div>
                </LoadingContainer>
            </PersonalDefaultPage>
        </>
    )
}


export default PersonalPage