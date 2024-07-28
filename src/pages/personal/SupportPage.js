import PersonalDefaultPage from "./PersonalDefaultPage";
import {PageTitle} from "../../components/text/PageTitle";
import {FormTextInput, NewFormTextInput} from "../../components/inputs/FormTextInput/FormTextInput";
import {FormProvider, useForm} from "react-hook-form";
import {
    color_grey_dark,
    color_grey_light,
    color_red_default,
    color_transparent,
    color_white
} from "../../constants/colors";
import {TextInput} from "../../components/blocks/studentProfile/studentProfileInfo/StudentProfileInfoEdit";
import {Button} from "../../components/controls/Button/Button";
import React from "react";
import {OnestNormalDefault, OnestSemiBoldDefault, OnestSemiBoldSmall} from "../../components/styled/TextComponents";
import {useDispatch, useSelector} from "react-redux";
import {BsDash, BsPlus} from "react-icons/bs";
import {changeActive} from "../../store/FaqSlice";




const FaqQuestion = ({question}) => {
    const dispatch = useDispatch();

    return (
        <div style = {{
            display: "flex",
            flexDirection: "column",
            gap: 10
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <div style={{width: 439}}><OnestSemiBoldDefault>{question.question}</OnestSemiBoldDefault></div>
                <div style={{
                    width: 25,
                    height: 25,
                    borderRadius: "50%",
                    backgroundColor: color_red_default,
                    color: color_white,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    onClick={()=>dispatch(changeActive(question.id))}
                >
                    {question.active ?
                        <BsDash/> : <BsPlus/>
                    }
                </div>
            </div>
            {question.active ?
                <div>
                    <OnestNormalDefault style={{color: color_grey_dark}}>{question.answer}</OnestNormalDefault>
                </div>
                :
                null
            }
        </div>
    )
}


const SupportPage = () => {
    const formHooks = useForm();
    const faqData = useSelector(state => state.faq);

    return (
        <FormProvider {...formHooks}>
            <PersonalDefaultPage>
                <div style={{
                    display: "column",
                    width: 551
                }}>
                    <PageTitle title={"Новое обращение"}/>
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 20
                    }} onSubmit={formHooks.handleSubmit((data)=>console.log(data))}>
                        {/*<NewFormTextInput title={"Тема"} placeholder={"Введите тему сообщения"} register={register("theme")} inputBackgroundColor={color_white}/>*/}
                        {/*<NewFormTextInput title={"Тема"} placeholder={"Введите тему сообщения"} register={register("theme")} inputBackgroundColor={color_white}/>*/}
                        <TextInput title={"Тема"} placeholder={"Введите тему сообщения"} inputKey={"theme"} height={48}
                                   width={520} multiline={false} inputBackgroundColor={color_white}/>
                        <TextInput title={"Ваш вопрос"}
                                   placeholder={"Сформулируйте ваш вопрос как можно более подробно..."}
                                   inputKey={"question"} height={222} width={520} multiline={true}
                                   inputBackgroundColor={color_white}/>
                        <TextInput title={"E-mail"} placeholder={"example@mail.ru"} inputKey={"email"} height={48}
                                   width={520} multiline={false} inputBackgroundColor={color_white}/>
                        <TextInput title={"Номер, привязанный к WhatsApp"}
                                   placeholder={"+7 777 777 77 77 <-- Пришлем ответ"} inputKey={"phone"} height={48}
                                   width={520} multiline={false} inputBackgroundColor={color_white}/>
                        <Button outline={false} width={202} height={38} active={true}
                                backgroundColor={color_red_default}
                                color={color_white} borderColor={color_transparent} fontSize={16} type={"submit"}>Создать
                            обращение</Button>
                        <OnestNormalDefault style={{color: color_grey_dark}}>
                            Часы работы службы поддержки с 10:00 до 17:00 по Мск, с понедельника по пятницу. Суббота и
                            воскресенье нерабочие. Среднее время ответа на обращение - в течение одного рабочего дня, не
                            считая дня подачи обращения.
                        </OnestNormalDefault>
                    </form>
                </div>
                <div style={{
                    display: "column",

                }}>
                    <PageTitle title={"FAQ"}/>
                    <div style={{
                        width: 520,
                        borderRadius: 20,
                        padding: 20,
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        gap: 30
                    }}>
                        {faqData.map(el=>
                            <FaqQuestion question={el}/>
                        )}
                    </div>
                </div>

            </PersonalDefaultPage>
        </FormProvider>
)
}

export default SupportPage