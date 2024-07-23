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
                <ProfileImageUpdating image={"https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                <ProfileDataUpdatingBlock id={0} name={"Максим Зубков"} email={"maksim.zubkov1234@gmail.com"}
                                          phoneNumber={"+7-908-604-11-81"} timeZone={"GMT +3"} password={"123456"}/>
            </div>
        </ModalDefault>
    )
}