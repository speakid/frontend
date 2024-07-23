import {OnestSemiBoldMed} from "../styled/TextComponents";

export const BlockTitle = ({title}) => {
    return (
        <div style={{
            width: "100%"
        }}>
            <OnestSemiBoldMed>{title}</OnestSemiBoldMed>
        </div>
    )
}