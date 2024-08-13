import {
    color_grey_light,
    color_grey_ultra_light,
    color_red_default,
    color_transparent,
    color_white
} from "../../constants/colors";
import {OnestNormalDefault, OnestSemiBoldDefault} from "../styled/TextComponents";
import {BsArrowRight, BsQuestion} from "react-icons/bs";
import styled, {keyframes} from "styled-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const keyFrames = keyframes`
    from {
        background-position: 128% -40%;
    }
    50% {
        background-position: 128% 0%;
    }
    to {
        background-position: 128% -40%;
    }
`

const BouncingDiv = styled.div`
    animation-name: "bounce-background";
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation: ${props=>props.bouncing? keyFrames : null} 2s ease-in-out infinite;
`

export const LevelPreview = ({levelData, openLevelDescription}) => {
    const [bouncing, setBouncing] = useState(false);
    const navigate = useNavigate();

    return (
        <BouncingDiv
            bouncing={bouncing}
            onMouseEnter={()=>setBouncing(true)}
            onMouseLeave={()=>setBouncing(false)}
            style={{
            display: "flex",
            width: 326,
            height: 270,
            backgroundColor: color_white,
            borderRadius: 20,
            flexDirection: "column",
            padding: 25,
            boxSizing: "border-box",
            backgroundImage: `url(https://i.ibb.co/Y3ZFdC3/Rectangle-3463809.png)`,
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "128% -40%",
            justifyContent: "space-between",
            // animationName: "bounce-background",
            // animationTimingFunction: "ease-in-out",
            // animationDuration: "2s",
            // animationIterationCount: "infinite",
            // animation: `${bounse} 2s linear infinite`
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                height: 158
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <OnestSemiBoldDefault style={{fontSize: 25}}>Level</OnestSemiBoldDefault>
                    <span style={{
                        color: color_grey_light,
                        fontSize: 96
                    }}>{levelData.level === 0 ? levelData.level : "0" + levelData.level}</span>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: 20
            }}>
                <div style={{
                    height: 42,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 20,
                    backgroundColor: color_grey_ultra_light,
                    padding: "0px 10px",
                    minHeight: "max-content"
                }}>
                    <OnestNormalDefault>Age: {levelData.age}</OnestNormalDefault>
                </div>
                {/*<div style={{flexWrap: 1}}></div>*/}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5
                }}>
                    <div style={{
                        backgroundColor: color_white,
                        border: `1px solid ${color_red_default}`,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        width: 40,
                        height: 40,
                        color: color_red_default,
                        fontSize: 30,
                        cursor: "pointer"
                    }} onClick={()=>openLevelDescription(levelData.level, levelData.summary)}>
                        <BsQuestion/>
                    </div>
                    <div style={{
                        backgroundColor: color_red_default,
                        border: `1px solid ${color_transparent}`,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        width: 40,
                        height: 40,
                        color: color_white,
                        fontSize: 30,
                        cursor: "pointer",
                    }} onClick={()=>navigate(`/service/program/level/${levelData.id}`)}>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>

        </BouncingDiv>
    )
}