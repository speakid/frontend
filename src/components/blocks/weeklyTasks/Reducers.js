export function tasksReducer(tasks, action) {
    switch (action.type) {
        case "addMany": {
            if (action.newTasks === null || action.newTasks.length === 0) {
                throw Error("No new tasks for addMany (tasksReducer)")
            }
            let tasksTemp = [...tasks]
            tasksTemp.push(...action.newTasks)
            return tasksTemp
        }
        case "addOne": {
            if (action.newTask === null) {
                throw Error("No new task for addOne (tasksReducer)")
            }
            return [...tasks, action.newTask]
        }
        case "update": {
            if (action.updatedTask === null) {
                throw Error("No updatedTask for change (tasksReducer)")
            }
            return tasks.map(task => {
                if (task.id === action.updatedTask.id) {
                    return action.updatedTask
                } else {
                    return task
                }
            })
        }
        case "delete": {
            if (action.daletedTask === null) {
                throw Error("No daletedTask for change (tasksReducer)")
            }
            return tasks.filter(task => task.id !== action.deletedTask.id)
        }
        case "replaceAll": {
            if (action.newTasks === null || action.newTasks.length === 0) {
                throw Error("No new tasks for replaceAll (tasksReducer)")
            }
            return [...action.newTasks]
        }
        default: {
            throw Error("Unknown tasksReducer action: ", action.type)
        }
    }
}