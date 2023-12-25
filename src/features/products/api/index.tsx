import { get } from "../../../utils/services/http"



export const productListApi = (limit:number) => {
    const response = get(`products?limit=${limit}`)
    return response
}