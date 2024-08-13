import {createSlice} from "@reduxjs/toolkit";

const ScheduleSlice = createSlice({
    name: "schedule",
    initialState: [
        {
            id: 0,
            studentName: "Наташа Сизова",
            date: "2024-08-12",
            timeSlot: "07:00-07:30",
            paymentStatus: "Не оплачено",
            weekDay: "ПН"
        },
        {
            id: 1,
            studentName: "Наташа Сизова",
            date: "2024-08-12",
            timeSlot: "08:00-08:30",
            paymentStatus: "Оплачено",
            weekDay: "ПН"
        },
        {
            id: 3,
            studentName: "Наташа Сизова",
            date: "2024-08-12",
            timeSlot: "08:30-09:00",
            paymentStatus: "Последний урок",
            weekDay: "ПН"
        },
        {
            id: 4,
            studentName: "Наташа Сизова",
            date: "2024-08-13",
            timeSlot: "07:00-07:30",
            paymentStatus: "Не оплачено",
            weekDay: "ВТ"
        },
        {
            id: 5,
            studentName: "Наташа Сизова",
            date: "2024-08-13",
            timeSlot: "08:00-08:30",
            paymentStatus: "Оплачено",
            weekDay: "ВТ"
        },
        {
            id: 6,
            studentName: "Наташа Сизова",
            date: "2024-08-13",
            timeSlot: "08:30-09:00",
            paymentStatus: "Оплачено",
            weekDay: "ВТ"
        },
        {
            id: 7,
            studentName: "Наташа Сизова",
            date: "2024-08-13",
            timeSlot: "09:00-09:30",
            paymentStatus: "Оплачено",
            weekDay: "ВТ"
        },
        {
            id: 8,
            studentName: "Наташа Сизова",
            date: "2024-08-13",
            timeSlot: "09:30-10:00",
            paymentStatus: "Последний урок",
            weekDay: "ВТ"
        },
        {
            id: 9,
            studentName: "Наташа Сизова",
            date: "2024-08-14",
            timeSlot: "09:00-09:30",
            paymentStatus: "Не оплачено",
            weekDay: "СР"
        },
        {
            id: 10,
            studentName: "Наташа Сизова",
            date: "2024-08-14",
            timeSlot: "09:30-10:00",
            paymentStatus: "Оплачено",
            weekDay: "СР"
        },
        {
            id: 11,
            studentName: "Наташа Сизова",
            date: "2024-08-14",
            timeSlot: "09:30-10:00",
            paymentStatus: "Последний урок",
            weekDay: "СР"
        },
        {
            id: 12,
            studentName: "Наташа Сизова",
            date: "2024-08-16",
            timeSlot: "09:30-10:00",
            paymentStatus: "Не оплачено",
            weekDay: "ПТ"
        },
        {
            id: 13,
            studentName: "Наташа Сизова",
            date: "2024-08-16",
            timeSlot: "09:30-10:00",
            paymentStatus: "Последний урок",
            weekDay: "ПТ"
        },
    ],
    reducers: {

    }
})

export default ScheduleSlice.reducer;
