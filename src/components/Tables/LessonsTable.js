import {BlockTitle} from "../text/BlockTitle";
import NoContentPlaceholder from "../containers/NoContentPlaceholder";
import {color_grey_light, color_white} from "../../constants/colors";
import {OnestNormalMed, OnestNormalSmall} from "../styled/TextComponents";
import {ButtonOutlined} from "../controls/Button/ButtonOutlined";
import {BsArrowRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {weekDayToFullWeekName} from "../../pages/personal/JournalPage";

export class LessonInfo {
    constructor(student_id, studentName, time, payedLessons) {
        this.student_id = student_id
        this.studentName = studentName
        this.time = time
        this.payedLessons = payedLessons
    }
}

const FlexTableLessonRow = ({studentName, lessonTime, payedLessonsCount, studentId}) => {
    const navigate = useNavigate();

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

    const getLessonsCountColorScheme = () => {
        if (payedLessonsCount > 3) return {backgroundColor: "#C8F4C7", color: "#15B01B"}
        else if (payedLessonsCount > 1) return {backgroundColor: "#FFE4C4", color: "#FF991F"}
        else if (payedLessonsCount <= 1) return {backgroundColor: "#FFCECE", color: "#CF2222"}
        else return {backgroundColor: "#FFCECE", color: "#CF2222"}
    }

    const lessonsColorScheme = getLessonsCountColorScheme();

    const getLessonsCountEnding = () => {
        if ([2, 3, 4].includes(payedLessonsCount % 10)) return "занятия"
        else if ([0, 5, 6, 7, 8, 9].includes(payedLessonsCount % 10)) return "занятий"
        else return "занятие"
    }

    const lessonsCountEnding = getLessonsCountEnding();


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: 15,
            borderBottom: `1px solid ${color_grey_light}`
        }}>
            <div style={{
                flex: 1,
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
                    {studentName.split(" ").map((el, key) => {
                        return <OnestNormalMed key={key}>{el}</OnestNormalMed>
                    })}
                </div>
            </div>
            <div style={{flex: 1}}>{lessonTime}</div>
            <div style={{flex: 1}}>
                <div style={{
                    width: 110,
                    height: 30,
                    borderRadius: 100,
                    backgroundColor: lessonsColorScheme.backgroundColor,
                    color: lessonsColorScheme.color,
                    textAlign: "center",
                    lineHeight: 1.5
                }}>{payedLessonsCount} {lessonsCountEnding}</div>
            </div>
            <div style={{flex: 1}} onClick={()=>navigate(`/service/students/${studentId}`)}>
                <ButtonOutlined width={150} height={30} active={true} borderColor={color_grey_light}
                                color={color_grey_light} fontSize={14}>Открыть ученика <BsArrowRight/></ButtonOutlined>
            </div>
        </div>
    )
}
const FlexTableHeader = ({columnNames}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            {columnNames.map((el, key) => {
                return <div key={key} style={{flex: 1}}>{el}</div>
            })}
        </div>
    )
}
const LessonsTable = ({lessonsList}) => {


    return (
        <>
            <BlockTitle title={"Ближайшие уроки"}/>
            {lessonsList.length === 0 ?
                <NoContentPlaceholder noDataText={"Здесь будут отображаться ваши ближайшие уроки"}/> :
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 28
                }}>
                    <FlexTableHeader columnNames={["Имя", "Время", "Оплата", "Действия"]}/>
                    {lessonsList.map((el, key) => {
                        return <FlexTableLessonRow key={key} studentName={el.studentName} lessonTime={weekDayToFullWeekName(el.weekday).short + " " + el.time}
                                                   payedLessonsCount={el.payedLessons} studentId={el.student_id}/>
                    })}
                </div>
            }
        </>
    )
}
export const UpcomingLessonsBlock = ({lessonsList}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: color_white,
            padding: 25,
            borderRadius: 20,
            height: 440,
            overflow: "scroll",

        }}>
            <BlockTitle>Ближайшие уроки</BlockTitle>
            <LessonsTable lessonsList={lessonsList}/>
        </div>
    )
}