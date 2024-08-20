import {createSlice} from "@reduxjs/toolkit";
import lessonsProgramSlice from "./LessonsProgramSlice";

const ScheduleDayExtendedSlice = createSlice({
    name: "scheduleDayExtended",
    initialState: {
        date: new Date(2024, 8, 12),
        lessons: [
        {
            id: 0,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 12, 7, 0, 0),
            timeSlot: "07:00-07:30",
            paymentStatus: "Не оплачено",
            weekDay: "ПН",
            studentLevel: "A2"
        },
        {
            id: 1,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 12, 8, 0, 0),
            timeSlot: "08:00-08:30",
            paymentStatus: "Оплачено",
            weekDay: "ПН",
            studentLevel: "Pre-K"
        }
    ]
    },
    reducers: {
        update: (state, action) => {
            return {...action.payload}
        }
    }
})

export default ScheduleDayExtendedSlice.reducer;
export const {update: updateDayLessonData} = ScheduleDayExtendedSlice.actions;