import {instance} from "./api";
import {ProductType} from "../store/homePageReducer";

type ClientsType = {
    id: number
    email: string
    created: string
}

export const homePageAPI = {
    categories() {
        return instance.get('categories/').then(res => res)
    },
    products(categories: number) {
        return instance.get<Array<ProductType>>('products/?category=' + categories).then(res => res.data)
    },
    clients(email: string) {
        return instance.post<ClientsType>('clients', {
            email: email
        })
    }
}