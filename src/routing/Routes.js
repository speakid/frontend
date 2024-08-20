import LoginPage from "../pages/authorization/LoginPage";
import RegisterPage from "../pages/authorization/RegisterPage";
import RecoveryPage from "../pages/authorization/RecoveryPage";
import React from "react";
import {
    BsArrowLeft,
    BsBookFill,
    BsCalendar2Date,
    BsDownload,
    BsFiles,
    BsFillPersonFill,
    BsJournal, BsPersonGear
} from "react-icons/bs";
import {AppRoute} from "./AppRoute";
import {MenuRoute} from "./MenuRoute";
import PersonalPage from "../pages/personal/PersonalPage";
import JournalPage from "../pages/personal/JournalPage";
import { RedirectToLoginOrPersonal } from "../components/redirects/RedirectToLoginOrPersonal";
import { ProtectedAppRoute } from "./ProtectedAppRoute";
import { StudentPage } from "../pages/personal/StudentPage";
import SupportPage from "../pages/personal/SupportPage";
import {LessonsProgram} from "../pages/personal/LessonsProgram";
import {Updates} from "../pages/personal/Updates";
import {LogOut} from "../components/redirects/LogOut";
import {CiLogout} from "react-icons/ci";
import {color_red_default} from "../constants/colors";
import {IoLogOut} from "react-icons/io5";
import {LevelLessonsPage} from "../pages/personal/LevelLessonsPage";
import {LibraryPage} from "../pages/personal/LibraryPage";
import {SchedulePage} from "../pages/personal/schedule/SchedulePage";
import {ScheduleDayExtended} from "../pages/personal/schedule/ScheduleDayExtended";

export const routeList = [
    new AppRoute(
        "/",
        <RedirectToLoginOrPersonal><PersonalPage/></RedirectToLoginOrPersonal>
    ),
    new AppRoute(
        "/auth/login",
        <LoginPage/>
    ),
    new AppRoute(
        "/auth/register",
        <RegisterPage/>
    ),
    new AppRoute(
        "/auth/recovery",
        <RecoveryPage/>
    ),
    new MenuRoute(
        "/service/personal",
        <PersonalPage/>,
        <BsFillPersonFill/>,
        "Личный кабинет"
    ),
    new MenuRoute(
        "/service/schedule",
        <SchedulePage/>,
        <BsCalendar2Date/>,
        "Мое расписание"
    ),
    new MenuRoute(
        "/service/journal",
        <JournalPage/>,
        <BsJournal/>,
        "Журнал учеников"
    ),
    new MenuRoute(
        "/service/program",
        <LessonsProgram/>,
        <BsFiles/>,
        "Программа"
    ),
    new MenuRoute(
        "/service/library",
        <LibraryPage/>,
        <BsBookFill/>,
        "Библиотека"
    ),
    new MenuRoute(
        "/service/updates",
        <Updates/>,
        <BsDownload/>,
        "Обновления"
    ),
    new MenuRoute(
        "/service/support",
        <SupportPage/>,
        <BsPersonGear/>,
        "Поддержка"
    ),
    new ProtectedAppRoute(
        "/service/students/:studentId",
        <StudentPage/>,
        <BsPersonGear/>,
        "student1"
    ),
    new MenuRoute(
        "/logout",
        <LogOut/>,
        <IoLogOut style={{color: color_red_default}}/>,
        "Выйти"
    ),
    new ProtectedAppRoute(
        "/service/program/level/:levelId",
        <LevelLessonsPage/>
    ),
    new ProtectedAppRoute(
        "/service/schedule/day",
        <ScheduleDayExtended/>
    )
]

export const menuRouteList = routeList.filter(el=>el instanceof MenuRoute)