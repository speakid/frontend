import PersonalDefaultPage from "./PersonalDefaultPage";
import {useSelector} from "react-redux";
import {LevelPreview} from "../../components/blocksl/LevelPreview";
import {BsArrowRight} from "react-icons/bs";
import {CgSpinner} from "react-icons/cg";
import {
    OnestBoldDefault,
    OnestNormalDefault,
    OnestSemiBoldBig,
    OnestSemiBoldDefault
} from "../../components/styled/TextComponents";
import {PiSpinner} from "react-icons/pi";
import {color_white} from "../../constants/colors";
import {RotatingLines} from "react-loader-spinner";

const UpdatesPreview = () => {
    return (
        <div style={{
            width: 501,
            height: 160,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: color_white,
            borderRadius: 20,
            gap: 10
        }}>
            <RotatingLines
              visible={true}
              height="25"
              width="25"
              strokeColor="black"
              strokeWidth="1"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
            <OnestSemiBoldDefault style={{fontSize: 24}}>Скоро тут что-то будет</OnestSemiBoldDefault>
        </div>
    )
}

export const Updates = () => {
    return (
        <PersonalDefaultPage>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                padding: 50,
                gap: 30,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center"
            }}>
                <UpdatesPreview/>
            </div>
        </PersonalDefaultPage>
    )
}