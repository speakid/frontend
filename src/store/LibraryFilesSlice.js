import {createSlice} from "@reduxjs/toolkit";

const libraryFilesSlice = createSlice({
    name: "libraryFiles",
    initialState: [
        {
            id: 0,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 1,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 2,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 3,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 4,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 5,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 6,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 7,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 8,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 9,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
        {
            id: 10,
            name: "What do you remember?",
            link: "https://ya.ru",
            image: "https://media.istockphoto.com/id/1318334706/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/ghi-cookie-%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B5%D1%87%D0%BA%D0%B8-%D0%B1%D0%B8%D1%81%D0%BA%D0%B2%D0%B8%D1%82-%D1%88%D1%80%D0%B8%D1%84%D1%82-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=1024x1024&w=is&k=20&c=SEi54Qnfhop2emTeSgr0woF6y7-0D-zLUAb8NuO0ESA="
        },
    ],
    reducers: {

    }
})

export default libraryFilesSlice.reducer;
