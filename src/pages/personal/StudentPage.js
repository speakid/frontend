// import { useParams } from "react-router-dom"
import PersonalDefaultPage from "./PersonalDefaultPage"
import dollar from "../../images/dollar.svg";
import pig from "../../images/pig.svg";
import agreeGreen from "../../images/agreeGreen.svg";
import { IconInfoBigBlock } from "../../components/blocks/IconInfoBigBlock";
import {color_grey_dark, color_grey_light, color_grey_ultra_light, color_white} from "../../constants/colors";
import { StudentSchedule } from "../../components/blocks/StudentSchedule";
import { StudentLessonsProgram } from "../../components/blocks/StudentLessonsProgram";
import { StudentInfo } from "../../components/blocks/studentProfile/studentInfo/StudentInfo";
import {
    useDispatch,
    // useDispatch,
    useSelector
} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Config from "../../Config";
import {updateStudent} from "../../store/StudentSlice";
import {LoadingContainer} from "../../components/containers/LoadingContainer";
import {ModalDefault} from "../../components/containers/ModalDefault";
import modal from "../../components/blocks/Modal";
import {BsX} from "react-icons/bs";
import {OnestNormalDefault, OnestNormalSmall} from "../../components/styled/TextComponents";
import {ButtonDefault} from "../../components/controls/Button/ButtonDefault";
import config from "../../Config";
import {addZeroToTime, weekDayToFullWeekName} from "./JournalPage";


export const StudentPage = () => {
    const {studentId} = useParams();
    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [changeData, setChangeData] = useState({});
    const user = useSelector(state=>state.user);


    useEffect(()=>{
        if(studentId === "new"){
            dispatch(updateStudent({
                "studentId": -1,
                "lessonPrice": 0,
                "balance": 0,
                "age": 0,
                "image": process.env.PUBLIC_URL + "/no_student_icon.png",
                "payedLessons": 0,
                "name": "",
                "englishLevel": "Beginner",
                "additionalInfo": "",
                "lessonsSchedule": [
                ],
                "lessonsProgram": [
                ]
            }))
            setIsLoading(false)
        } else{
            let lessonsData = axios.get(Config.BACKEND_ADDR + `/lessons`).then(lessonsRes=>{
                axios.get(Config.BACKEND_ADDR + `/students/${studentId}`).then((res)=>{
            let downloadedData = res.data
            dispatch(updateStudent({
                    "studentId": downloadedData.id,
                    "lessonPrice": downloadedData.lesson_cost,
                    "balance": downloadedData.balance,
                    "age": downloadedData.age,
                    "image": downloadedData.image? Config.CLOUD_ADDR+ "/" +downloadedData.image : process.env.PUBLIC_URL + "/no_student_icon.png",
                    "payedLessons": parseInt(downloadedData.balance / downloadedData.lesson_cost),
                    "name": downloadedData.name,
                    "englishLevel": downloadedData.english_skill,
                    "additionalInfo": downloadedData.comment,
                    "lessonsSchedule": lessonsRes.data.filter(el=>el.student_id === downloadedData.id && el.not_scheduled !== true).map(el=>{
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
                    "lessonsProgram": [
                        {
                            id: 0,
                            image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                            name: "1 УРОК: ABC",
                            level: "0",
                            completed: true
                        },
                        {
                            id: 1,
                            image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                            name: "2 УРОК: DEF",
                            level: "0",
                            completed: false
                        },
                        {
                            id: 2,
                            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                            name: "3 УРОК: GHI",
                            level: "0",
                            completed: false
                        },
                    ]
                }))
                setIsLoading(false)
            })

        })
        }

    }, [])
    
    return (
        <PersonalDefaultPage>
            <LoadingContainer isLoading={isLoading}>
                {/*Update balance or lesson price*/}
                <ModalDefault onRequestClose={()=>setModalOpen(false)} isOpen={modalOpen}>
                    <div style={{
                        width: 265,
                        height: 245,
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 20,
                        justifyContent: "space-evenly"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                            width: 265
                        }} onClick={()=>setModalOpen(false)}>
                            <BsX style={{
                                fontSize: 30,
                                color: color_grey_dark
                            }}/>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            // justifyContent: "space-between",
                            gap: 10
                        }}>
                            <div style={{
                                width: 30,
                                height: 30,
                                borderRadius: 10,
                                backgroundColor: changeData.changeIconColor,
                                display: "flex",
                                alignItems: "center",
                                alignContent: "center",
                                justifyContent: "center",
                            }}>
                                <img src={changeData.changeIcon}/>
                            </div>
                            <OnestNormalDefault>{changeData.changeText}</OnestNormalDefault>
                        </div>
                        <div>
                            <div style={{
                                margin: 2,
                                paddingBottom: 5,
                                width: 305
                            }}><OnestNormalSmall>Введите стоимость</OnestNormalSmall></div>
                            <input style={{
                                width: 265-15,
                                height: 50,
                                borderRadius: 10,
                                paddingLeft: 15,
                                color: color_grey_dark,
                                backgroundColor: color_grey_ultra_light,
                                border: "0px solid grey"
                            }} value={"$"+changeData.changeValue || ""} onChange={(e)=>{
                                setChangeData(Object.assign({...changeData}, {changeValue: e.target.value.replaceAll("$", "").replaceAll("[^0-9]", "")}))
                            }}/>
                        </div>

                        <div
                            onClick={()=>{
                                if(student.studentId === -1){
                                    alert("Сначала заполните профиль и сохраните его!")
                                    return
                                }
                                    let data = {
                                        student_id: student.studentId,
                                        teacher_id: user.id
                                    }
                                    data[changeData.changeType] = changeData.changeValue
                                    axios.patch(config.BACKEND_ADDR + "/students", data).catch((err)=>{
                                        console.log(err)
                                        alert("Ошибка обновления данных ученика")
                                    }).then(()=> {
                                        data = {}
                                        // TODO: убрать реплейс, разные названия на бэкенде и на фронте
                                        data[changeData.changeType.replace("lesson_cost", "lessonPrice")] = changeData.changeValue
                                        dispatch(updateStudent(data))
                                        setModalOpen(false)
                                    })
                            }}
                        >
                            <ButtonDefault
                                width={265}
                                height={40}
                                active={true}
                            >Сохранить</ButtonDefault>
                        </div>
                    </div>
                </ModalDefault>
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
                            <IconInfoBigBlock
                                icon={dollar}
                                title={"Стоимость занятия"}
                                addCharToValue={"$"}
                                text={student.lessonPrice}
                                backgroundColor={"#EAF1FF"}
                                iconBackgroundColor={"#8DB3FF"}
                                onClick={()=> {
                                    setChangeData(Object.assign(changeData, {
                                        changeIcon: dollar,
                                        changeIconColor: "#8DB3FF",
                                        changeText: "Стоимость занятия",
                                        changeValue: student.lessonPrice,
                                        changeType: "lesson_cost"
                                    }))
                                    if(student.studentId === -1){
                                        alert("Сначала заполните профиль и сохраните его!")
                                        return
                                    }
                                    setModalOpen(true)
                                }}
                            />
                            <IconInfoBigBlock
                                icon={pig}
                                title={"Баланс ученика"}
                                addCharToValue={"$"}
                                text={student.balance}
                                backgroundColor={"#FFE3F0"}
                                iconBackgroundColor={"#FF73B3"}
                                onClick={()=> {
                                    if(student.studentId === -1){
                                        alert("Сначала заполните профиль и сохраните его!")
                                        return
                                    }
                                    setChangeData(Object.assign(changeData, {
                                        changeIcon: pig,
                                        changeIconColor: "#FF73B3",
                                        changeText: "Баланс ученика",
                                        changeValue: student.balance,
                                        changeType: "balance"
                                    }))
                                    setModalOpen(true)
                                }}
                            />
                            <IconInfoBigBlock icon={agreeGreen} title={"Оплачено занятий"} text={parseInt(student.studentId !== -1 && student.lessonPrice !== 0? student.balance / student.lessonPrice : 0)} backgroundColor={"#DBFFEE"} iconBackgroundColor={"#9AF0C6"}/>
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
            </LoadingContainer>
        </PersonalDefaultPage>
    )
}