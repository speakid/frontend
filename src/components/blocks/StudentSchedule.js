import { color_black, color_grey_dark, color_grey_light, color_grey_ultra_light, color_transparent, color_white } from "../../constants/colors";
import { Button } from "../controls/Button/Button";
import { OnestNormalDefault } from "../styled/TextComponents";
import { BlockTitle } from "../text/BlockTitle";
import {useDispatch, useSelector} from "react-redux";

async function getStudentData(studentId) {
    await new Promise(r => setTimeout(r, 1500));
    return {
        "studentId": studentId,
        "lessonPrice": 20,
        "studentBalance": 200,
        "payedLessons": parseInt(201/20),
        "name": "Миша Смирнов",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                time: "15:30 - 16:30"
            }
        ],
        lessonsProgram: [
            {
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0"
            },
            {
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0"
            },
            {
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0"
            },
        ]
    }
}

const StudentScheduleBlock = ({text}) => {
    return (
        <div style={{
            width: 270,
            height: 40,
            borderRadius: 10,
            backgroundColor: color_grey_ultra_light,
            color: color_black,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10
        }}> 
            <OnestNormalDefault>{text}</OnestNormalDefault>
        </div>
    )
}

export const StudentSchedule = () => {
    const student = useSelector(state=>state.student);
    const dispatch = useDispatch();

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: 600,
            // minHeight: 191,
            borderRadius: 20,
            padding: 25,
            backgroundColor: color_white,
            boxSizing: "border-box",
            gap: 20,
            // overflow: "scroll"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <BlockTitle title={"Расписание занятий"}/>
                <Button 
                    active={true}
                    backgroundColor={color_transparent}
                    borderColor={color_grey_light}
                    width={170}
                    height={25}
                    fontSize={12}
                    color={color_grey_dark}
                >Открыть календарь</Button>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 10
            }}>
                {student.lessonsSchedule.map(el => {
                    return (
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 10
                        }}>
                            <StudentScheduleBlock text={el.weekDay}/>
                            <StudentScheduleBlock text={el.time}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}