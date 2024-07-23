import FormDefault from "./FormDefault";
import {useRef} from "react";
import {FormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalSmall} from "../../styled/TextComponents";
import CheckBoxMain from "../../controls/check-boxes/CheckBoxMain";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";

const RegisterForm = () => {
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
            title={"Регистрация"}
            formWidth={410}
        >
            <FormTextInput placeholder={"example@mail.ru"} type={"email"} title={"Email"}/>
            <FormTextInput placeholder={"Иван Петров"} type={"text"} title={"Имя и фамилия"}/>
            <FormTextInput placeholder={"+7 (888) 888 88 88"} type={"tel"} title={"Номер телефона"}/>
            <FormTextInput placeholder={"Введите пароль"} type={"password"} title={"Пароль"}/>
            <FormTextInput placeholder={"Введите пароль"} type={"password"} title={"Повторите пароль"}/>

            <ButtonDefault width={350} height={63} active={true}>Зарегистрироваться</ButtonDefault>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: 5,
                justifyContent: "flex-end",
                marginTop: -20
            }}>
                <CheckBoxMain/>
                <OnestNormalSmall>
                    Я даю согласие
                    <Link href={"/"}>на обработку персональных данных</Link>
                </OnestNormalSmall>
            </div>
        </FormDefault>
    )
}

export default RegisterForm