import axios from "axios";
import { ICategory } from "../models/models/ICategory";
import { ICategoryService } from "../models/services/ICategoryService";

export class CategoryController implements ICategoryService {
    getAll(): Promise<ICategory[]> {
        return axios.get(`http://localhost:3005/categories`)
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.error("Error:", error);
                throw error;
            });
    }

}