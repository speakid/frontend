import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { styles } from "./styles"
import {OnestBoldSmall, OnestNormalDefault, OnestNormalSmall, OnestSemiBoldSmall} from "../../../styled/TextComponents";
import { Button } from "../../../controls/Button/Button";
import {color_grey_ultra_light, color_red_default, color_white} from "../../../../constants/colors";
import {useDispatch, useSelector} from "react-redux";

export const TextInput = ({multiline=false, width, height, title, placeholder = null, inputKey, defaultValue = null, inputBackgroundColor = null}) => {
    const {register} = useFormContext();
    return (
        <div style={{...styles.infoEditContainer}}>
            <OnestSemiBoldSmall>{title}</OnestSemiBoldSmall>
            {multiline === false?
                <input 
                    type={"text"} 
                    defaultValue={defaultValue}
                    {...register(inputKey)}
                    placeholder={placeholder}
                    style={{
                        ...styles.infoEditSmallTextInput,
                        width: width,
                        height: height,
                        backgroundColor: inputBackgroundColor,
                        // paddingLeft: 1
                    }}
                />
                : 
                <textarea
                    defaultValue={defaultValue}
                    {...register(inputKey)}
                    placeholder={placeholder}
                    style={{
                        ...styles.infoEditSmallTextInput,
                        width: width,
                        height: height,
                        resize: "none",
                        backgroundColor: inputBackgroundColor
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
                    <TextInput width={205} height={50} title={"Имя и фамилия"} inputKey={"name"} defaultValue={student.name} inputBackgroundColor={color_grey_ultra_light}/>
                    <TextInput width={205} height={50} title={"Возраст"} inputKey={"age"} defaultValue={student.age} inputBackgroundColor={color_grey_ultra_light}/>
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