import {color_white} from "../../constants/colors";
import {OnestNormalSmall, OnestSemiBoldMed} from "../styled/TextComponents";

export const IconInfoBlock = ({imageLink, title, description}) => {
    return (
        <div style={{
            width: 230,
            height: 130,
            backgroundColor: color_white,
            borderRadius: 20,
            alignContent: "center",
            margin: "auto"

        }}>
            <div style={{
                width: 200,
                height: 65,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>
                <img style={{width: 65, height: 65}} src={imageLink} alt={"img"}/>
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <OnestSemiBoldMed>{title}</OnestSemiBoldMed>
                    <OnestNormalSmall>{description}</OnestNormalSmall>
                </div>
            </div>
        </div>
    )
}