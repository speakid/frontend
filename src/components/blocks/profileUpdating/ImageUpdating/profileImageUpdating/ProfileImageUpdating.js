import React, {useState} from "react";
import {color_red_default, color_white} from "../../../../../constants/colors";
import {ModalDefault} from "../../../../containers/ModalDefault";
import {BsFillPencilFill, BsFillTrash3Fill} from "react-icons/bs";
import {Link} from "../../../../styled/TextComponents";

import {ProfileImageDeletingSubmitModal} from "../profileImageUpdatingSubmit/ProfileImageDeletingSubmitModal";
import {styles} from "./Styles";

export const ProfileImageUpdating = ({id, image}) => {
    const [imageDeleting, setImageDeleting] = useState(false);

    return (
        <div style={{...styles.profileImageUpdatingContainer}}>
            {/*Image deleting submit modal*/}
            <ProfileImageDeletingSubmitModal
                isShown={imageDeleting}
                onRequestClose={()=>setImageDeleting(false)}
                onSubmit={() => {}}
                onDecline={() => setImageDeleting(false)}
            />
            {/*Image deleting button*/}
            <div style={{...styles.profileImageUpdatingActionContainer}} onClick={() => setImageDeleting(true)}>
                <div style={{...styles.profileImageUpdatingActionIcon}}> <BsFillTrash3Fill/> </div>
                <Link>Удалить</Link>
            </div>

            {/*Image circle*/}
            <img style={{...styles.profileImageUpdatingImageCircle}} src={image} alt={"profileImage"}/>

            {/*Image updating button*/}
            <div style={{...styles.profileImageUpdatingActionContainer}}>
                <div style={{...styles.profileImageUpdatingActionIcon}}> <BsFillPencilFill/> </div>
                <Link>Изменить</Link>
            </div>
        </div>
    )
}