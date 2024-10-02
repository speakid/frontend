import {color_red_default, color_transparent, color_white} from "../../../../constants/colors";
import {NewFormTextInput} from "../../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../../controls/Button/Button";
import React, {useState} from "react";
import {styles} from "./Styles";
import {LoadingContainer} from "../../../containers/LoadingContainer";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../../../store/UserSlice";
import {FormProvider, useForm} from "react-hook-form";
import axios from "axios";
import Config from "../../../../Config";
import {getMyId} from "../../../../pages/personal/PersonalPage";
import {FormPhoneInput} from "../../../inputs/FormTextInput/FormPhoneInput";
import FormDefault from "../../../forms/authorization/FormDefault";

class User{
    constructor(image, name, email, phoneNumber, timeZone, totalLessons, totalEarnings, nextLessonIn, lessonsList) {
        this.image = image
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.timeZone = timeZone
        this.newPassword = null
        this.newPasswordRepeat = null
        this.totalLessons = totalLessons
        this.totalEarnings = totalEarnings
        this.nextLessonIn = nextLessonIn
        this.lessonsList = lessonsList
    }
}

export async function get_user(){
    let response = await axios.get(Config.BACKEND_ADDR + "/auth/me")
    let userData = response.data


    let lessons = userData.lessons.map(el=>{
        return {
            student_id: el.student_id,
            studentName: el.student_name,
            time: el.time,
            payedLessons: el.payed_lessons,
            weekday: el.weekday
        }
    })
    console.log("userDataRaw", userData)
    return {
        id: userData.id,
        image: userData.image? Config.CLOUD_ADDR + "/" + userData.image : process.env.PUBLIC_URL + "/no_profile_icon.png",
        name: userData.full_name,
        email: userData.email,
        phoneNumber: userData.phone_number,
        timeZone: "+3",
        newPassword: null,
        newPasswordRepeat: null,
        totalLessons: userData.total_lessons,
        balance: userData.balance,
        totalEarnings: userData.balance,
        nextLessonIn: userData.next_lesson_in,
        lessonsList: lessons,
        endOfSubscriptionTime: userData.paid_until
    }
}


export const ProfileDataUpdatingBlock = ({onRequestClose}) => {
    const [isLoading, setIsLoading] = useState(false);
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors}
    } = useForm()


    function uploadNewData(data){
        if(data.newPassword !== data.newPasswordRepeat){
            alert("Пароли должны совпадать.")
        }
        let oldState = {...user}
        dispatch(updateUser({
            // email: data.email,
            name: data.name,
            image: user.image,
            phone: data.phone,
        }))
        getMyId().then(id=>{
            axios.patch(Config.BACKEND_ADDR + `/auth/user/${id}`, {
                // email: data.email,
                full_name: data.name,
                password: data.newPassword,
                phone_number: data.phone,
            }).catch(()=> {
                alert("Ошибка обновления данных")
                dispatch(updateUser(oldState))
            })
        }).catch(()=>{
            alert("Ошибка обновления данных")
            dispatch(updateUser(oldState))
        })
        onRequestClose()
    }

   // useEffect(()=>{
   //     get_user().then(data=>{
   //         dispatch(setUser(data))
   //         setIsLoading(false);
   //     })
   // },[])

    return (
        <>
            <div style={{...styles.dataUpdatingContainer}}>
                <LoadingContainer isLoading={isLoading}>
                    <FormProvider {...{watch}}>
                        <FormDefault
                            onSubmit={handleSubmit(data=>uploadNewData(data))}
                            title={""}
                            formWidth={410}
                            style={styles.dataUpdatingForm}
                            >

                            <NewFormTextInput placeholder={"Введите имя"} type={"text"} title={"Имя"} defaultValue={user?.name} register={register("name")}/>
                            {/*<NewFormTextInput placeholder={"Введите email"} type={"email"} title={"E-mail"} defaultValue={user?.email} register={register("email")}/>*/}
                            <FormPhoneInput placeholder={user.phoneNumber} type={"tel"} title={"Введите номер телефона"} register={register("phone")}/>
                            <NewFormTextInput placeholder={"Часовой пояс"} type={"text"} title={"Часовой пояс"} defaultValue={user?.timeZone} register={register("timeZone")}/>
                            <NewFormTextInput placeholder={"Введите новый пароль"} type={"password"} title={"Введите новый пароль"} defaultValue={null} register={register("newPassword")}/>
                            <NewFormTextInput placeholder={"Повторите новый пароль"} type={"password"} title={"Повторите новый пароль"} defaultValue={null} register={register("newPasswordRepeat")}/>
                            <Button outline={false} width={530} height={60} active={true} backgroundColor={color_red_default}
                            color={color_white} borderColor={color_transparent} fontSize={18}>Сохранить</Button>

                        </FormDefault>
                    </FormProvider>
                </LoadingContainer>
            </div>
        </>

    )
}