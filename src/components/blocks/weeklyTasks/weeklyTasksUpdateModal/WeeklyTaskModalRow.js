import {styles} from "./Styles";
import {OnestNormalDefault} from "../../../styled/TextComponents";
import {BsXLg} from "react-icons/bs";
import {color_grey_dark} from "../../../../constants/colors";
import React from "react";

export const WeeklyTaskModalRow = ({task, onTaskChange, onTaskDeleteClick}) => {
    return (
        <div style={{
            ...styles.weeklyTasksModalTaskContainer
        }}>
            <div style={{flexGrow: 1}}>
                <OnestNormalDefault>
                    <textarea
                        value={task.title}
                        onChange={(e) => {
                            let newTaskData = {...task}
                            newTaskData.title = e.target.value
                            newTaskData.updated = true
                            onTaskChange(newTaskData)
                        }}
                        placeholder={"Введите текст задачи"}
                        style={{...styles.weeklyTasksModalTextArea}}
                    />
                </OnestNormalDefault>
            </div>
            <div onClick={() => onTaskDeleteClick(task)}>
                <BsXLg style={{color: color_grey_dark}}/>
            </div>
        </div>
    )
}