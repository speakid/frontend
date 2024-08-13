import PersonalDefaultPage from "./PersonalDefaultPage";
import {useSelector} from "react-redux";
import {
    OnestBoldBig,
    OnestBoldMed,
    OnestNormal, OnestNormalBig,
    OnestNormalDefault,
    OnestNormalMed
} from "../../components/styled/TextComponents";
import {color_black, color_grey_dark, color_grey_light, color_white} from "../../constants/colors";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";

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

// const ScheduleDay

const ScheduleCalendar = ({schedule}) => {
    return (
        <div>

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
            </div>
        </PersonalDefaultPage>
    )
}