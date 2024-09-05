import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { styles } from "./styles";
import { Button } from "../../../controls/Button/Button";
import { OnestBoldSmall, OnestNormalDefault, OnestNormalSmall } from "../../../styled/TextComponents";
import { color_red_default, color_white } from "../../../../constants/colors";
import { FormCheckBox } from "../../../forms/authorization/RegisterForm";
import {useSelector} from "react-redux";

const WeekdaySelectorButtons = () => {
    const {register, watch} = useFormContext();
    const englishLevels = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

    // const student = useSelector(state=>state.student);
    // const dispatch = useDispatch();
    return (
        <div style={{...styles.infoEditContainer}}>
            <OnestBoldSmall>День недели</OnestBoldSmall>
            <div style={{...styles.weekdaySelectorContainer}}>
                {englishLevels.map(el=>
                    <>
                        <input style={{display: "none"}} type={"checkbox"} id={el} value={el} name={"weekday"} {...register("weekday")}/>
                        <label style={{
                            ...styles.weekDaySelectorButton,
                            ...(
                                (
                                    watch("weekday")?.includes(el)
                                ) && styles.weekDaySelectorButtonActive
                            )
                        }} htmlFor={el}><OnestNormalSmall>{el}</OnestNormalSmall></label>
                    </>
                )}
            </div>
        </div>
    )
}

const WeekdayTimeSelector = () => {
    const {register, watch} = useFormContext();
    const timeSlots = [...Array(23).keys()].map(el=>{
        let elStart = `${el}`.padStart(2, "0")
        let elEnd = `${el+1}`.padStart(2, "0")
        return [`${elStart}:00 - ${elEnd}:30`, `${elStart}:30 - ${elEnd}:00`]
      }).flat()

    return(
        <div style={{...styles.timeSelectContainer}}>
            {watch("weekday")&&watch("weekday")?.map(weekday => 
                <div style={{...styles.infoEditContainer}}>
                    <OnestBoldSmall>Время занятия ({weekday})</OnestBoldSmall>
                    <select {...register(`times.${weekday}`)} style={{...styles.timeSelect}}>
                        <option disabled={true} selected={true}>Выберите слот для занятия</option>
                        {timeSlots.map(el=>
                            <option value={el} style={{...styles.timeSelectOption}}>{el}</option>
                        )}
                    </select>
                </div>
            )}
        </div>
    )
}

export const StudentScheduleEdit = () => {
    const student = useSelector(state=>state.student);
    // const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        control,
        // formState: {errors}
    } = useForm({
        defaultValues: {
            "weekday": student.lessonsSchedule.map(el=>el.weekDayShort),
            "times": student.lessonsSchedule.map(lesson=>{
                let time = lesson.time
                let wd = lesson.weekDayShort
                let timeRow = {}
                timeRow[wd] = time
                return timeRow
            })
        }
    })
    return (
        <FormProvider {...{register, watch}}>
            <form 
                style={{...styles.infoEditForm}}
                onSubmit={handleSubmit((data)=>console.log(data))}
            >
                <WeekdaySelectorButtons/>
                <WeekdayTimeSelector/>
                <div style={{display: "flex", flexDirection: "row", gap: 10}}>
                <FormCheckBox name={"repeat"} control={control}/>
                <OnestNormalDefault>Повторять расписание</OnestNormalDefault>
                </div>
                <div style={{marginTop: 25, display: "flex", justifyContent: "flex-end"}}>
                    <Button width={145} height={40} backgroundColor={color_red_default} color={color_white} type="submit"><OnestNormalDefault>Сохранить</OnestNormalDefault></Button>
                </div>
            </form>
        </FormProvider>
    )
}