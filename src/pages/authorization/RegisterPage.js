import RecoveryForm from "../../components/forms/authorization/RecoveryForm";
import AuthorizationBase from "./AuthorizationBase";
import RegisterForm from "../../components/forms/authorization/RegisterForm";
import registerImage from "../../images/Экран регистрации.svg"

const RegisterPage = () => {
    return(
        <AuthorizationBase image={registerImage}>
            <RegisterForm/>
        </AuthorizationBase>
    )
}

export default RegisterPage