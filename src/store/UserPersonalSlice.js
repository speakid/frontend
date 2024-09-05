import {createSlice} from "@reduxjs/toolkit";
import {LessonInfo} from "../components/Tables/LessonsTable";


const userPersonalSlice = createSlice({
    name: "userPersonal",
    initialState: {
        name: "",
        imageLink: "",
        lessonsList: [
            // new LessonInfo("Миша Смирнов", "14:30", 1),
        ],
        totalLessons: 0,
        totalEarnings: 0,
        nextLessonIn: 0
    },
    reducers: {
        update: (state, action) => {
            return {...state, ...action.payload}
        }
    },

});


export const {create: createStudent, update: updateStudent} = userPersonalSlice.actions
export default userPersonalSlice.reducer;