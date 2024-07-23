import Header from "../../components/blocks/Header";
import authorizationImage from "../../images/Экран авторизации.svg";
import LoginForm from "../../components/forms/authorization/LoginForm";
import Footer from "../../components/blocks/Footer";
import DefaultPage from "../../components/containers/DefaultPage";
import AuthorizationBase from "./AuthorizationBase";

const LoginPage = () => {
    return(
        <AuthorizationBase>
            <LoginForm/>
        </AuthorizationBase>
    )
}

export default LoginPage