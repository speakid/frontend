import PersonalDefaultPage from "./PersonalDefaultPage";
import CalendarImage from "../../images/personalPage/calendar.svg";
import CashImage from "../../images/personalPage/money.svg";
import ClockImage from "../../images/personalPage/clock.svg";
import {Calendar} from "../../components/Calendar";
import {WeeklyTask, WeeklyTasksList} from "../../components/blocks/weeklyTasks/weeklyTasksList/WeeklyTasksList";
import {LessonInfo, UpcomingLessonsBlock} from "../../components/Tables/LessonsTable";
import {ImageBlock} from "../../components/blocks/ImageBlock";
import {IconInfoBlock} from "../../components/blocks/IconInfoBlock";
import React, {useState} from "react";
import {ProfileUpdatingModal} from "../../components/blocks/profileUpdating/profileUpdatingModal/ProfileUpdatingModal";
import {ModalDefault} from "../../components/containers/ModalDefault";

export const lessonsList = [
    new LessonInfo("Миша Смирнов", "14:30", 1),
    new LessonInfo("Марина Иванова", "15:30", 5),
    new LessonInfo("Вера Максимова", "16:30", 5),
    new LessonInfo("Нина Иванова", "17:30", 3),
    new LessonInfo("Александра Ткачева", "18:30", 4),
]

export async function getWeeklyTasksList(){
    await new Promise(r => setTimeout(r, 1500));
    // TODO: Api call
    const weeklyTasksList = [
        new WeeklyTask(0, "Заполнить расписание на февраль"),
        new WeeklyTask(1, "Распечатать реквизит для уроков"),
        new WeeklyTask(2, "Назначить программу занятий для Вики Петровой"),
        new WeeklyTask(3, "Проверить домашнее задание Никиты Потапова"),
        new WeeklyTask(4, "Напомнить про оплаты новеньким"),
    ]
    return weeklyTasksList
}

export async function getLessonsList() {
    await new Promise(r => setTimeout(r, 1500));
    // TODO: Api call
    const lessonsList = [
        new LessonInfo("Миша Смирнов", "14:30", 1),
        new LessonInfo("Марина Иванова", "15:30", 5),
        new LessonInfo("Вера Максимова", "16:30", 5),
        new LessonInfo("Нина Иванова", "17:30", 3),
        new LessonInfo("Александра Ткачева", "18:30", 4),
    ]
    return lessonsList
}

const PersonalPage = () => {
    const [profileUpdatingState, setProfileUpdatingState] = useState(false);

    return (
        <>
            <PersonalDefaultPage>
                    <ProfileUpdatingModal isOpen={profileUpdatingState} onRequestClose={()=>setProfileUpdatingState(false)}/>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    justifyContent: "space-between",
                    width: 730
                }}>
                    <ImageBlock
                        profileName={"Светлана Иванова"}
                        imageLink={"https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        changeButtonHandler={()=>setProfileUpdatingState(true)}
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 20,
                        width: "100%"
                    }}>
                        <IconInfoBlock imageLink={CalendarImage} title={"110 уроков"} description={"Проведено"}></IconInfoBlock>
                        <IconInfoBlock imageLink={CashImage} title={"12.550$"} description={"Мой баланс"}></IconInfoBlock>
                        <IconInfoBlock imageLink={ClockImage} title={"15 мин."} description={"До урока"}></IconInfoBlock>

                    </div>
                    <UpcomingLessonsBlock lessonsList={lessonsList}/>
                </div>
                <div style={{width: "fit-content", display: "flex", flexDirection: "column", gap: 20}}>
                    <Calendar/>
                    <WeeklyTasksList/>
                </div>
            </PersonalDefaultPage>
        </>
    )
}


export default PersonalPage