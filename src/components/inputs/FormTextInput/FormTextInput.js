import {OnestNormalDefault, OnestNormalSmall} from "../../styled/TextComponents";

import {FormInput} from "./Styled";

export const FormTextInput = ({placeholder, type, title, valueContainer, onChange}) => {
    return (
        <OnestNormalDefault weight={"normal"}>
            <div
                style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: 10,
                    fontSize: 14
                }}
            >
                <OnestNormalSmall>{title}</OnestNormalSmall>
                <OnestNormalDefault>
                    <FormInput
                        placeholder={placeholder}
                        type={type}
                        value={valueContainer}
                        onChange={(e)=>onChange(e.target.value)}
                    />
                </OnestNormalDefault>
            </div>
        </OnestNormalDefault>
    )
}


export const NewFormTextInput = ({placeholder, type, title, defaultValue, register, pattern, inputBackgroundColor = null, required = false}) => {
    return (
        <OnestNormalDefault weight={"normal"}>
            <div
                style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: 10,
                    fontSize: 14
                }}
            >
                <OnestNormalSmall>{title}</OnestNormalSmall>
                <OnestNormalDefault>
                    <FormInput
                        {...register}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        type={type}
                        required={required}
                        style={{
                            backgroundColor: inputBackgroundColor
                        }}
                    />
                </OnestNormalDefault>
            </div>
        </OnestNormalDefault>
    )
}