import {color_red_default, color_white} from "../../../../../constants/colors";
import {BsQuestionCircle} from "react-icons/bs";
import {OnestBold, OnestBoldSmall, OnestNormal} from "../../../../styled/TextComponents";
import {Button} from "../../../../controls/Button/Button";
import {FONT_SIZE_SMALL} from "../../../../../constants/fontSizes";
import React from "react";
import {styles} from "./Styles";
import {ModalDefault} from "../../../../containers/ModalDefault";

export const ProfileImageDeletingSubmitModal = ({isShown, onRequestClose, onSubmit, onDecline}) => {
    return (
        <ModalDefault isOpen={isShown} onRequestClose={() => onRequestClose}>
            <div style={{...styles.imageUpdatingSubmitContainer}}>
                <div style={{...styles.imageUpdatingSubmitInfoContainer}}>
                    <BsQuestionCircle fontSize={20}/>
                    <OnestBold>Удалить фото</OnestBold>
                    <OnestBoldSmall>Отменить это действие будет невозможно</OnestBoldSmall>
                </div>
                <div style={{...styles.imageUpdatingSubmitButtonsContainer}}>
                    <div onClick={() => onSubmit()}>
                        <Button outline={false} width={225} height={40} active={true} backgroundColor={color_red_default}
                                color={color_white} borderColor={null} fontSize={FONT_SIZE_SMALL}>
                            <OnestNormal>Да, удалить</OnestNormal>
                        </Button>
                    </div>
                    <div onClick={() => onDecline()}>
                        <Button outline={true} width={225} height={40} active={true} backgroundColor={color_white}
                                color={color_red_default} borderColor={color_red_default} fontSize={FONT_SIZE_SMALL}>
                            <OnestNormal>Нет, не удалять</OnestNormal>
                        </Button>
                    </div>
                </div>
            </div>
        </ModalDefault>
    )
}