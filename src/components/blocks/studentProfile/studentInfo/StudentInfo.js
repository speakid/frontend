import { BsPencil } from "react-icons/bs"
import { styles } from "./styles"
import { OnestBoldBig, OnestBoldDefault, OnestNormal, OnestSemiBoldBig } from "../../../styled/TextComponents"
import { color_grey_light } from "../../../../constants/colors"
import { StudentInfoEditSelector } from "../studentInfoEditSelector/StudentInfoEditSelector"
import { StudentProfileInfoEdit } from "../studentProfileInfo/StudentProfileInfoEdit"
import { StudentSchedule } from "../../StudentSchedule"
import { StudentScheduleEdit } from "../studentSchedule/StudentSchedule"
import { useState } from "react"
import {useDispatch, useSelector} from "react-redux";

export const StudentImage = ({image}) => {
    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();

    return (
        <div style={{...styles.studentImageContainer}}>
            <img
                style={{...styles.studentImage}} 
                src={student.image}
                alt={"studentImage"}
            />
            <div style={{...styles.studentImageChangeButton}}>
                <BsPencil/>
            </div>
        </div>
    )
}

export const StudentName = () => {
    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();
    return (
        <div style={{...styles.studentNameContainer}}>
            <OnestNormal style={{color: color_grey_light}}>Ученик</OnestNormal>
            <OnestSemiBoldBig>{student.name}</OnestSemiBoldBig>
        </div>
    )
}


export const StudentInfo = () => {
    const [currentState, setCurrentState] = useState("PROFILE");

    return (
        <div style={{...styles.studentInfoContainer}}>
            <div style={{...styles.studentImageNameContainer}}>
                <StudentImage/>
                <StudentName/>
            </div>
            <StudentInfoEditSelector currentState={currentState} stateChangeCallback={(newState)=>setCurrentState(newState)}/> 
            {currentState==="PROFILE"? 
                <StudentProfileInfoEdit />
                :
                <StudentScheduleEdit/>
            }
        </div>
    )
}