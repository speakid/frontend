import PersonalDefaultPage from "../PersonalDefaultPage";
import {useDispatch, useSelector} from "react-redux";
import {
    OnestBoldBig,
    OnestNormalBig,
    OnestNormalDefault,
    OnestNormalSmall, OnestSemiBoldBig, OnestSemiBoldDefault, OnestSemiBoldSmall
} from "../../../components/styled/TextComponents";
import {
    color_black, color_blue, color_blue_light, color_green, color_green_light,
    color_grey_dark,
    color_grey_light,
    color_red_default,
    color_red_light, color_red_ultra_light, color_transparent,
    color_white, color_yellow, color_yellow_light
} from "../../../constants/colors";
import {
    BsArrowLeft,
    BsArrowRight,
    BsArrowsAngleExpand,
    BsArrowsExpand,
    BsClock,
    BsDoorOpen, BsRepeat,
    BsReply, BsReplyFill
} from "react-icons/bs";
import {useEffect, useState} from "react";
import {updateSchdeule} from "../../../store/ScheduleSlice";
import {ModalDefault} from "../../../components/containers/ModalDefault";
import {updateDayLessonData} from "../../../store/ScheduleDayExtendedSlice";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Config from "../../../Config";
import {addZeroToTime, weekDayToFullWeekName} from "../JournalPage";
import {updateStudent} from "../../../store/StudentSlice";
import {LoadingContainer} from "../../../components/containers/LoadingContainer";

const ScheduleHeader = ({scheduleWeekRange, setScheduleWeekRange}) => {
    const monthNames = ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"]
    const monthFullNames = ["ЯНВАРЬ", "ФЕВАЛЬ", "МАРТ", "АПРЕЛЬ", "МАЙ", "ИЮНЬ", "ИЮЛЬ", "АВГУСТ", "СЕНТЯБРЬ", "ОКТЯБРЬ", "НОЯБРЬ", "ДЕКАБРЬ"]

    const scheduleWEekRangeShortString = () => {
        return `${scheduleWeekRange[0].getDate() < 10? `0${scheduleWeekRange[0].getDate()}` : scheduleWeekRange[0].getDate()} ${monthNames[scheduleWeekRange[0].getMonth()]} — ` +
            `${scheduleWeekRange[1].getDate() < 10? `0${scheduleWeekRange[1].getDate()}` : scheduleWeekRange[1].getDate()} ${monthNames[scheduleWeekRange[0].getMonth()]}`
    }


    const setPreviousWeek = () => {
        let weekStart = new Date(scheduleWeekRange[0]);
        weekStart.setDate(weekStart.getDate() - 2);
        setScheduleWeekRange(weekStart);
    }

    const setNextWeek = () => {
        let weekEnd = new Date(scheduleWeekRange[1]);
        weekEnd.setDate(weekEnd.getDate() + 1);
        setScheduleWeekRange(weekEnd);
    }

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
                <OnestBoldBig>{scheduleWeekRange[0].getFullYear()},<span> </span></OnestBoldBig>
                <OnestNormalBig style={{color: color_grey_dark}}>{monthFullNames[scheduleWeekRange[0].getMonth()]}</OnestNormalBig>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: 2
            }}>
                <div style={{
                    backgroundColor: color_white,
                    width: 32,
                    height: 32,
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100,
                    color: color_black,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    padding: 5,
                    fontSize: 20,
                    cursor: "pointer"
                }} onClick={() => setPreviousWeek()}>
                    <BsArrowLeft/>
                </div>
                <div style={{
                    height: 32,
                    backgroundColor: color_white,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    padding: 5,
                    width: 150
                }}>
                    <OnestNormalDefault>{scheduleWEekRangeShortString()}</OnestNormalDefault>
                </div>
                <div style={{
                    backgroundColor: color_white,
                    width: 32,
                    height: 32,
                    borderTopRightRadius: 100,
                    borderBottomRightRadius: 100,
                    color: color_black,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    padding: 5,
                    fontSize: 20,
                    cursor: "pointer"
                }} onClick={() => setNextWeek()}>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
    )
}

const ScheduleDayheader = ({weekday, lessonsCount}) => {
    const weekDayString = () => {
        const weekdays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
        return weekdays[getNormalizedWeekDay(weekday.getDay())]
    }

    function getNormalizedWeekDay(weekDay){
        if(weekDay === 0) return 6
        else return weekDay - 1
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            width: "100%"
        }}>
            <OnestSemiBoldDefault>{weekDayString()}</OnestSemiBoldDefault>
            <OnestNormalDefault>*</OnestNormalDefault>
            <OnestNormalDefault>{lessonsCount} урока</OnestNormalDefault>
        </div>
    )
}

const ScheduleDayBodyHeader = ({day, weekday, lessons}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center"
        }}>
            <div style={{
                width: 50,
                height: 50,
                backgroundColor: [6, 0].includes(weekday.getDay())? color_red_default : color_transparent,
                color: [6, 0].includes(weekday.getDay())? color_white : color_black,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <OnestNormalBig style={{fontSize: 40}}>{day.getDate() < 10? `0${day.getDate()}` : `${day.getDate()}`}</OnestNormalBig>
            </div>
            <div style={{
                width: 25,
                height: 25 ,
                backgroundColor: color_red_default,
                color: color_white,
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                fontSize: 10,
                marginTop: 10,
                cursor: "pointer"
            }}
            onClick={()=>{
                    dispatch(updateDayLessonData({date: day, lessons: lessons}))
                    navigate("/service/schedule/day")
            }}>
                <BsArrowsAngleExpand />
            </div>
        </div>
    )
}

const LessonPreview = ({lessonData}) => {
    const lessonColor = getLessonColor(lessonData.paymentStatus);
    const lessonStatusColor = getLessonStatusColor(lessonData.paymentStatus);

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

    function getLessonStatusColor(paymentStatus) {
        if (paymentStatus === "Не оплачено") {
            return color_red_light
        } else if (paymentStatus === "Последний урок") {
            return color_yellow
        } else if (paymentStatus === "Оплачено") {
            return color_green
        } else {
            return color_blue
        }
    }


    return (
        <div style={{
            width: "100%",
            backgroundColor: lessonColor,
            display: "flex",
            flexDirection: "column",
            borderRadius: 12,
            padding: 10,
            boxSizing: "border-box",
            gap: 3
        }}>
            <OnestSemiBoldSmall>{lessonData.studentName}</OnestSemiBoldSmall>
            <OnestNormalSmall style={{color: lessonStatusColor}}>{lessonData.paymentStatus}</OnestNormalSmall>
            <div style={{
                width: "100%",
                height: 28,
                backgroundColor: color_white,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <BsClock/>
                <OnestNormalSmall>{lessonData.timeSlot}</OnestNormalSmall>
            </div>
        </div>
    )
}

const ScheduleDayBody = ({day, weekday, lessons}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            gap: 5,
            overflow: "scroll",
            padding: 5,
            boxSizing: "border-box"

        }}>
            <ScheduleDayBodyHeader day={day} weekday={weekday} lessons={lessons}/>
            <div style={{flexGrow: 1}}/>
            {lessons.map(el=><LessonPreview lessonData={el} />)}
        </div>
    )
}

const ScheduleDay = ({weekday, day, lessons}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: 150,
            height: "100%"

        }}>
            <ScheduleDayheader weekday={weekday} lessonsCount={lessons.length}/>
            <div style={{
                width: "100%",
                height: "100%",
                backgroundColor: color_white,
                borderRadius: 10,
            }}>
                <ScheduleDayBody day={day} weekday={weekday} lessons={lessons}/>
            </div>
        </div>
    )
}

const ScheduleCalendar = ({schedule, weekDayRange}) => {
    console.log("calendarGotSchdeule: ", schedule)
    const weekFullRange = () => {
        var weekDays = [];
        let weekStart = new Date(weekDayRange[0]);
        while (getNormalizedWeekDay(weekStart.getDay()) <= getNormalizedWeekDay(weekDayRange[1].getDay())){
            weekDays.push(new Date(weekStart));
            if(getNormalizedWeekDay(weekStart.getDay()) === getNormalizedWeekDay(weekDayRange[1].getDay())) break;
            weekStart.setDate(weekStart.getDate() + 1);
        }
        return weekDays;
    }

    function getNormalizedWeekDay(weekDay){
        if(weekDay === 0) return 7
        else return weekDay
    }

    const scheduleToDays = splitScheduleByWeekDays(schedule);
    function splitScheduleByWeekDays(schedule){
        var scheduleByWeekDay = [];

        weekFullRange().forEach(weekday => {
            scheduleByWeekDay.push({
                weekday: weekday,
                lessons: schedule.filter(el=>el.dateDate.getDay() === weekday.getDay())
            })
        })
        return scheduleByWeekDay
    }



    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            height: "100%",
        }}>
            {scheduleToDays.map(el=><ScheduleDay weekday={el.weekday} day={el.weekday} lessons={el.lessons} />)}
            {/*<ScheduleDay weekday={"ПН"} day={"01"} lessons={schedule}/>*/}
        </div>
    )
}


export const SchedulePage = () => {
    const schedule = useSelector(state => state.schedule);
    const [scheduleWeekRange, setScheduleWeekRange] = useState(getWeekRangeForDate(new Date()));
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    console.log("scheduleWeekRange", scheduleWeekRange)

    function getWeekRangeForDate(date){
        const weekStart = new Date(date);
        const weekEnd = new Date(date);

        weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1)
        weekEnd.setDate(weekEnd.getDate() - weekEnd.getDay() + 7)

        return [weekStart, weekEnd]
    }

    function updateWeek(date){
        setScheduleWeekRange(getWeekRangeForDate(date));
    }

    function getUserLessonStatus(studentBalance, studentId){
        let returnVal = "Последний урокк"
        let balance = studentBalance[studentId].balance
        let cost = studentBalance[studentId].cost
        console.log(`studentBalance: id: ${studentId}, balance: ${balance}`)
        if(balance - cost * 2 > 0){
            returnVal = "Оплачено"
        } else if (balance - cost <= 0){
            returnVal = "Не оплачено"
        } else {
            returnVal = "Последний урок"
        }
        console.log(`studentBalance before changing: ${studentBalance}`)
        studentBalance[studentId].balance = studentBalance[studentId].balance - cost
        console.log(`studentBalance after changing: ${studentBalance}`)
        return returnVal
    }

    async function loadData(){
        let response = await axios.get(Config.BACKEND_ADDR + "/lessons")
        let lessonsData = response.data
        console.log("Got lessons from db: ", lessonsData)
        let uniqueStudents = lessonsData.map(el=>el.student_id).filter((value, index, array) => array.indexOf(value) === index);
        let studentsBalance = {}
        for (let studentId of uniqueStudents){
            response = await axios.get(Config.BACKEND_ADDR + `/students/${studentId}`)
            studentsBalance[studentId] = {balance: response.data.balance, cost: response.data.lesson_cost}
        }
        dispatch(updateSchdeule(lessonsData.map(el=>{
            let startTime = new Date(el.start_time)
            let endTime = new Date(el.end_time)
            return {
                id: el.id,
                studentName: el.student_name,
                dateDate: startTime,
                timeSlot:
                    `${addZeroToTime(startTime.getHours())}:${addZeroToTime(startTime.getMinutes())} - ` +
                    `${addZeroToTime(endTime.getHours())}:${addZeroToTime(endTime.getMinutes())}`,
                paymentStatus: getUserLessonStatus(studentsBalance, el.student_id),
                weekDay: weekDayToFullWeekName(el.weekday).short,
                stunedLevel: "A2"
            }
        })))
        // dispatch(updateSchdeule(getWeekLessonsFromApi(scheduleWeekRange)))
    }

    useEffect(()=>{
        loadData().then(()=>{setIsLoading(false)})
    },[scheduleWeekRange])

    function getWeekLessonsFromApi(weekDayRange){
        const weekFullRange = () => {
            var weekDays = [];
            let weekStart = new Date(weekDayRange[0]);
            while (getNormalizedWeekDay(weekStart.getDay()) <= getNormalizedWeekDay(weekDayRange[1].getDay())){
                weekDays.push(new Date(weekStart));
                if(getNormalizedWeekDay(weekStart.getDay()) === getNormalizedWeekDay(weekDayRange[1].getDay())) break;
                weekStart.setDate(weekStart.getDate() + 1);
            }
            return weekDays;
        }
        function getNormalizedWeekDay(weekDay){
            if(weekDay === 0) return 6
            else return weekDay - 1
        }
        const weekDayString = ({weekday}) => {
            const weekdays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
            return weekdays[getNormalizedWeekDay(weekday.getDay())]
        }
        let baseId = 0;
        let lessons = [];
        let minLessons = 0;
        let maxLessons = 7;
        let counter = 0;
        weekFullRange().forEach(weekDate=>{
            let dayLessonsCount = parseInt(Math.random() * (maxLessons - minLessons) + minLessons);
            let lessonsCounter = 0;
            while(lessonsCounter < dayLessonsCount){
                let minuteSlots = ["00", "30"];
                let randomTime = parseInt(Math.random() * (18 - 6) + 6);
                let randomMinute = minuteSlots[parseInt(Math.random() * (1))];
                let lessonDate = new Date(weekDate)
                lessonDate.setHours(randomTime)
                lessonDate.setMinutes(randomMinute)
                lessonDate.setSeconds(0)
                lessons.push({
                    id: counter,
                    studentName: "Наташа Сизова",
                    dateDate: lessonDate,
                    timeSlot: `${randomTime < 10 ? `0${randomTime}` : `${randomTime}`}:${randomMinute}-${randomTime + 1 < 10? `0${randomTime + 1}` : `${randomTime + 1}`}:${randomMinute === "00"? "30" : "00"}`,
                    paymentStatus: ["Оплачено", "Не оплачено", "Последний урок"][parseInt(Math.random() * (2))],
                })
                lessonsCounter += 1
                counter+=1
            }
        })
        return lessons
    }


    return (
        <PersonalDefaultPage>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 20
            }}>
                <LoadingContainer isLoading={isLoading}>
                    <ScheduleHeader scheduleWeekRange={scheduleWeekRange} setScheduleWeekRange={(date) => updateWeek(date)}/>
                    <ScheduleCalendar schedule={schedule.filter(el=>el.dateDate >= scheduleWeekRange[0] && el.dateDate <= scheduleWeekRange[1])} weekDayRange={scheduleWeekRange}/>
                </LoadingContainer>
            </div>
        </PersonalDefaultPage>
    )
}