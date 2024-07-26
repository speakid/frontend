import FormDefault from "./FormDefault";
import {useEffect, useRef} from "react";
import {FormTextInput, NewFormTextInput} from "../../inputs/FormTextInput/FormTextInput";
import {Button} from "../../controls/Button/Button";
import {Link, OnestNormalSmall} from "../../styled/TextComponents";
import CheckBoxMain from "../../controls/check-boxes/CheckBoxMain";
import {ButtonDefault} from "../../controls/Button/ButtonDefault";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import { color_red_default, color_white } from "../../../constants/colors";


export const FormCheckBox = ({name, control}) => {

    const {watch} = useFormContext();

    return (
        <Controller
                    name={name}
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => 
                        <>
                            <label htmlFor="test" style={{
                                boxShadow: "1px 0 4px 0 rgba(178, 178, 178, 0.29)",
                                borderRadius: 5,
                                width: 25,
                                height: 25,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                {watch(name)?
                                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 0.75L3.625 7.625L0.5 4.5" stroke="#E12F2F" stroke-linecap="round"
                                            strokeLinejoin="round"/>
                                    </svg> 
                                    : null
                                }
                            </label>
                            <input style={{
                                position: "absolute",
                                zIndex: -1,
                                opacity: 0,
                            }} id="test" type="checkbox" {...field}/>
                        </>
                    }
        />
    )
}

const RegisterForm = () => {
    const formRef = useRef(null);

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors}
    } = useForm()

    const loginSubmit = (event) => {
        alert(event)
    }

    

    return(
        <FormProvider {...{watch}}>
            <FormDefault
            onSubmit={handleSubmit(data=>console.log(data))}
            title={"Регистрация"}
            formWidth={410}
        >
            <NewFormTextInput placeholder={"example@mail.ru"} type={"email"} title={"Email"} register={register("email")}/>
            <NewFormTextInput placeholder={"Иван Петров"} type={"text"} title={"Имя и фамилия"} register={register("name")}/>
            <NewFormTextInput placeholder={"+7 (888) 888 88 88"} type={"tel"} title={"Номер телефона"} register={register("phone")}/>
            <NewFormTextInput placeholder={"Введите пароль"} type={"password"} title={"Пароль"} register={"password"}/>
            <NewFormTextInput placeholder={"Введите пароль"} type={"password"} title={"Повторите пароль"} register={"passwordRepeat"}/>

            <Button backgroundColor={color_red_default} color={color_white} outline={false} width={350} height={63} active={true} type={"submit"} >Зарегистрироваться</Button>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: 5,
                justifyContent: "flex-end",
                marginTop: -20
            }}>
                <FormCheckBox name={"acceptForRules"} control={control}/>
                <OnestNormalSmall>
                    Я даю согласие
                    <Link href={"/"}>на обработку персональных данных</Link>
                </OnestNormalSmall>
            </div>
            
        </FormDefault>
        </FormProvider>
    )
}

export default RegisterForm