import FormDefault from "./FormDefault";
import {useRef} from "react";
import {FormTextInput, NewFormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalSmall} from "../../styled/TextComponents";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";
import { useForm } from "react-hook-form";
import { color_red_default, color_white } from "../../../constants/colors";

const RecoveryForm = () => {
    const formRef = useRef(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    

    const loginSubmit = (event) => {
        alert(event)
    }


    return(
        <FormDefault
            onSubmit={handleSubmit((data)=>console.log(data))}
            title={"Забыли пароль?"}
            description={"Пожалуйста, введите e-mail, указанный при регистрации. Мы пришлем на него инструкцию для создания нового пароля."}
            formWidth={410}
        >
            <NewFormTextInput placeholder={"example@mail.ru"} type={"email"} title={"Email"} register={register("email")}/>
            <Button backgroundColor={color_red_default} color={color_white} outline={false} width={350} height={63} active={true} type={"submit"}>Восстановить пароль</Button>
        </FormDefault>
    )
}

export default RecoveryForm