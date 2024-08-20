import PersonalDefaultPage from "../PersonalDefaultPage";
import {
    color_blue_light, color_green_light,
    color_grey_dark,
    color_grey_light,
    color_red_default, color_red_ultra_light,
    color_white, color_yellow_light
} from "../../../constants/colors";
import {BsArrowLeft} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {
    OnestBoldDefault,
    OnestNormalBig,
    OnestNormalDefault,
    OnestNormalSmall
} from "../../../components/styled/TextComponents";
import {useSelector} from "react-redux";

const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            width: 35,
            height: 35,
            borderRadius: "50%",
            backgroundColor: color_white,
            color: color_red_default,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }} onClick={()=>navigate(-1)}>
            <BsArrowLeft/>
        </div>
    )
}

const ScheduleHeader = ({date}) => {
    const monthNames = ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"]


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <OnestNormalBig>{date.getDay()} {monthNames[date.getMonth()]}, </OnestNormalBig>
                <OnestNormalBig style={{color: color_grey_light}}> {date.getFullYear()}</OnestNormalBig>
            </div>
        </div>
    )
}

const ScheduleDayTimeSlot = ({datetime, lesson}) => {

    const getWithPrefixZeroes = (number, zeroesCount) => number.toString().padStart(zeroesCount, "0")

    function getLessonColor(paymentStatus){
        if (paymentStatus === "Не оплачено") {
            return color_red_ultra_light
        } else if (paymentStatus === "Последний урок") {
            return color_yellow_light
        } else if (paymentStatus === "Оплачено") {
            return color_green_light
        } else {
            return color_blue_light
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5
            }}>
                <OnestNormalSmall style={{color: color_grey_dark}}>
                    {getWithPrefixZeroes(datetime.getHours(), 2) + ":" + getWithPrefixZeroes(datetime.getMinutes(), 2)}
                </OnestNormalSmall>
                <div style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: color_grey_dark
                }}/>
            </div>
            <div style={{
                height: 50,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {lesson?
                    <div style={{
                        width: "90%",
                        borderRadius: 10,
                        backgroundColor: getLessonColor(lesson.paymentStatus),
                        height: "80%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: 10,
                        gap: 10
                    }}>
                        <OnestBoldDefault>{lesson.timeSlot}</OnestBoldDefault>
                        <OnestNormalDefault>{lesson.studentName} {lesson.studentLevel}</OnestNormalDefault>
                    </div>
                    : null}
            </div>

        </div>
    )
}

export const ScheduleDayExtended = () => {

    const dayData = useSelector(state => state.scheduleDayExtended);
    const timeSlots = generateTimeSlots(dayData.date);

    function generateTimeSlots(date){
        let startDate = new Date(date);
        var timeSlots = [];

        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);

        for(let i = 0; i<=24*2 - 1; i+=1){
            timeSlots.push(new Date(startDate));
            startDate.setMinutes(startDate.getMinutes() + 30);
        }
        return timeSlots
    }


    return (
        <PersonalDefaultPage>
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 20
            }}>
                <GoBackButton/>
                <ScheduleHeader date={dayData.date}/>
                <div style={{
                    width: "100%",
                    backgroundColor: color_white,
                    borderRadius: 20,
                    padding: 20,
                    boxSizing: "border-box"

                }}>
                    {timeSlots.map(slot=>{
                        var lesson = dayData.lessons.find(lesson=>lesson.dateDate.getTime() === slot.getTime())
                        return <ScheduleDayTimeSlot datetime={slot} lesson={lesson}/>
                    })}
                </div>
            </div>
        </PersonalDefaultPage>
    )
}