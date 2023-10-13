import { IUser } from "../models/models/IUser";
import { IUserService } from "../models/services/IUserService";

export class UserController implements IUserService {
    createUser(email: string, password: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    getByEmail(email: string): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: number, attrs: Partial<IUser>): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    removeUser(id: number): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
}