import { OnestBoldBig, OnestNormalDefault, OnestNormalSmall } from "../styled/TextComponents"
import {BsThreeDotsVertical} from "react-icons/bs";


export const IconInfoBigBlock = ({icon, backgroundColor, iconBackgroundColor, title, text, addCharToValue = null, onClick = null}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: backgroundColor,
            borderRadius: 20,
            padding: 15,
            boxSizing: "border-box",
            width: 155,
            height: 155,
        }}>
            <div style={{
                display: "flex",
                gap: 10,
            }}>
                <div style={{
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    backgroundColor: iconBackgroundColor,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                }}>
                    <img src={icon}/>
                </div>
                <div style={{width: 90}}><OnestNormalSmall>{title}</OnestNormalSmall></div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <OnestBoldBig>{text}{addCharToValue || ""}</OnestBoldBig>
                {onClick !== null?
                    <div style={{
                        padding: 5,
                        cursor: "pointer"
                    }} onClick={()=>onClick()}>
                        <BsThreeDotsVertical style={{fontSize: 20}}/>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}