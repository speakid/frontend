import {color_grey_dark, color_grey_light, color_grey_ultra_light} from "../../constants/colors";
import {OnestNormalBig, OnestNormalMed} from "../styled/TextComponents";

const NoContentPlaceholder = ({noDataText}) => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            backgroundColor: color_grey_light,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                height: "min-content",
                color: color_grey_ultra_light,
                textAlign: "center",
            }}>
                <OnestNormalMed>{noDataText}</OnestNormalMed>
            </div>
        </div>
    )
}


export default NoContentPlaceholder