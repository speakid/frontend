import PersonalDefaultPage from "./PersonalDefaultPage";
import {PageTitle} from "../../components/text/PageTitle";
import {BsArrowsVertical, BsFillTrash3Fill, BsPlusLg, BsTrash, BsTrash2, BsTrash3} from "react-icons/bs";
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
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

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

const JournalSearch = () => {


    return (
        <div>
            <OnestNormalDefault><input type={"text"} style={{...styles.journalSearch}} placeholder={"Найти ученика"}/></OnestNormalDefault>
        </div>
    )
}
const JournalHeader = () => {
    return (
        <div style={{...styles.journalHeaderContainer}}>
            <PageTitle title={"Журнал учеников"}/>
            <div style={{flexGrow: 1}}/>
            <JournalSearch/>
            <div style={{...styles.journalHeaderButton}}><BsArrowsVertical/></div>
            <div style={{...styles.journalHeaderButton}}><BsPlusLg/></div>
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

const JournalTableRow = ({studentData, onClick}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: 90,
            paddingTop: 15,
            borderBottom: `1px solid ${color_grey_light}`,
            cursor: "pointer",
            backgroundColor: isHover? color_grey_ultra_light : color_transparent
            // justifyContent: "space-around"
        }} onClick={()=>onClick()} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            <JorunalStudentPreviewData studentName={studentData.name}/>
            <JournalStudentLessons studentLessons={studentData.lessonsSchedule}/>
            <div style={{flex: 1.5}}><OnestNormalDefault>{studentData.balance / studentData.lessonPrice} занятий</OnestNormalDefault></div>
            <div style={{flex: 1.5}}><OnestNormalDefault>{studentData.englishLevel}</OnestNormalDefault></div>
            <div style={{flex: 1}}>
                <div style={{...styles.journalHeaderButton, fontSize: 16, backgroundColor: color_grey_ultra_light, width: 32, height: 32}}><BsFillTrash3Fill/></div>
            </div>
        </div>
    )
}

const JournalTable = () => {
    const navigate = useNavigate();
    const studentsJournal = useSelector(state => state.studentsJournal);
    // const dispatch = useDispatch();

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
            <JournalTableHeader/>
            <div style={{height: 24}}/>
            {studentsJournal.map(el=>
                <JournalTableRow studentData={el} onClick={()=>{navigate(`/service/students/${el.studentId}`)}}/>
            )}
        </div>
    )
}

const PersonalPage = () => {
    return (
        <>
            <PersonalDefaultPage>
                <div style={{padding: 20, width: "100%"}}>
                    <JournalHeader/>
                    <JournalTable/>
                </div>
            </PersonalDefaultPage>
        </>
    )
}


export default PersonalPage