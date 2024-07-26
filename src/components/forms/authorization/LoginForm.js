import FormDefault from "./FormDefault";
import {useRef} from "react";
import {FormTextInput, NewFormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalSmall} from "../../styled/TextComponents";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";
import { useForm } from "react-hook-form";
import { color_red_default, color_white } from "../../../constants/colors";

const LoginForm = () => {
    const formRef = useRef(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    const loginSubmit = (event) => {
        alert(event)
    }


    return(
        <FormDefault
            onSubmit={handleSubmit((data)=>console.log(data))}
            title={"Авторизация"}
            formWidth={410}
        >
            <NewFormTextInput placeholder={"example@mail.ru"} type={"email"} title={"Email"} register={register("email")}/>
            <NewFormTextInput placeholder={"Введите пароль"} type={"password"} title={"Пароль"} register={register("password")}/>
            <div style={{marginTop: -20, width: "100%", textAlign: "left"}}><OnestNormalSmall><Link href={"/auth/recovery"}>Забыли пароль?</Link></OnestNormalSmall></div>

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
                <OnestNormalSmall><Link href={"/auth/register"}>Зарегистрируйтесь</Link></OnestNormalSmall>
            </div>
        </FormDefault>
    )
}

export default LoginForm