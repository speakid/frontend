import { useParams } from "react-router-dom"
import PersonalDefaultPage from "./PersonalDefaultPage"
import dollar from "../../images/dollar.svg";
import pig from "../../images/pig.svg";
import agreeGreen from "../../images/agreeGreen.svg";
import { IconInfoBigBlock } from "../../components/blocks/IconInfoBigBlock";
import { color_white } from "../../constants/colors";
import { StudentSchedule } from "../../components/blocks/StudentSchedule";
import { StudentLessonsProgram } from "../../components/blocks/StudentLessonsProgram";
import { StudentInfo } from "../../components/blocks/studentProfile/studentInfo/StudentInfo";
import {useReducer} from "react";
import {tasksReducer} from "../../components/blocks/weeklyTasks/Reducers";
import {studentReducer} from "../../store/Student";
import {useDispatch, useSelector} from "react-redux";


export const StudentPage = () => {
    const {studentId} = useParams();
    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();
    
    return (
        <PersonalDefaultPage>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: 20
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 600,
                    gap: 20
                }}>
                    <div style={{
                        width: 600,
                        boxSizing: "border-box",
                        // height: 225,
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: 20,
                        backgroundColor: color_white,
                        borderRadius: 20,
                        justifyContent: "space-around",    
                        alignItems: "center",
                    }}>
                        <IconInfoBigBlock icon={dollar} title={"Стоимость занятия"} text={student.lessonPrice} backgroundColor={"#EAF1FF"} iconBackgroundColor={"#8DB3FF"}/>
                        <IconInfoBigBlock icon={pig} title={"Баланс ученика"} text={student.balance} backgroundColor={"#FFE3F0"} iconBackgroundColor={"#FF73B3"}/>
                        <IconInfoBigBlock icon={agreeGreen} title={"Оплачено занятий"} text={student.balance/student.lessonPrice} backgroundColor={"#DBFFEE"} iconBackgroundColor={"#9AF0C6"}/>
                    </div>
                    <StudentSchedule />
                    <StudentLessonsProgram/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 600,
                    gap: 20
                }}>
                    <StudentInfo/>
                </div>
            </div>
        </PersonalDefaultPage>
    )
}