import { BsCheck2, BsXLg } from "react-icons/bs"
import {
    color_green,
    color_green_light,
    color_grey_dark,
    color_grey_light,
    color_grey_ultra_light,
    color_transparent,
    color_white
} from "../../constants/colors"
import { OnestBoldDefault, OnestNormalDefault } from "../styled/TextComponents"
import { BlockTitle } from "../text/BlockTitle"
import { Button } from "../controls/Button/Button"
import {useDispatch, useSelector} from "react-redux";
import {updateStudent} from "../../store/StudentSlice";

const StudentLessonText = ({title, level}) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 5
        }}>
            <OnestBoldDefault>{title}</OnestBoldDefault>
            <OnestNormalDefault>{level}</OnestNormalDefault>
        </div>
    )
}

const StudentLesson = ({lessonData}) => {
    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();


    return (
        <div style={{
            width: 550,
            display: "flex",
            flexDirection: "row",
            gap: 10
        }}>
            <img src={lessonData.image} alt={"lessonImae"} style={{
                width: 176,
                height: 104,
                borderRadius: 20
            }}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <StudentLessonText title={lessonData.name} level={lessonData.level}/>
                <div style={{
                    width: 28,
                    height: 28,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: lessonData.completed? color_green_light : color_grey_ultra_light
                }}>
                    <BsCheck2 style={{color: lessonData.completed? color_green : color_grey_light}} onClick={()=>{
                        console.log(lessonData)
                        let studentCopy = JSON.parse(JSON.stringify(student))
                        studentCopy.lessonsProgram = studentCopy.lessonsProgram.map(el=> {
                            if(el.id === lessonData.id){

                                el.completed = !el.completed
                                return el
                            }
                            return el
                        })
                        dispatch(updateStudent(studentCopy))
                    }}/>
                </div>
            </div>
            <div style={{flexGrow: 1}}/>
            <div style={{cursor: "pointer"}} onClick={()=>{
                let studentCopy = {...student}
                studentCopy.lessonsProgram = studentCopy.lessonsProgram.filter(el=>el.id !== lessonData.id)
                dispatch(updateStudent(studentCopy))
            }}>
                <BsXLg/>
            </div>
        </div>
    )
}

export const StudentLessonsProgram = () => {
    const student = useSelector(state=>state.student);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: 600,
            minHeight: 450,
            borderRadius: 20,
            padding: 25,
            backgroundColor: color_white,
            boxSizing: "border-box",
            gap: 20,
            overflow: "scroll"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <BlockTitle title={"Программа занятий"}/>
                <Button
                    active={true} 
                    backgroundColor={color_transparent}
                    borderColor={color_grey_light}
                    width={170}
                    height={25}
                    fontSize={12}
                    outline={false}
                    color={color_grey_dark}
                >Изменить программу</Button>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 10
            }}>
                {student.lessonsProgram.map(el=><StudentLesson lessonData={el}/>)}
            </div>
        </div>
    )
} 