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
    const [tasksList, tasksListDispatch] = useReducer(tasksReducer, []);
    const [tasksUpdatingState, setTasksUpdatingState] = useState(false);

    const taskToggleCallback = (task)=>tasksListDispatch({type: "update", updatedTask: task})

    /**
     * Get from api to dispatcher
     * @returns {Promise<void>}
     */
    async function getTasksFromServer() {

        await new Promise(r => setTimeout(r, 1500));
        getWeeklyTasksList().then(res=>{
            tasksListDispatch({type: "replaceAll", newTasks: res})
            setIsLoading(false);
        });
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