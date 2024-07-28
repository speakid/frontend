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
]

export const menuRouteList = routeList.filter(el=>el instanceof MenuRoute)