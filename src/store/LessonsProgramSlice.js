import {createSlice} from "@reduxjs/toolkit";

const lessonsProgramSlice = createSlice({
    name: "lessonsProgram",
    initialState: [
        {
            id: 0,
            level: 0,
            age: "4-7 years old",
            image: "https://i.ibb.co/Y3ZFdC3/Rectangle-3463809.png",
            summary: "This lesson is well-suited for students between the ages of 4-7 years old. The student will have acquired a foundation in English vocabulary, colors, and basic grammar to describe emotions, sizes, and express their preferences and desires. They will also be familiar with the English alphabet and various words associated with each letter.",
            lessons: [
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
            id: 1,
            level: 1,
            age: "5-8 years old",
            image: "https://i.ibb.co/Y3ZFdC3/Rectangle-3463809.png",
            summary: "This lesson is well-suited for students between the ages of 4-7 years old. The student will have acquired a foundation in English vocabulary, colors, and basic grammar to describe emotions, sizes, and express their preferences and desires. They will also be familiar with the English alphabet and various words associated with each letter.",
            lessons: [
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
            id: 2,
            level: 2,
            age: "6-8 years old",
            image: "https://i.ibb.co/Y3ZFdC3/Rectangle-3463809.png",
            summary: "This lesson is well-suited for students between the ages of 4-7 years old. The student will have acquired a foundation in English vocabulary, colors, and basic grammar to describe emotions, sizes, and express their preferences and desires. They will also be familiar with the English alphabet and various words associated with each letter.",
            lessons: [
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
            id: 3,
            level: 3,
            age: "8-10 years old",
            image: "https://i.ibb.co/Y3ZFdC3/Rectangle-3463809.png",
            summary: "This lesson is well-suited for students between the ages of 4-7 years old. The student will have acquired a foundation in English vocabulary, colors, and basic grammar to describe emotions, sizes, and express their preferences and desires. They will also be familiar with the English alphabet and various words associated with each letter.",
            lessons: [
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
            id: 4,
            level: 4,
            age: "8-11 years old",
            image: "https://i.ibb.co/Y3ZFdC3/Rectangle-3463809.png",
            summary: "This lesson is well-suited for students between the ages of 4-7 years old. The student will have acquired a foundation in English vocabulary, colors, and basic grammar to describe emotions, sizes, and express their preferences and desires. They will also be familiar with the English alphabet and various words associated with each letter.",
            lessons: [
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
            id: 5,
            level: 5,
            age: "9-14 years old",
            image: "https://i.ibb.co/Y3ZFdC3/Rectangle-3463809.png",
            summary: "This lesson is well-suited for students between the ages of 4-7 years old. The student will have acquired a foundation in English vocabulary, colors, and basic grammar to describe emotions, sizes, and express their preferences and desires. They will also be familiar with the English alphabet and various words associated with each letter.",
            lessons: [
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
            id: 6,
            level: 6,
            age: "9-13 years old",
            image: "https://i.ibb.co/Y3ZFdC3/Rectangle-3463809.png",
            summary: "This lesson is well-suited for students between the ages of 4-7 years old. The student will have acquired a foundation in English vocabulary, colors, and basic grammar to describe emotions, sizes, and express their preferences and desires. They will also be familiar with the English alphabet and various words associated with each letter.",
            lessons: [
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

    }
})

export default lessonsProgramSlice.reducer;
