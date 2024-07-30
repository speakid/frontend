import Logo from "./Logo";
import {Link, LinkClear, OnestBoldDefault, OnestNormalDefault, OnestNormalSmall} from "./styled/TextComponents";
import {Button} from "./controls/Button/Button";
import React, {useEffect, useState} from "react";
import {menuRouteList} from "../routing/Routes";
import {useLocation, useNavigate} from "react-router-dom";
import {
    color_grey_dark,
    color_grey_light,
    color_grey_ultra_light,
    color_red_active,
    color_red_default, color_white
} from "../constants/colors";
import {BsArrowLeft, BsArrowRight, BsBoxArrowLeft} from "react-icons/bs";
import {ButtonDefault} from "./controls/Button/ButtonDefault";

class User{
    constructor(
        userId,
        email,
        fullName,
        phoneNumber,
        endOfSubscriptionTime,
        // utcOffset
    ){
        // this.userId = userId
        this.email = email
        // this.fullName = fullName
        // this.phoneNumber = phoneNumber
        this.endOfSubscriptionTime = endOfSubscriptionTime
        // this.utcOffset = utcOffset

    }
}

function parseEpochSecondsToStringDate(seconds){
    let dateParsed = new Date(seconds)
    return dateParsed.toLocaleDateString("ru-RU")
}


// Логика работы меню
// При сборке приложения проверять, что все пути прописаны в некое хранилище.
// Получить все пути меню из хранилища
// Отрисовать каждый путь

// Варианты передачи иконки:
// - Через prop
// - Через children
//

const MenuItem = ({icon, path, name}) => {
    const [isSelected, setIsSelected] = useState(false)
    const location = useLocation()
    const navigate = useNavigate();
    const color = (isSelected || name ==="Выйти")? color_red_default : color_grey_light;

    useEffect(()=>{
        console.log(location.pathname, path,location === path)
        setIsSelected(location.pathname === path)
    }, [path, location])

    return (
        <div
            onClick={()=>{navigate(path)}}
            style={{
                display: "flex",
                height: 50,
                width: 240,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 20
        }}>
            <div style={{height: 50, width: 3, backgroundColor: isSelected? color : "transparent"}}></div>
            <span style={{color: color, fontSize: 16}}>{icon}</span>
            <OnestNormalDefault style={{color: color}}>{name}</OnestNormalDefault>
            <BsArrowRight style={{color: isSelected? color : "transparent"}}/>
        </div>
    )
}


const NavMenu = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {menuRouteList.map(el => {
                return <MenuItem  path={el.path} name={el.name} icon={el.icon}></MenuItem>
            })}
        </div>
    )
}

const NavBar = ({userObject = new User(1, "satamaks@gmail.com", "Maxim Zubkov", "+7-999-789-06-54", 1719829708, 3)}) => {
    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            width: 240,
            alignItems: "center",
            backgroundColor: color_white,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40
        }}>
            <div style={{marginTop: 20}}><Logo/></div>
           <div style={{
               marginTop: 20,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
           }}>
                <OnestNormalSmall>Подписка оплачена до:</OnestNormalSmall>
                <OnestBoldDefault>{parseEpochSecondsToStringDate(userObject.endOfSubscriptionTime)}</OnestBoldDefault>
           </div>
            <div style={{marginTop: 20}}><ButtonDefault width={145} height={40} active={true}>Продлить</ButtonDefault></div>
            <div style={{marginTop: 100}}><NavMenu/></div>
            {/*<div style={{flexGrow: 1}}/>*/}
            {/*<div style={{marginBottom: 30, marginLeft: 20, width: "100%", color: color_red_default, paddingTop: 40}}><BsBoxArrowLeft/> <Link href={"/"}>Выйти</Link></div>*/}

        </div>
    )
}

export default NavBar