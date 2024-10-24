import DefaultContainer from "../containers/DefaultContainer";
import {Link, OnestSemiBoldBig} from "../styled/TextComponents";
import {ButtonOutlined} from "../controls/Button/ButtonOutlined";
import {
    color_grey_light,
    color_red_default,
    color_red_light,
    color_transparent,
    color_white
} from "../../constants/colors";
import {BsArrowRight, BsBoxArrowLeft, BsFillPencilFill, BsFillTrash3Fill, BsPencil, BsTrash} from "react-icons/bs";
import React, {useState} from "react";
import ReactModal from "react-modal";
import {FormTextInput} from "../inputs/FormTextInput/FormTextInput";
import {Button} from "../controls/Button/Button";



export const ImageBlock = ({imageLink, profileName, changeButtonHandler}) => {

    return (
        <DefaultContainer width={null} height={null}
        >
            <div style={{
                display: "flex",
                flexDirection: "row",
                // width: "100%",
                height: "100%",
                boxSizing: "border-box",
                gap: 25
            }}>
                <img
                    style={{
                        width: 140,
                        height: 140,
                        borderRadius: "50%"
                    }}
                    alt={"Profile"}
                    src={imageLink}
                />

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "center"
                }}>
                    {profileName.split(" ").map(el => {
                        return <OnestSemiBoldBig>{el}</OnestSemiBoldBig>
                    })}
                </div>
                <div style={{flexGrow: 1}}/>
                <div onClick={()=>changeButtonHandler()}>
                    <ButtonOutlined width={163} height={30} active={true} borderColor={color_grey_light}
                                color={color_grey_light} fontSize={14}
                    >Изменить профиль <BsArrowRight/>
                    </ButtonOutlined>
                </div>
            </div>
        </DefaultContainer>
    )
}