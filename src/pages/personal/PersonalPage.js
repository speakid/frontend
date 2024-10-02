import PersonalDefaultPage from "./PersonalDefaultPage";
import CalendarImage from "../../images/personalPage/calendar.svg";
import CashImage from "../../images/personalPage/money.svg";
import ClockImage from "../../images/personalPage/clock.svg";
import {Calendar} from "../../components/Calendar";
import {WeeklyTask, WeeklyTasksList} from "../../components/blocks/weeklyTasks/weeklyTasksList/WeeklyTasksList";
import {LessonInfo, UpcomingLessonsBlock} from "../../components/Tables/LessonsTable";
import {ImageBlock} from "../../components/blocks/ImageBlock";
import {IconInfoBlock} from "../../components/blocks/IconInfoBlock";
import React, {useEffect, useState} from "react";
import {ProfileUpdatingModal} from "../../components/blocks/profileUpdating/profileUpdatingModal/ProfileUpdatingModal";
import {useDispatch, useSelector} from "react-redux";
import {get_user} from "../../components/blocks/profileUpdating/dataUpdating/ProfileDataUpdatingBlock";
import {InfinitySpin} from "react-loader-spinner";
import {setUser} from "../../store/UserSlice";
import axios from "axios";
import Config from "../../Config";
import Cookies from "js-cookie";
import {LogOut} from "../../components/redirects/LogOut";
import {LoadingContainer} from "../../components/containers/LoadingContainer";


export async function getMyId(){
    let id = Cookies.get('user_id');
    if (id === null || id === undefined){
        LogOut()
    }
    return id
}
export async function getWeeklyTasksList(){
    let response = await axios.get(Config.BACKEND_ADDR + `/tasks/user_tasks/${await getMyId()}`)
    let userTasksData = response.data
    console.log("userTasksData", userTasksData);
    return userTasksData.map(el=>new WeeklyTask(el.id, el.task_text),)
}


const PersonalPage = () => {
    const [profileUpdatingState, setProfileUpdatingState] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const userData = useSelector(state=>state.user);


    useEffect(()=>{
        get_user().then(data=>{
                setIsLoading(false)
                console.log("userData: ", data)
                dispatch(setUser(data))
            });
    }, [])


    return (
        <>
            <PersonalDefaultPage>
                <LoadingContainer isLoading={isLoading}>
                    <ProfileUpdatingModal isOpen={profileUpdatingState} onRequestClose={()=>setProfileUpdatingState(false)}/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 20,
                                justifyContent: "space-between",
                                width: 730
                            }}>
                                <ImageBlock
                                    profileName={userData.name}
                                    imageLink={userData.image}
                                    changeButtonHandler={()=>setProfileUpdatingState(true)}
                                />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 20,
                                    width: "100%"
                                }}>
                                    <IconInfoBlock imageLink={CalendarImage} title={`${userData.totalLessons} уроков`} description={"Проведено"}></IconInfoBlock>
                                    <IconInfoBlock imageLink={CashImage} title={`${userData.totalEarnings}$`} description={"Мой баланс"}></IconInfoBlock>
                                    {
                                        userData.nextLessonIn > -1?
                                            <IconInfoBlock imageLink={ClockImage} title={`${userData.nextLessonIn > 60? parseInt(userData.nextLessonIn / 60) : userData.nextLessonIn} ${userData.nextLessonIn > 60? "ч" : "мин"}.`} description={"До урока"}></IconInfoBlock>
                                            :
                                            <IconInfoBlock imageLink={ClockImage} title={`Нет следующего урока`} description={""}></IconInfoBlock>
                                    }

                                </div>
                                <UpcomingLessonsBlock lessonsList={userData.lessonsList || []}/>
                            </div>
                            <div style={{width: "fit-content", display: "flex", flexDirection: "column", gap: 20}}>
                                <Calendar/>
                                <WeeklyTasksList/>
                            </div>
                </LoadingContainer>
            </PersonalDefaultPage>
        </>
    )
}


export default PersonalPage