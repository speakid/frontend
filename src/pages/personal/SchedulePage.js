import PersonalDefaultPage from "./PersonalDefaultPage";
import {useSelector} from "react-redux";
import {
    OnestBoldBig, OnestBoldDefault,
    OnestBoldMed,
    OnestNormal, OnestNormalBig,
    OnestNormalDefault,
    OnestNormalMed, OnestNormalSmall, OnestSemiBoldDefault
} from "../../components/styled/TextComponents";
import {
    color_black, color_blue, color_blue_light, color_green, color_green_light,
    color_grey_dark,
    color_grey_light,
    color_red_default,
    color_red_light, color_red_ultra_light,
    color_white, color_yellow, color_yellow_light
} from "../../constants/colors";
import {BsArrowLeft, BsArrowRight, BsArrowsAngleExpand, BsArrowsExpand, BsClock, BsDoorOpen} from "react-icons/bs";

const ScheduleHeader = () => {
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
                <OnestBoldBig>2024,<span> </span></OnestBoldBig>
                <OnestNormalBig style={{color: color_grey_dark}}>Июль</OnestNormalBig>
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
                    fontSize: 20
                }}>
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
                    padding: 5
                }}>
                    <OnestNormalDefault>12 АВГ — 18 АВГ</OnestNormalDefault>
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
                    fontSize: 20
                }}>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
    )
}

const ScheduleDayheader = ({weekday, lessonsCount}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            width: "100%"
        }}>
            <OnestBoldDefault>{weekday}</OnestBoldDefault>
            <OnestNormalDefault>*</OnestNormalDefault>
            <OnestNormalDefault>{lessonsCount} урока</OnestNormalDefault>
        </div>
    )
}

const ScheduleDayBodyHeader = ({day}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <OnestBoldBig>{day}</OnestBoldBig>
            <div style={{
                width: 20,
                height: 20,
                backgroundColor: color_red_default,
                color: color_white,
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                fontSize: 13
            }}>
                <BsArrowsAngleExpand/>
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
            <OnestSemiBoldDefault>{lessonData.studentName}</OnestSemiBoldDefault>
            <OnestNormalDefault style={{color: lessonStatusColor}}>{lessonData.paymentStatus}</OnestNormalDefault>
            <div style={{
                width: "90%",
                height: 28,
                backgroundColor: color_white,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row"
            }}>
                <BsClock/>
                <OnestNormalSmall>{lessonData.timeSlot}</OnestNormalSmall>
            </div>
        </div>
    )
}

const ScheduleDayBody = ({day, lessons}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: color_white,
            width: "100%",
            height: "100%",
            gap: 5,
            overflow: "scroll",
            padding: 10

        }}>
            <ScheduleDayBodyHeader day={day}/>
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
            width: 146,
            height: 781,

        }}>
            <ScheduleDayheader weekday={weekday} lessonsCount={lessons.length}/>
            <div style={{
                width: "100%",
                height: "100%",
                backgroundColor: color_white
            }}>
                <ScheduleDayBody day={day} lessons={lessons}/>
            </div>
        </div>
    )
}

const ScheduleCalendar = ({schedule}) => {
    return (
        <div>
            <ScheduleDay weekday={"ПН"} day={"01"} lessons={schedule}/>
        </div>
    )
}

export const SchedulePage = () => {
    const schedule = useSelector(state => state.schedule);

    return (
        <PersonalDefaultPage>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%"
            }}>
                <ScheduleHeader/>
                <ScheduleCalendar schedule={schedule}/>
            </div>
        </PersonalDefaultPage>
    )
}