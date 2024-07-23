import {styles} from "./Styles";
import {BsCheck} from "react-icons/bs";
import {color_black_ultra_light} from "../../../../constants/colors";
import {OnestNormalMed} from "../../../styled/TextComponents";
import React from "react";


/**
 * Weekly task row
 * @param task
 * @param isLastTask is task last in a row. Printing border depends on it
 * @param toggleTaskCallBack function that would be call when user complete task with a click
 * @returns {JSX.Element}
 * @constructor
 */
export const WeeklyTaskRow = ({task, isLastTask, toggleTaskCallBack}) => {
    return (
        <>
            <div style={{
                ...styles.weeklyTaskRow,
                ...(isLastTask && styles.lastWeeklyTaskRow),
                ...(task.completed && styles.completedWeeklyTaskRow)
            }}
            >
                <div style={{
                    ...styles.weeklyTaskCircle,
                    ...(task.completed && styles.completedWeeklyTaskCircle)
                }} onClick={() => {
                    task.completed = !task.completed
                    toggleTaskCallBack(task)
                }}>
                    {task.completed ? <BsCheck/> : null}
                </div>
                <span style={{
                    color: color_black_ultra_light,
                    flexGrow: 1
                }}><OnestNormalMed>{task.title}</OnestNormalMed></span>
            </div>
        </>
    )
}