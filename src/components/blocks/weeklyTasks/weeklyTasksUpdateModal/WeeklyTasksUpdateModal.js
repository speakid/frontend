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


export const WeeklyTasksUpdateModal = ({isShown, onRequestClose}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [tasksList, tasksListDispatch] = useReducer(tasksReducer, []);

    useEffect(() => {
        getTasksFromServer().then()
    }, [])

    async function getTasksFromServer() {
        await getWeeklyTasksList().then(res=> {
            tasksListDispatch({type: "replaceAll", newTasks: res});
            setIsLoading(false);
        })
    }

    function declineTaskChanges(){
        tasksListDispatch({
            type: "replaceAll",
            newTasks: tasksList.map(el=>el.title = el.initialTitle)
        })
    }

    async function handleTasksChangeSubmit(e) {
        await new Promise(r => setTimeout(r, 3000));
        // TODO: api call
    }

    async function handleExit(){
        declineTaskChanges();
        onRequestClose();
    }


    return (
        <ModalDefault isOpen={isShown} onRequestClose={()=>handleExit()} onAfterOpen={()=>{setIsLoading(true); getTasksFromServer().then()}}>
            <div style={{
                ...styles.weeklyTasksModalContainer
            }}>
                <BlockTitle title={"Мои задачи"}/>
                <LoadingContainer isLoading={isLoading}>
                    <>
                        {tasksList.map((el, key) => {
                            return <WeeklyTaskModalRow
                                key={key}
                                task={el}
                                onTaskChange={(updatedTask)=>tasksListDispatch({type: "update", updatedTask: updatedTask})}
                                onTaskDeleteClick={(deletedTask) => tasksListDispatch({type: "delete", deletedTask: deletedTask})}
                            />
                        })}
                    </>
                    <div onClick={()=>tasksListDispatch({type: "addOne", newTask:{id: tasksList.length * -1, title: ""}})}><Link>Еще задача</Link></div>
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