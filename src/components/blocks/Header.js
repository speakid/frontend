import "../../fonts/FontFaces.css"
import {Link} from "../styled/TextComponents";
import Logo from "../Logo";

const Header = () =>{
    return(
        <header style={{
            width: "90%",
            height: 60,
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            margin: "auto"

        }}>
            <Logo/>
            <div><Link href={"/"}>Помощь</Link></div>

        </header>
    )
}

export default Header