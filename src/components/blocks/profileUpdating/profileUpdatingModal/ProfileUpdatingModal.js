import React from "react";
import {ModalDefault} from "../../../containers/ModalDefault";
import {ProfileImageUpdating} from "../ImageUpdating/profileImageUpdating/ProfileImageUpdating";
import {ProfileDataUpdatingBlock} from "../dataUpdating/ProfileDataUpdatingBlock";
import {styles} from "./Styles";

export const ProfileUpdatingModal = ({isOpen, onRequestClose}) => {

    return (
        <ModalDefault isOpen={isOpen} onRequestClose={()=>onRequestClose()}>
            <div style={{
                ...styles.modalContainer
            }}>
                <ProfileImageUpdating/>
                <ProfileDataUpdatingBlock id={0} name={"Максим Зубков"} email={"maksim.zubkov1234@gmail.com"}
                                          phoneNumber={"+7-908-604-11-81"} timeZone={"GMT +3"} password={"123456"} onRequestClose={()=>onRequestClose()}/>
            </div>
        </ModalDefault>
    )
}