import React, {useRef, useState} from "react";
import {color_red_default, color_white} from "../../../../../constants/colors";
import {ModalDefault} from "../../../../containers/ModalDefault";
import {BsFillPencilFill, BsFillTrash3Fill} from "react-icons/bs";
import {Link} from "../../../../styled/TextComponents";

import {ProfileImageDeletingSubmitModal} from "../profileImageUpdatingSubmit/ProfileImageDeletingSubmitModal";
import {styles} from "./Styles";
import {useDispatch, useSelector} from "react-redux";
import Config from "../../../../../Config";
import axios from "axios";
import {setUser, updateUser} from "../../../../../store/UserSlice";

export const ProfileImageUpdating = () => {
    const [imageDeleting, setImageDeleting] = useState(false);

    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const inputFile = useRef(null);

    function toggleImageDeleting(){
        if(user.image === process.env.PUBLIC_URL + "/no_profile_icon.png"){
            alert("Для вашего профиля не установлено изображение. Нечего удалять.")
            return
        }
        setImageDeleting(true)
    }

    function uploadNewImage(){
        inputFile.current.click();
    }

    function imageSelectedHandler(e){
        let fileObj = e.target.files[0]
        console.log("fileObj", fileObj)
        const formData = new FormData();
        formData.append("file", fileObj, fileObj.name);

        const headers = {'Content-Type': 'multipart/form-data'}

        axios.post(Config.BACKEND_ADDR + "/cloud/put_file", formData, {headers: headers}).then(res=>{
            axios.patch(Config.BACKEND_ADDR + `/auth/user/${user.id}`, {
                    image: res.data.file_id
                }).then(()=>{dispatch(updateUser({"image": Config.CLOUD_ADDR + "/" + res.data.file_id}))}).catch(()=> {
                    alert("Ошибка обновления данных")
                })

        }).catch(()=> {
                    alert("Ошибка обновления данных")
        })
    }

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
            <div style={{...styles.profileImageUpdatingActionContainer}} onClick={() => toggleImageDeleting()}>
                <div style={{...styles.profileImageUpdatingActionIcon}}> <BsFillTrash3Fill/> </div>
                <Link>Удалить</Link>
            </div>

            {/*Image circle*/}
            <img style={{...styles.profileImageUpdatingImageCircle}} src={user.image} alt={"profileImage"}/>

            {/*Image updating button*/}
            <div style={{...styles.profileImageUpdatingActionContainer}} onClick={()=>uploadNewImage()}>
                <div style={{...styles.profileImageUpdatingActionIcon}}> <BsFillPencilFill/> </div>
                <Link>Изменить</Link>
                <input accept="image/png, image/gif, image/jpeg" type='file' id='file' ref={inputFile} style={{display: 'none'}}  onChange={(e)=>imageSelectedHandler(e)}/>
            </div>
        </div>
    )
}