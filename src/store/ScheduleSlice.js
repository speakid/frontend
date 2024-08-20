import {createSlice} from "@reduxjs/toolkit";
import lessonsProgramSlice from "./LessonsProgramSlice";

const ScheduleSlice = createSlice({
    name: "schedule",
    initialState: [
        {
            id: 0,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 12),
            timeSlot: "07:00-07:30",
            paymentStatus: "Не оплачено",
            weekDay: "ПН",
            studentLevel: "A2"
        },
        {
            id: 1,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 12),
            timeSlot: "08:00-08:30",
            paymentStatus: "Оплачено",
            weekDay: "ПН",
            studentLevel: "Pre-K"
        },
        {
            id: 3,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 12),
            timeSlot: "08:30-09:00",
            paymentStatus: "Последний урок",
            weekDay: "ПН",
            studentLevel: "A2"
        },
        {
            id: 4,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 13),
            timeSlot: "07:00-07:30",
            paymentStatus: "Не оплачено",
            weekDay: "ВТ",
            studentLevel: "Pre-K"
        },
        {
            id: 5,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 13),
            timeSlot: "08:00-08:30",
            paymentStatus: "Оплачено",
            weekDay: "ВТ",
            studentLevel: "A2"
        },
        {
            id: 6,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 13),
            timeSlot: "08:30-09:00",
            paymentStatus: "Оплачено",
            weekDay: "ВТ",
            studentLevel: "Pre-K"
        },
        {
            id: 7,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 13),
            timeSlot: "09:00-09:30",
            paymentStatus: "Оплачено",
            weekDay: "ВТ",
            studentLevel: "A2"
        },
        {
            id: 8,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 13),
            timeSlot: "09:30-10:00",
            paymentStatus: "Последний урок",
            weekDay: "ВТ",
            studentLevel: "Pre-K"
        },
        {
            id: 9,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 14),
            timeSlot: "09:00-09:30",
            paymentStatus: "Не оплачено",
            weekDay: "СР",
            studentLevel: "A2"
        },
        {
            id: 10,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 14),
            timeSlot: "09:30-10:00",
            paymentStatus: "Оплачено",
            weekDay: "СР",
            studentLevel: "Pre-K"
        },
        {
            id: 11,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 14),
            timeSlot: "09:30-10:00",
            paymentStatus: "Последний урок",
            weekDay: "СР",
            studentLevel: "A2"
        },
        {
            id: 12,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 16),
            timeSlot: "09:30-10:00",
            paymentStatus: "Не оплачено",
            weekDay: "ПТ",
            studentLevel: "Pre-K"
        },
        {
            id: 13,
            studentName: "Наташа Сизова",
            dateDate: new Date(2024, 8, 16),
            timeSlot: "09:30-10:00",
            paymentStatus: "Последний урок",
            weekDay: "ПТ",
            stunedLevel: "A2"
        },
    ],
    reducers: {
        update: (state, action) => {
            return [...action.payload]
        }
    }
})

export default ScheduleSlice.reducer;
export const {update: updateSchdeule} = ScheduleSlice.actions;