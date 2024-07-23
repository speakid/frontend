import RecoveryForm from "../../components/forms/authorization/RecoveryForm";
import AuthorizationBase from "./AuthorizationBase";
import {useState} from "react";
import RecoverySubmitForm from "../../components/forms/authorization/RecoverySubmitForm";

const RecoveryPage = () => {
    const recoveryCodeSended = useState(true);

    return(
        <AuthorizationBase>
            {recoveryCodeSended? <RecoverySubmitForm/> : <RecoveryForm/>}
        </AuthorizationBase>
    )
}

export default RecoveryPage