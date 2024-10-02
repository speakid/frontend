import React, {useEffect, useReducer, useState} from "react";
import DefaultContainer from "../../../containers/DefaultContainer";
import {BsPencil} from "react-icons/bs";
import NoContentPlaceholder from "../../../containers/NoContentPlaceholder";
import {BlockTitle} from "../../../text/BlockTitle";
import {WeeklyTasksUpdateModal} from "../weeklyTasksUpdateModal/WeeklyTasksUpdateModal";
import {getWeeklyTasksList} from "../../../../pages/personal/PersonalPage";
import {LoadingContainer} from "../../../containers/LoadingContainer";
import {styles} from "./Styles";
import {tasksReducer} from "../Reducers";
import {WeeklyTaskRow} from "./WeeklyTaskRow";
import axios from "axios";
import Config from "../../../../Config";
import {useDispatch, useSelector} from "react-redux";
import {removeTask, replaceAllTasks, updateTask} from "../../../../store/tasksListSlice";

export class WeeklyTask {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.initialTitle = title;
        this.completed = false;
    }
}


/**
 * Weekly tasks list component.
 * @returns {JSX.Element}
 * @constructor}
 */
export const WeeklyTasksList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const tasksList = useSelector(state => state.tasksList);
    const [tasksUpdatingState, setTasksUpdatingState] = useState(false);
    const dispatch = useDispatch();

    const taskToggleCallback = (task)=>{
        dispatch(updateTask({...task, completed: true}))
        handleTaskRemove(task.id)
    }

    async function getTasksFromServer() {
        getWeeklyTasksList().then(res=>{
            dispatch(replaceAllTasks(res))
            setIsLoading(false);
        });
    }

    async function handleTaskRemove(taskId){
        let response = await axios.delete(Config.BACKEND_ADDR + `/tasks/${taskId}`)
        await dispatch(removeTask(tasksList.find(el=>el.id === taskId)))
    }

    //Update tasks on mount
    useEffect(()=>{getTasksFromServer().then()}, [])


    return (
        <DefaultContainer height={440} width={330}>
            {/*Weekly tasks container*/}
            <div style={{...styles.weeklyTasksContainer}}>
                {/*Tasks updating modal*/}
                <WeeklyTasksUpdateModal isShown={tasksUpdatingState} onRequestClose={()=>setTasksUpdatingState(false)}/>

                {/*Tasks header with modal opening button*/}
                <div style={{...styles.weeklyTasksHeader}}>
                    {/*Header*/}
                    <BlockTitle title={"Задачи на неделю"}/>
                    {/*Modal button*/}
                    <div onClick={()=>setTasksUpdatingState(true)}><BsPencil/></div>
                </div>

                {/*Tasks list container*/}
                <div style={{...styles.weeklyTasksRowContainer}}>
                    {/*Show loading while tasks downloading*/}
                    <LoadingContainer isLoading={isLoading}>
                        {/*Tasks list generator*/}
                        {tasksList.length === 0 ?
                            // If there are  no tasks then show placeholder
                            <NoContentPlaceholder noDataText={"Здесь будут отображаться ваши задачи на неделю"}/>
                            :
                            // If we have at least one task, then generate task row for each task
                            tasksList.map((el, index) => {
                                return (
                                    <WeeklyTaskRow key={index} task={el} isLastTask={index === tasksList.length - 1} toggleTaskCallBack={taskToggleCallback} />
                                )
                        })}
                    </LoadingContainer>
                </div>
            </div>

        </DefaultContainer>
    )

}