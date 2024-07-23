import FormDefault from "./FormDefault";
import {useRef} from "react";
import {FormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalSmall} from "../../styled/TextComponents";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";

const RecoveryForm = () => {
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
            title={"Забыли пароль?"}
            description={"Пожалуйста, введите e-mail, указанный при регистрации. Мы пришлем на него инструкцию для создания нового пароля."}
            formWidth={410}
        >
            <FormTextInput placeholder={"example@mail.ru"} type={"email"} title={"Email"}/>

            <ButtonDefault width={350} height={63} active={true}>Восстановить пароль</ButtonDefault>
        </FormDefault>
    )
}

export default RecoveryForm