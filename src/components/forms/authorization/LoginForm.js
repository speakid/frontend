import FormDefault from "./FormDefault";
import {useRef} from "react";
import {FormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalSmall} from "../../styled/TextComponents";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";

const LoginForm = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        alert("a")
        console.log(event)
        // event.preventDefault();
        alert("b")
        if (formRef.current) {
            alert("c")
            formRef.current.submit();
        }
    }

    const loginSubmit = (event) => {
        alert(event)
    }


    return(
        <FormDefault
            onSubmit={loginSubmit}
            title={"Авторизация"}
            formWidth={410}
        >
            <FormTextInput placeholder={"example@mail.ru"} type={"email"} title={"Email"}/>
            <FormTextInput placeholder={"Введите пароль"} type={"password"} title={"Пароль"}/>
            <div style={{marginTop: -20, width: "100%", textAlign: "left"}}><OnestNormalSmall><Link href={"/"}>Забыли пароль?</Link></OnestNormalSmall></div>

            <ButtonDefault width={350} height={63} active={true}>Войти</ButtonDefault>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: 5,
                justifyContent: "flex-end",
                marginTop: -20
            }}>
                <OnestNormalSmall>Нет аккаунта?</OnestNormalSmall>
                <OnestNormalSmall><Link href={"/"}>Зарегистрируйтесь</Link></OnestNormalSmall>
            </div>
        </FormDefault>
    )
}

export default LoginForm