import {instance} from "./api";
import axios from "axios";

export const homePageAPI = {
    categories() {
        return instance.get('categories/').then(res => res)
    }
}

export const homePageCategories = () => {
    return axios.get( 'https://online-store-back.herokuapp.com/api/categories/')
}