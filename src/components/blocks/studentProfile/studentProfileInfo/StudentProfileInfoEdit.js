import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { styles } from "./styles"
import { OnestBoldSmall, OnestNormalDefault, OnestNormalSmall } from "../../../styled/TextComponents";
import { Button } from "../../../controls/Button/Button";
import { color_red_default, color_white } from "../../../../constants/colors";
import {useDispatch, useSelector} from "react-redux";

const TextInput = ({multiline=false, width, height, title, inputKey, defaultValue = null}) => {
    const {register} = useFormContext();
    return (
        <div style={{...styles.infoEditContainer}}>
            <OnestBoldSmall>{title}</OnestBoldSmall>
            {multiline === false?
                <input 
                    type={"text"} 
                    defaultValue={defaultValue}
                    {...register(inputKey)}
                    style={{
                        ...styles.infoEditSmallTextInput,
                        width: width,
                        height: height
                    }}
                />
                : 
                <textarea 
                    type={"text"} 
                    defaultValue={defaultValue}
                    {...register(inputKey)}
                    style={{
                        ...styles.infoEditSmallTextInput,
                        width: width,
                        height: height,
                        resize: "none"
                    }}
                />
            }
        </div>
    )
}


const LevelSelectorButtons = () => {
    const {register, watch} = useFormContext();
    const englishLevels = ["Pre-k", "Beginner", "Elementary", "Pre-intermediate", "Intermediate", "Upper-intermediate", "Advanced"];

    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();
    console.log(watch("level") === null)
    return (
        <div style={{...styles.infoEditContainer}}>
            <OnestBoldSmall>Уровень языка</OnestBoldSmall>
            <div style={{...styles.levelSelectorContainer}}>
                {englishLevels.map(el=>
                    <>
                        <input style={{display: "none"}} type={"radio"} id={el} value={el} name={el} {...register("level")}/>
                        <label style={{...styles.levelSelectorButton, ...((watch("level")===el || ((watch("level") === null || watch("level") === undefined) && student.englishLevel===el)) && styles.levelSelectorButtonActive)}} for={el}><OnestNormalSmall>{el}</OnestNormalSmall></label>
                    </>
                )}
            </div>
        </div>
    )
}

export const StudentProfileInfoEdit = () => {
    const name = "Миша Смирнов"
    const age = 12
    const level = "Beginner"
    const additionalInfo = "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество."
    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    return (
        <FormProvider {...{register, watch}}>
            <form 
                style={{...styles.infoEditForm}}
                onSubmit={handleSubmit((data)=>console.log(data))}
            >
                <div style={{display: "flex", flexDirection: "row", gap: 10}}>
                    <TextInput width={205} height={50} title={"Имя и фамилия"} inputKey={"name"} defaultValue={student.name}/>
                    <TextInput width={205} height={50} title={"Возраст"} inputKey={"age"} defaultValue={student.age}/>
                </div>
                <LevelSelectorButtons defaultValue={student.englishLevel}/>
                <TextInput multiline={true} width={420} height={128} title={"Дополнительная информация"} inputKey={"additionalInfo"} defaultValue={student.additionalInfo}/>
                <div style={{marginTop: 25, display: "flex", justifyContent: "flex-end"}}>
                <Button width={145} height={40} backgroundColor={color_red_default} color={color_white} type="submit"><OnestNormalDefault>Сохранить</OnestNormalDefault></Button>
                </div>
            </form>
        </FormProvider>
    )
}