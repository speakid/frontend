import FormDefault from "./FormDefault";
import {useRef} from "react";
import {FormTextInput, NewFormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalSmall} from "../../styled/TextComponents";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";
import { useForm } from "react-hook-form";
import { color_red_default, color_white } from "../../../constants/colors";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Config from "../../../Config";

const LoginForm = () => {
    const formRef = useRef(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    const loginSubmit = (data) => {
        let backendAddr = window.location.origin + "/api/auth/login"
        axios.post(backendAddr, data).then(response=>{
            if (response.status === 200){
                navigate("/service/personal/")
            }
        }).catch(err=>{
            alert("Ошибка авторизации. Проверьте логин и пароль!")
        })
    }


    return(
        <FormDefault
            onSubmit={handleSubmit((data)=>loginSubmit(data))}
            title={"Авторизация"}
            formWidth={410}
        >
            <NewFormTextInput placeholder={"example@mail.ru"} type={"email"} title={"Email"} register={register("email")}/>
            <NewFormTextInput placeholder={"Введите пароль"} type={"password"} title={"Пароль"} register={register("password")}/>
            <div style={{marginTop: -20, width: "100%", textAlign: "left"}}><OnestNormalSmall><div style={{cursor: "pointer"}} onClick={()=>navigate("/auth/recovery")}><Link >Забыли пароль?</Link></div></OnestNormalSmall></div>

            <Button backgroundColor={color_red_default} color={color_white} outline={false} width={350} height={63} active={true} type={"submit"}>Войти</Button>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: 5,
                justifyContent: "flex-end",
                marginTop: -20
            }}>
                <OnestNormalSmall>Нет аккаунта?</OnestNormalSmall>
                <OnestNormalSmall><div style={{cursor: "pointer"}} onClick={()=>navigate("/auth/register")}><Link>Зарегистрируйтесь</Link></div></OnestNormalSmall>
            </div>
        </FormDefault>
    )
}

export default LoginForm