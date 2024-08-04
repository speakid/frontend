import { useState } from 'react';
import {
    color_black,
    color_grey_dark,
    color_grey_light,
    color_red_default,
    color_red_light,
    color_white
} from "../constants/colors";
import {OnestNormalBig} from "./styled/TextComponents";

const CalendarHeader = ({ date, handlePrevMonth, handleNextMonth }) => {
    const month = date.toLocaleString('ru-RU', { month: 'long' });
    const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1)

    return (
        <div style={styles.header}>
            <div style={styles.title}>
                <OnestNormalBig>{monthCapitalized}, {date.getFullYear()}</OnestNormalBig>
            </div>
            <button onClick={handlePrevMonth} style={styles.button}>{'<'}</button>
            <button onClick={handleNextMonth} style={styles.button}>{'>'}</button>
        </div>
    );
};

const CalendarBodyHeader = ({ daysOfWeek }) => {
    return (
        <div style={styles.weekdays}>
            {daysOfWeek.map((day) => (
                <div key={day} style={styles.weekday}>
                    {day}
                </div>
            ))}
        </div>
    );
};

const CalendarDay = ({ day }) => {
    const isToday = day && day.getDate() === new Date().getDate() &&
        day.getMonth() === new Date().getMonth() &&
        day.getFullYear() === new Date().getFullYear();
    const isWeekend = !isToday && day && (day.getDay() === 0 || day.getDay() === 6);
    const isNotADay = day == null;

    return (
        <div
            style={{
                ...styles.day,
                ...(isToday && styles.today),
                ...(isWeekend && styles.weekend),
                ...(isNotADay && styles.clearDay)
            }}
        >
            {day ? day.getDate() : ''}
        </div>
    );
};

const CalendarBodyRow = ({days}) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            height: "min-content",
            justifyContent: "space-between"
        }}>
            {days.map((day, index) =><CalendarDay key={index} day={day} />)}
        </div>
    )
}

const CalendarBodyDays = ({ days }) => {
    // const lastDaysNotNull = removeNullsFromAnEndOfArray(days)


    // function removeNullsFromAnEndOfArray(array){
    //     while(array[array.length - 1] == null){
    //         array.pop();
    //     }
    //     return array
    // }

    function splitDaysToWeekRows(days){
        const weeksCount = days.length / 7
        const weeks = []
        for (let i=0; i < weeksCount; i+=1){
            weeks.push(days.slice(i*7, (i*7)+7))
        }
        return weeks
    }

    return (
        <div style={styles.days}>
            {/*{days.map((day, index) => (*/}
            {/*    <CalendarDay key={index} day={day} />*/}
            {/*))}*/}
            {splitDaysToWeekRows(days).map(week=><CalendarBodyRow days={week}/>)}
        </div>
    );
};

const CalendarBody = ({ daysOfWeek, days }) => {
    return (
        <div>
            <CalendarBodyHeader daysOfWeek={daysOfWeek} />
            <CalendarBodyDays days={days} />
        </div>
    );
};

export const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const generateCalendar = () => {
        const year = date.getFullYear();
        const month = date.getMonth();

        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const firstDayIndex = firstDayOfMonth;
        const days = [];

        // Заполнить дни предыдущего месяца
        for (let i = 0; i < (firstDayIndex === 0 ? 6 : firstDayIndex - 1); i++) {
            // fill with days
            // days.push(new Date(year, month-1, getDaysInMonth(year, month-1)-i));
            // fill with nulls
            days.push(null);
        }

        // Заполнить дни текущего месяца
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }

        // Заполнить дни следующего месяца
        const lastDayIndex = new Date(year, month, daysInMonth).getDay();
        for (let i = lastDayIndex; i < 7 && i !== 0; i++) {
            days.push(null);
        }

        return days;
    };

    const days = generateCalendar();

    return (
        <div style={styles.calendar}>
            <CalendarHeader
                date={date}
                handlePrevMonth={handlePrevMonth}
                handleNextMonth={handleNextMonth}
            />
            <CalendarBody daysOfWeek={daysOfWeek} days={days} />
        </div>
    );
};

const styles = {
    calendar: {
        width: 330,
        height: "min-content",
        display: "flex",
        flexDirection: "column",
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
    },
    header: {
        height: "35",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
    },
    title: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        flexGrow: 1,
        color: color_grey_dark
    },
    button: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '1.2em',
        cursor: 'pointer',
        padding: "0 10px",
        color: color_grey_dark
    },
    weekdays: {
        display: 'flex',
        paddingBottom: 5,
        justifyContent: "space-between"
    },
    weekday: {
        width: 45,
        height: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 1,
        color: color_grey_light
    },
    days: {
        display: 'flex',
        flexDirection: "column",
        // flexWrap: 'wrap',
        height: "min-content",
    },
    day: {
        // flex: '1 0 14%',
        height: '45px',
        width: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: '5px',
        borderRadius: '50%',
        backgroundColor: color_grey_light,
        color: color_black,
        margin: 1,
        padding: 1,
        boxSizing: "border-box"
    },
    clearDay: {
        backgroundColor: 'transparent',
        border: `1px dashed ${color_grey_light}`,
        color: color_grey_light,
    },
    weekend: {
        backgroundColor: 'transparent',
        border: `1px dashed ${color_grey_light}`,
        color: color_grey_light,
    },
    today: {
        backgroundColor: 'red',
        border: `1px dashed ${color_red_light}`,
        color: color_white,
    },
};
