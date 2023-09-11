import axios from "axios"
import { IProduct, IProductsRespons } from "../types/product.interface"

axios.defaults.baseURL = "https://dummyjson.com/"

export const ProductService = {
    async getProducts() {
        const respons = await axios.get<IProductsRespons>("/products", {
            params: {
                limit: 16
            }
        })
        return respons.data
    },
    async getProductById(id: string) {
        const respons = await axios.get<IProduct>(`/products/${id}`)
        return respons.data
    }
}