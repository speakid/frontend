import {OnestNormalDefault, OnestNormalSmall} from "../../styled/TextComponents";
import {FormInput} from "./Styled";
import InputMask from "react-input-mask";


export const FormPhoneInput = ({
    placeholder = "+7 (___) ___ __ __",
    title,
    defaultValue,
    register,
    inputBackgroundColor = null,
    required = false
}) => {
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
                    <InputMask
                        mask="+7 (999) 999 99 99"
                        defaultValue={defaultValue}
                        {...register}
                        required={required}
                        placeholder={placeholder || "+7 (999) 999 99 99"}
                        style={{
                            width: "350px",
                            height: "50px",
                            borderRadius: "5px",
                            border: "1px solid transparent",
                            backgroundColor: "#F5F5F5",
                            outline: "none"
                        }}
                    />
                </OnestNormalDefault>
            </div>
        </OnestNormalDefault>
    );
};
