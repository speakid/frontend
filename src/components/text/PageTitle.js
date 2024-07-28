import {OnestSemiBoldBig} from "../styled/TextComponents";

export const PageTitle = ({title}) => {
    return (
        <div style={{
            width: "100%"
        }}>
            <OnestSemiBoldBig>{title}</OnestSemiBoldBig>
        </div>
    )
}