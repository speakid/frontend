import ReactModal from 'react-modal';
import React from "react";

const ModalContainer = ({children}) => {
    return (
        <ReactModal>
            {children}
        </ReactModal>
    )
}