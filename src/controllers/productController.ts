import axios from "axios";
import { IPagination } from "../models/models/IPagination";
import { IProduct } from "../models/models/IProduct";
import { IProductLine } from "../models/models/IProductline";
import { IProductService } from "../models/services/IProductService";

export class ProductController implements IProductService {
    async getListProductLine(page: number, pageSize: number, search: string, categoryId: number): Promise<IPagination<IProductLine>> {
        return axios.get(`http://localhost:3005/products/?page=${page}&pageSize=${pageSize}&search=${search}&categoryId=${categoryId}`)
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.error("Error:", error);
                throw error;
            });
    }
    async getById(id: number): Promise<IProduct> {
        return axios.get(`http://localhost:3005/products/${id}`)
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.error("Error:", error);
                throw error;
            });
    }

}