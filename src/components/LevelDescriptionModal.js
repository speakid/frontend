import {color_grey_ultra_light, color_white} from "../constants/colors";
import {BsXLg} from "react-icons/bs";
import {OnestBoldBig, OnestBoldDefault, OnestNormalDefault} from "./styled/TextComponents";
import ReactMarkdown from "react-markdown";
import {ModalDefault} from "./containers/ModalDefault";


const LevelDescriptionHeader = ({level, closeCallBack}) => {
    return (
        <div style={{
            width: "100%",
            height: 190,
            backgroundColor: color_grey_ultra_light,
            display: "flex",
            flexDirection: "row",
            padding: 40,
            boxSizing: "border-box",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <OnestBoldDefault>Level</OnestBoldDefault>
                <OnestBoldBig style={{fontSize: 60}}>{level}</OnestBoldBig>
            </div>
            <div style={{flexGrow: 1}}/>
            <div style={{cursor: "pointer"}} onClick={()=>closeCallBack()}><BsXLg/></div>
        </div>
    )
}

const LevelDescriptionBody = ({summary}) => {
    return (
        <div style={{
            padding: 40,
            display: "flex",
            flexDirection: "column",
        }}>
            <OnestBoldDefault>Summary:</OnestBoldDefault>
            <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
    )
}

export const LevelDescriptionModal = ({level, summary, isOpen, closeModalCallback}) => {
    return (
        <ModalDefault onRequestClose={()=>closeModalCallback()} isOpen={isOpen}>
            <div style = {{
                width: 1036,
                height: "min-content",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                backgroundColor: color_white
            }}>
                <LevelDescriptionHeader level={level} closeCallBack={()=>closeModalCallback()}/>
                <LevelDescriptionBody summary={summary}/>
            </div>
        </ModalDefault>
    )
}