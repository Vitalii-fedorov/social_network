import {rerenderEntireTree} from "../render.jsx";

let state = {
    dialogsPage: {dialogsData: [
        {id: 1, name: 'Pavlo'},
        {id: 2, name: 'Bogdan'},
        {id: 3, name: 'Nadia'},
        {id: 4, name: 'Danilo'},
        {id: 5, name: 'Svitlana'},
        {id: 6, name: 'Anna'},
        {id: 7, name: 'Oleksandr'}]
}}


rerenderEntireTree();
export default state