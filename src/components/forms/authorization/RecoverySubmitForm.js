import FormDefault from "./FormDefault";
import {useRef, useState} from "react";
import {FormTextInput, NewFormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalDefault, OnestNormalSmall} from "../../styled/TextComponents";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";
import { useForm } from "react-hook-form";
import {color_grey_dark, color_red_default, color_white} from "../../../constants/colors";
import axios from "axios";
import Config from "../../../Config";
import {useNavigate} from "react-router-dom";

const RecoverySubmitForm = ({token}) => {
    const [submitted , setSubmitted] = useState(false);
    const formRef = useRef(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    const recoverySubmit = (data) => {
        if(data.newPassword !== data.newPasswordSubmit){
            alert("Пароли не совпадают")
            return
        }
        axios.patch(Config.BACKEND_ADDR + "/auth/recovery", data = {
            token: token,
            password: data.newPassword
        }).then(response=>{
            if(response.status !== 200){
                alert("Непредвиденная ошибка при попытке восстановления пароля");
            } else {
                setSubmitted(true)
                navigate("/service/personal/")
            }
        }).catch(err => {
            console.log(err);
            if(err.status === 409){
                alert("Данная ссылка на восстановление уже была использована")
                return
            }
            alert("Ошибка запроса на сервер приложения")
        });
    }


    return(
        <FormDefault
            onSubmit={handleSubmit(data=>recoverySubmit(data))}
            title={submitted? "Пароль восстановлен" : "Восстановление пароля"}
            // description={"Пожалуйста, введите e-mail, указанный при регистрации. Мы пришлем на него инструкцию для создания нового пароля."}
            formWidth={410}
        >
            {
                submitted?
                    <OnestNormalDefault style={{color: color_grey_dark}}>
                        Ваш пароль успешно восстановлен! Вы будете перенаправлены в личный кабинет. Если это не произошло автоматически, обновите страницу.
                    </OnestNormalDefault>
                    :
                    <>
                        <NewFormTextInput placeholder={"Новый пароль"} type={"password"} title={"Пароль"} register={register("newPassword")}/>
                        <NewFormTextInput placeholder={"Повторите новый пароль"} type={"password"} title={"Пароль"} register={register("newPasswordSubmit")}/>

                        <Button backgroundColor={color_red_default} color={color_white} outline={false} width={350} height={63} active={true} type={"submit"}>Восстановить пароль</Button>
                    </>
            }
        </FormDefault>
    )
}

export default RecoverySubmitForm