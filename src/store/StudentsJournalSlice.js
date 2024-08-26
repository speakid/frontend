import {createSlice} from "@reduxjs/toolkit";

const studentsJournalSlice = createSlice({
    name: "studentsJournal",
    initialState: [
        {
        "studentId": 1,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Миша Смирнов",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 2,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Маша Иванова",
        "englishLevel": "Beginner",
        "additionalInfo": "Маша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 3,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Вера Кузнецова",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 4,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Никита Козлов",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 5,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Лиза Попова",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 6,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Варя Лебедева",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 7,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Соня Соколова",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 8,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Андрей Морозов",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 9,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Василий Волков",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 10,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Петр Зайцев",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
        {
        "studentId": 11,
        "lessonPrice": 20,
        "balance": 200,
        "age": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCEVIUp-xkd7m7fJFk-z6u6LbuLVCS6s8Qg&s",
        "payedLessons": parseInt(201/20),
        "name": "Миша Богданов",
        "englishLevel": "Beginner",
        "additionalInfo": "Миша - “технарь”, ему сложно дается изучение языков. Английский учит для переезда за границу. Необходимо дать понимание базовых вещей, чтобы он мог влиться в общество.",
        "lessonsSchedule": [
            {
                weekDay: "Вторник",
                weekDayShort: "ВТ",
                time: "12:00 - 13:00"
            },
            {
                weekDay: "Четверг",
                weekDayShort: "ЧТ",
                time: "15:30 - 16:30"
            }
        ],
        "lessonsProgram": [
            {
                id: 0,
                image: "https://i.ytimg.com/vi/ezmsrB59mj8/maxresdefault.jpg",
                name: "1 УРОК: ABC",
                level: "0",
                completed: true
            },
            {
                id: 1,
                image: "https://thumbs.dreamstime.com/b/letter-def-17681937.jpg",
                name: "2 УРОК: DEF",
                level: "0",
                completed: false
            },
            {
                id: 2,
                image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA=",
                name: "3 УРОК: GHI",
                level: "0",
                completed: false
            },
        ]
    },
    ],
    reducers: {
        updateAll: (state, action) => {
            return action.payload
        },
        removeStudent: (state, action) => {
            return [...state.filter(el=>el.id !== action.payload)]
        }
    }
});

export const {updateAll, removeStudent} = studentsJournalSlice.actions;

export default studentsJournalSlice.reducer;