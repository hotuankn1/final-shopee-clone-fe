import axios from "axios";
import { IOrder, IOrderProduct } from "../models/models/IOrder";
import { IPagination } from "../models/models/IPagination";
import { IOrderService } from "../models/services/IOrderService";

export class OrderController implements IOrderService {
    async getList(page: number, pageSize: any, userId: number): Promise<IPagination<IOrder>> {
        return axios.get(`http://localhost:3005/orders/?page=${page}&pageSize=${pageSize}`)
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.error("Error:", error);
                throw error;
            });
    }
    async getById(orderId: number): Promise<IOrder> {
        return axios.get(`http://localhost:3005/orders/${orderId}`)
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.error("Error:", error);
                throw error;
            });
    }
    async createOrUpdateCart(updateDetails: Partial<IOrder>, userId: number): Promise<IOrder> {
        return axios.post(`http://localhost:3005/orders/`, {updateDetails})
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.error("Error:", error);
                throw error;
            });
    }
    async getCart(userId: number): Promise<IOrder> {
        return axios.get(`http://localhost:3005/orders/cart`)
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.error("Error:", error);
            throw error;
        });
    }
    async deleteItemsFromCart(orderProducts: IOrderProduct[], userId: number): Promise<IOrder> {
        throw new Error("Method not implemented.");
    }
    async completeOrder(selectedOrderProducts: IOrderProduct[], userId: number): Promise<IOrder> {
        throw new Error("Method not implemented.");
    }

}