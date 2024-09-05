import RecoveryForm from "../../components/forms/authorization/RecoveryForm";
import AuthorizationBase from "./AuthorizationBase";
import {useState} from "react";
import RecoverySubmitForm from "../../components/forms/authorization/RecoverySubmitForm";

const RecoveryPage = () => {
    const [recoveryCodeSended, setRecoveryCodeSended] = useState(false);

    return(
        <AuthorizationBase>
            {recoveryCodeSended === false? <RecoveryForm onSubmit={()=>setRecoveryCodeSended()}/> : <RecoverySubmitForm/>}
        </AuthorizationBase>
    )
}

export default RecoveryPage