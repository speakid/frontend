import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import studentReducer from "./StudentSlice"
import studentsJournalReducer from "./StudentsJournalSlice"
import faqReducer from "./FaqSlice";
import lessonsProgramReducer from "./LessonsProgramSlice";
import libraryFilesReducer from "./LibraryFilesSlice";
import scheduleReducer from "./ScheduleSlice";
import scheduleDayExtendedReducer from "./ScheduleDayExtendedSlice";


const rootReducer = combineReducers({
    user: userReducer,
    student: studentReducer,
    studentsJournal: studentsJournalReducer,
    faq: faqReducer,
    lessonsProgram: lessonsProgramReducer,
    libraryFiles: libraryFilesReducer,
    schedule: scheduleReducer,
    scheduleDayExtended: scheduleDayExtendedReducer
})

export const store = configureStore({
    reducer: rootReducer
})