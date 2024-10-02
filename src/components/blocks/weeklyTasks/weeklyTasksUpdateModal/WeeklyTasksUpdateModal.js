import React, {useEffect, useReducer, useState} from "react";
import {color_red_default, color_white} from "../../../../constants/colors";
import {BlockTitle} from "../../../text/BlockTitle";
import {LoadingContainer} from "../../../containers/LoadingContainer";
import {Link} from "react-router-dom";
import {Button} from "../../../controls/Button/Button";
import {FONT_SIZE_SMALL} from "../../../../constants/fontSizes";
import {getWeeklyTasksList} from "../../../../pages/personal/PersonalPage";
import {ModalDefault} from "../../../containers/ModalDefault";
import {styles} from "./Styles";
import {tasksReducer} from "../Reducers";
import {WeeklyTaskModalRow} from "./WeeklyTaskModalRow";
import axios from "axios";
import Config from "../../../../Config";
import {useDispatch, useSelector, useStore} from "react-redux";
import {addTask, removeTask, replaceAllTasks, updateTask} from "../../../../store/tasksListSlice";
import {store} from "../../../../store/Store";


export const WeeklyTasksUpdateModal = ({isShown, onRequestClose}) => {
    const [isLoading, setIsLoading] = useState(false);
    const tasksList = useSelector(state => state.tasksList);
    const dispatch = useDispatch();

    useEffect(() => {
        // getTasksFromServer().then(()=>setIsLoading(false))
        setIsLoading(false);

    }, [])

    async function getTasksFromServer() {
        await getWeeklyTasksList().then(res=> {
            dispatch(replaceAllTasks(res));
            // setIsLoading(false);
        })
    }

    function declineTaskChanges(){
        console.log(tasksList)
        dispatch(replaceAllTasks(tasksList.filter(el=>el.newTask !== true)))

    }

    async function handleTaskRemove(taskId){
        await dispatch(removeTask(tasksList.find(el=>el.id === taskId)))
        let response = await axios.delete(Config.BACKEND_ADDR + `/tasks/${taskId}`)
    }

    async function handleTasksChangeSubmit(e) {
        console.log("oldTasks", tasksList)
        let newTasks = [...tasksList.filter(el=>el.newTask === true)]
        for (let task of newTasks) {
            let response = await axios.post(Config.BACKEND_ADDR + `/tasks`, {task_text: task.title})
            console.log("update new task: ", {...task, newId: response.data.id, newTask: false})
            dispatch(updateTask({...task, newId: response.data.id, newTask: false}))
        }
        let updatedTasks = [...tasksList.filter(el=>el.updated === true)]
        console.log("updatedTasks: ", updatedTasks)
        await onRequestClose()
        for (let task of updatedTasks){
            console.log(`updating task on server:`, task)
            await axios.patch(Config.BACKEND_ADDR + `/tasks`, {task_id: task.id, task_text: task.title})
        }
    }

    async function handleExit(){
        declineTaskChanges();
        onRequestClose();
    }


    return (
        <ModalDefault isOpen={isShown} onRequestClose={()=>handleExit()} onAfterOpen={()=>{setIsLoading(true)}}>
            <div style={{
                ...styles.weeklyTasksModalContainer
            }}>
                <BlockTitle title={"Мои задачи"}/>
                <LoadingContainer isLoading={false}>
                    <>
                        {(tasksList || []).map((el, key) => {
                            return <WeeklyTaskModalRow
                                key={key}
                                task={el}
                                onTaskChange={(updatedTask)=> {
                                    dispatch(updateTask({...updatedTask, updated: true}))
                                }}
                                onTaskDeleteClick={(deletedTask) => handleTaskRemove(deletedTask.id)}
                            />
                        })}
                    </>
                    <div onClick={()=>dispatch(addTask({
                        id: [...Array(15)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
                        title: "",
                        newTask: true
                    }))}><Link>Еще задача</Link></div>
                    <div onClick={() => handleTasksChangeSubmit()}>
                        <Button outline={false} width={152} height={40} active={true} backgroundColor={color_red_default}
                                color={color_white} borderColor={null} fontSize={FONT_SIZE_SMALL}>
                            Сохранить
                        </Button>
                    </div>
                </LoadingContainer>
            </div>
        </ModalDefault>
    )
}