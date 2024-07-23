import Logo from "../Logo";
import {Link, OnestNormalMed} from "../styled/TextComponents";
import {color_black, color_black_light, color_white} from "../../constants/colors";

const Footer = () => {
    return (
        <footer style={{
            width: "100%",
            height: "130px",
            backgroundColor: color_black_light,
            display: "flex",
            padding: "50px",
            justifyContent: "space-between",
            boxSizing: "border-box",
            gap: "40px"
        }}>
            <Logo baseColor={color_white}/>
            <div style={{flexGrow: 1}}/>
            <OnestNormalMed><Link href={"/"}>Публичная оферта</Link></OnestNormalMed>
            <OnestNormalMed><Link href={"/"}>Политика конфиденциальности</Link></OnestNormalMed>
            <OnestNormalMed><div style={{color: color_white}}>© SPEAKID, 2023</div></OnestNormalMed>
        </footer>
    )
}

export default Footer