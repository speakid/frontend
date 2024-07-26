import { OnestBoldBig, OnestNormalDefault, OnestNormalSmall } from "../styled/TextComponents"


export const IconInfoBigBlock = ({icon, backgroundColor, iconBackgroundColor, title, text}) => {
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
                    justifyContent: "center"
                }}>
                    <img src={icon}/>
                </div>
                <div style={{width: 90}}><OnestNormalSmall>{title}</OnestNormalSmall></div>
            </div>
            <OnestBoldBig>{text}</OnestBoldBig>
        </div>
    )
}