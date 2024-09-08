import RecoveryForm from "../../components/forms/authorization/RecoveryForm";
import AuthorizationBase from "./AuthorizationBase";
import {useState} from "react";
import RecoverySubmitForm from "../../components/forms/authorization/RecoverySubmitForm";
import {useParams, useSearchParams} from "react-router-dom";

const RecoverySendedMessage = () => {
    return (
        <div>
            Сообщение отправлено
        </div>
    )
}

const RecoveryPage = () => {
    const [params] = useSearchParams();
    const token = params.get("token")

    return(
        <AuthorizationBase>
            {
                [undefined, null].includes(token)?
                    <RecoveryForm/>
                    :
                    <RecoverySubmitForm token={token}/>
            }

        </AuthorizationBase>
    )
}

export default RecoveryPage