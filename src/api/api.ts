import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://online-store-back.herokuapp.com/api/',
})