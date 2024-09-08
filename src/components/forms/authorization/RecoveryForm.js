import FormDefault from "./FormDefault";
import {useRef, useState} from "react";
import {FormTextInput, NewFormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalBig, OnestNormalDefault, OnestNormalMed, OnestNormalSmall} from "../../styled/TextComponents";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";
import { useForm } from "react-hook-form";
import {color_grey_dark, color_grey_light, color_red_default, color_white} from "../../../constants/colors";
import Config from "../../../Config";
import axios from "axios";

const RecoveryForm = ({}) => {
    const formRef = useRef(null);
    const [recoverySended, setRecoverySended] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    

    const loginSubmit = (data) => {
        console.log(data)
        axios.post(Config.BACKEND_ADDR + "/auth/recovery", data={
            email: data.email,
            base_recovery_url: window.location.origin+window.location.pathname
        }).then(response => {
            if (response.status !== 200){
                alert("Непредвиденная ошибка при попытке восстановления пароля")
            } else{
                setRecoverySended(true)
            }
        }).catch(err => {
            console.log(err)
            alert("Ошибка запроса на сервер приложения")
        })
    }


    return(
        <FormDefault
            onSubmit={handleSubmit((data)=>loginSubmit(data))}
            title={recoverySended? "Данные отправлены!" : "Забыли пароль?"}
            //description={"Пожалуйста, введите e-mail, указанный при регистрации. Мы пришлем на него инструкцию для создания нового пароля."}
            formWidth={410}
        >
            {recoverySended?
                <OnestNormalDefault style={{color: color_grey_dark}}>Если письмо не пришло, пожалуйста, проверьте папку “Спам” или напишите в <Link>поддержку</Link>.</OnestNormalDefault>
                :
                <>
                    <NewFormTextInput placeholder={"example@mail.ru"} type={"email"} title={"Email"} register={register("email")}/>
                    <Button backgroundColor={color_red_default} color={color_white} outline={false} width={350} height={63} active={true} type={"submit"}>Восстановить пароль</Button>
                </>
            }

        </FormDefault>
    )
}

export default RecoveryForm