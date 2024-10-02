import { BsPencil } from "react-icons/bs"
import { styles } from "./styles"
import { OnestBoldBig, OnestBoldDefault, OnestNormal, OnestSemiBoldBig } from "../../../styled/TextComponents"
import { color_grey_light } from "../../../../constants/colors"
import { StudentInfoEditSelector } from "../studentInfoEditSelector/StudentInfoEditSelector"
import { StudentProfileInfoEdit } from "../studentProfileInfo/StudentProfileInfoEdit"
import { StudentSchedule } from "../../StudentSchedule"
import { StudentScheduleEdit } from "../studentSchedule/StudentSchedule"
import React, {useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Config from "../../../../Config";
import {updateUser} from "../../../../store/UserSlice";
import config from "../../../../Config";
import {updateStudent} from "../../../../store/StudentSlice";

export const StudentImage = ({image}) => {
    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();
    const inputFile = useRef(null);

    return (
        <div style={{...styles.studentImageContainer}}>
            <img
                style={{...styles.studentImage}} 
                src={student.image}
                alt={"studentImage"}
            />
            <div style={{...styles.studentImageChangeButton}} onClick={()=>{inputFile.current.click();}}>
                <input
                    accept="image/png, image/gif, image/jpeg" type='file' id='file' ref={inputFile} style={{display: 'none'}}
                    onChange={(e)=>{
                        let fileObj = e.target.files[0]
                        console.log("fileObj", fileObj)
                        const formData = new FormData();
                        formData.append("file", fileObj, fileObj.name);

                        const headers = {'Content-Type': 'multipart/form-data'}

                        axios.post(Config.BACKEND_ADDR + "/cloud/put_file", formData, {headers: headers}).then(res=>{
                            axios.patch(config.BACKEND_ADDR + "/students", {
                                student_id: student.studentId,
                                image: res.data.file_id
                            }).then(()=>{
                                dispatch(updateStudent({"image": Config.CLOUD_ADDR + "/" + res.data.file_id}))
                            }).catch((err)=>{
                                console.log(err)
                                alert("Ошибка обновления данных ученика")
                            })
                        }).catch(()=> {
                                    alert("Ошибка обновления данных")
                        })
                    }}
                />
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