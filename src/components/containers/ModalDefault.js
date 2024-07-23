import ReactModal from "react-modal";
import {color_transparent} from "../../constants/colors";
import React from "react";

export const ModalDefault = ({
    children,
    isOpen,
    onRequestClose = () => {},
    onAfterOpen = () => {}
}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => {onRequestClose()}}
            onAfterOpen={()=>onAfterOpen()}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: "blur(8px)",
                    overflow: "scroll"
                },
                content: {
                    backgroundColor: color_transparent,
                    borderColor: color_transparent,
                    width: "min-content",
                    height: "min-content",
                    margin: "0 auto"
                }
            }}
        >
            {children}
        </ReactModal>
    )
}