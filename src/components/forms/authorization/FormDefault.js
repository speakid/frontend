import "../../../fonts/FontFaces.css";

import {
    OnestBoldBig,
    OnestNormalDefault,
} from "../../styled/TextComponents";


const FormDefault = ({
                         children,
                         onSubmit,
                         title = null,
                         description = null,
                         formWidth = 350,
                         borderRadius = 20,
                         style={
                            display: "inline-flex",
                            flexDirection: "column",
                            padding: 30,
                            backgroundColor: "#FFFFFF",
                            color: "black",
                            alignItems: "center",
                            width: formWidth,
                            boxSizing: "border-box",
                            borderRadius: borderRadius,
                            gap: 30
                        }
                     },

) => {

    return (
        <form
            style={style}
            onSubmit={onSubmit}
        >
            <div style={{marginRight: "auto", width: "fit-content", fontSize: 32}}>
                <OnestBoldBig>{title}</OnestBoldBig>
            </div>
            {description?
                <div style={{marginRight: "auto", width: "fit-content", fontSize: 16, textAlign: "left"}}>
                    <OnestNormalDefault>{description}</OnestNormalDefault>
                </div>
                : null
            }
            {children}
        </form>
    )
}

export default FormDefault