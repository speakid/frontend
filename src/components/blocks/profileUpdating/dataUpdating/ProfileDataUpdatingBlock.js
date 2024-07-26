import {color_red_default, color_transparent, color_white} from "../../../../constants/colors";
import {FormTextInput, NewFormTextInput} from "../../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../../controls/Button/Button";
import React, {useEffect, useReducer, useState} from "react";
import {styles} from "./Styles";
import {LoadingContainer} from "../../../containers/LoadingContainer";
import {useDispatch, useSelector} from "react-redux";
import {setUser, updateUser} from "../../../../store/UserSlice";
import { useForm } from "react-hook-form";

class User{
    constructor(image, name, email, phoneNumber, timeZone, password) {
        this.image = image
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.timeZone = timeZone
        this.password = password
        this.newPassword = null
        this.newPasswordRepeat = null
    }
}

function userReducer(user, action){
    console.log(action)
    switch(action.type){
        case "set": {
            return action.user
        }
        case "update": {
            return Object.assign(Object.create(Object.getPrototypeOf(action.user)), action.user)
        }
        case "delete": {
            return null
        }
        default: {
            throw Error("Unknown action.type for userReducer. ", action.type)
        }
    }
}

export async function get_user(){
    await new Promise(r => setTimeout(r, 1500));
    return new User(
        "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Maxim Zubkov",
        "qwerxsd@mail.ru",
        "+7-999-999-99-99",
        "+3",
        "asdasdasd"
    )
}

const FormSubmitButton = () => {
    
}

export const ProfileDataUpdatingBlock = () => {
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();



   useEffect(()=>{
       get_user().then(res=>{
           const userData = {
               image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
               name: "Maxim Zubkov",
               email: "qwerxsd@mail.ru",
               phoneNumber: "+7-999-999-99-99",
               timeZone: "+3"
           }
           dispatch(setUser(userData));
           setIsLoading(false);
       })
   },[])

    return (
        <>
            <div style={{...styles.dataUpdatingContainer}}>
                <LoadingContainer isLoading={isLoading}>
                    <form onSubmit={handleSubmit((data)=>console.log(data))} style={{...styles.dataUpdatingForm}}>
                        <NewFormTextInput placeholder={"Введите имя"} type={"text"} title={"Имя"} defaultValue={user?.name} register={register("name")}/>
                        <NewFormTextInput placeholder={"Введите email"} type={"email"} title={"E-mail"} defaultValue={user?.email} register={register("email")}/>
                        <NewFormTextInput placeholder={"Введите номер телефона"} type={"tel"} title={"Номер телефона"} defaultValue={user?.phoneNumber} register={register("phone")}/>
                        <NewFormTextInput placeholder={"Часовой пояс"} type={"text"} title={"Часовой пояс"} defaultValue={user?.timeZone} register={register("timeZone")}/>
                        <NewFormTextInput placeholder={"Введите новый пароль"} type={"password"} title={"Введите новый пароль"} defaultValue={null} register={register("newPassword")}/>
                        <NewFormTextInput placeholder={"Повторите новый пароль"} type={"password"} title={"Повторите новый пароль"} defaultValue={null} register={register("newPasswordRepeat")}/>
                        <Button outline={false} width={530} height={60} active={true} backgroundColor={color_red_default}
                        color={color_white} borderColor={color_transparent} fontSize={18}>Сохранить</Button>
                    </form>
                </LoadingContainer>
            </div>
        </>

    )
}