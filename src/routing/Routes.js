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
import { RedirectToLogin } from "../components/redirects/RedirectToLogin";
import { ProtectedAppRoute } from "./ProtectedAppRoute";
import { StudentPage } from "../pages/personal/StudentPage";

export const routeList = [
    new AppRoute(
        "/",
        <RedirectToLogin><PersonalPage/></RedirectToLogin>
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
        <PersonalPage/>,
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
        <PersonalPage/>,
        <BsFiles/>,
        "Программа"
    ),
    new MenuRoute(
        "/service/library",
        <PersonalPage/>,
        <BsBookFill/>,
        "Библиотека"
    ),
    new MenuRoute(
        "/service/updates",
        <PersonalPage/>,
        <BsDownload/>,
        "Обновления"
    ),
    new MenuRoute(
        "/service/support",
        <PersonalPage/>,
        <BsPersonGear/>,
        "Поддержка"
    ),
    new MenuRoute(
        "/service/students/:studentId",
        <StudentPage/>,
        <BsPersonGear/>,
        "student1"
    )
]

export const menuRouteList = routeList.filter(el=>el instanceof MenuRoute)