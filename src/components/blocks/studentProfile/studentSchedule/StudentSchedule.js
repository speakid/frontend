import React, { useState } from "react";
import { styles } from "./styles";
import { Button } from "../../../controls/Button/Button";
import { OnestBoldSmall, OnestNormalDefault, OnestNormalSmall } from "../../../styled/TextComponents";
import { color_red_default, color_white } from "../../../../constants/colors";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Config from "../../../../Config";
import {updateStudent} from "../../../../store/StudentSlice";
import {addZeroToTime, weekDayToFullWeekName} from "../../../../pages/personal/JournalPage";

const WeekdaySelectorButtons = ({ selectedWeekdays, onToggleWeekday }) => {
    const englishLevels = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

    return (
        <div style={{ ...styles.infoEditContainer }}>
            <OnestBoldSmall>День недели</OnestBoldSmall>
            <div style={{ ...styles.weekdaySelectorContainer }}>
                {englishLevels.map(el => (
                    <div key={el}>
                        <input
                            style={{ display: "none" }}
                            type="checkbox"
                            id={el}
                            checked={selectedWeekdays.includes(el)}
                            onChange={() => onToggleWeekday(el)}
                        />
                        <label
                            style={{
                                ...styles.weekDaySelectorButton,
                                ...(selectedWeekdays.includes(el) && styles.weekDaySelectorButtonActive)
                            }}
                            htmlFor={el}
                        >
                            <OnestNormalSmall>{el}</OnestNormalSmall>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

const WeekdayTimeSelector = ({ selectedWeekdays, selectedTimes, onTimeChange }) => {
    const timeSlots = [...Array(23).keys()].map(el => {
        return [`${`${el}`.padStart(2, "0")}:00 - ${`${el}`.padStart(2, "0")}:30`, `${`${el}`.padStart(2, "0")}:30 - ${`${el + 1}`.padStart(2, "0")}:00`];
    }).flat();
    return (
        <div style={{ ...styles.timeSelectContainer }}>
            {selectedWeekdays.map(weekday => (
                <div style={{ ...styles.infoEditContainer }} key={weekday}>
                    <OnestBoldSmall>Время занятия ({weekday})</OnestBoldSmall>
                    <select
                        value={selectedTimes[weekday] || ""}
                        onChange={e => onTimeChange(weekday, e.target.value)}
                        style={{ ...styles.timeSelect }}
                    >
                        <option value="" disabled>Выберите слот для занятия</option>
                        {timeSlots.map(el => (
                            <option key={el} value={el} style={{ ...styles.timeSelectOption }}>{el}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export const StudentScheduleEdit = () => {
    const student = useSelector(state => state.student);
    const dispatch = useDispatch();

    const [selectedWeekdays, setSelectedWeekdays] = useState(student.lessonsSchedule.map(el => el.weekDayShort));
    console.log("lessonsSchedule: ", student.lessonsSchedule)
    const [selectedTimes, setSelectedTimes] = useState(
        student.lessonsSchedule.reduce((acc, lesson) => {
            acc[lesson.weekDayShort] = lesson.time;
            return acc;
        }, {})
    );

    const handleToggleWeekday = (weekday) => {
        setSelectedWeekdays(prev =>
            prev.includes(weekday)
                ? prev.filter(wd => wd !== weekday)
                : [...prev, weekday]
        );
    };

    const handleTimeChange = (weekday, time) => {
        setSelectedTimes(prev => ({
            ...prev,
            [weekday]: time
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(student.studentId === -1){
            alert("Сначала заполните профиль и сохраните его!")
            return
        }

        const weekDayToNumber = {
            "ПН": 1,
            "ВТ": 2,
            "СР": 3,
            "ЧТ": 4,
            "ПТ": 5,
            "СБ": 6,
            "ВС": 7
        }


        console.log("selectedTimes: ", selectedTimes)

        axios.put(Config.BACKEND_ADDR + "/lessons/make_schedule", {
            student_id: student.studentId,
            schedule_items: Object.entries(selectedTimes).filter(el=>selectedWeekdays.includes(el[0])).map(([key, value])=>{
                console.log("key: ", key, "value: ", value)
                let timeFrom = value.split(" - ")[0]
                let timeTo = value.split(" - ")[1]
               return {
                    weekday: weekDayToNumber[key],
                    start_time: timeFrom + ":00",
                    end_time: timeTo + ":00",
               }
            }),
            note: null,
        }).then(()=>{
            axios.get(Config.BACKEND_ADDR + `/lessons`).then((res)=>{
                dispatch(updateStudent({
                    "lessonsSchedule": res.data.filter(el=>el.student_id === student.studentId && el.not_scheduled !== true).map(el=>{
                            let startTime = new Date(el.start_time)
                            let endTime = new Date(el.end_time)
                            return{
                                weekDay: weekDayToFullWeekName(el.weekday).full,
                                weekDayShort: weekDayToFullWeekName(el.weekday).short,
                                time: `${addZeroToTime(startTime.getHours())}:${addZeroToTime(startTime.getMinutes())} - ${addZeroToTime(endTime.getHours())}:${addZeroToTime(endTime.getMinutes())}`
                            }
                        }).filter((value, index, self) =>
                          index === self.findIndex((t) => (
                            t.weekday === value.weekday && t.time === value.time
                          ))
                        )
                }))
            })
        })


    };

    return (
        <form style={{ ...styles.infoEditForm }} onSubmit={handleSubmit}>
            <WeekdaySelectorButtons
                selectedWeekdays={selectedWeekdays}
                onToggleWeekday={handleToggleWeekday}
            />
            <WeekdayTimeSelector
                selectedWeekdays={selectedWeekdays}
                selectedTimes={selectedTimes}
                onTimeChange={handleTimeChange}
            />
            <div style={{ marginTop: 25, display: "flex", justifyContent: "flex-end" }}>
                <Button width={145} height={40} backgroundColor={color_red_default} color={color_white} type="submit">
                    <OnestNormalDefault>Сохранить</OnestNormalDefault>
                </Button>
            </div>
        </form>
    );
};
