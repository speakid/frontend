import "../../fonts/FontFaces.css"
import {Link} from "../styled/TextComponents";
import Logo from "../Logo";
import {useNavigate} from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();

    return(
        <header style={{
            width: "90%",
            height: 60,
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            margin: "auto"

        }}>
            <div style={{cursor: "pointer"}} onClick={()=>navigate("/auth/login")}><Logo/></div>
            <div><Link href={"/"}>Помощь</Link></div>

        </header>
    )
}

export default Header