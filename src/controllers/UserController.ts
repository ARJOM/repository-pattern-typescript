import { Request, Response } from "express";
import { User } from "../models/User";
import UserService from "../service/UserService";

export class UserController {

    public static async save(req: Request, res: Response){
        const user: User = req.body;
        const userService = new UserService();
        res.json(userService.save(user));
    }

}