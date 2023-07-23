import UserService from "../services/userService";
import { Response } from "express";

export class UserController {
    private static instance: UserController;
    public userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public static getInstance(): UserController {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
    
    public async login(req: Request & { params: { userId: number }, query: any }, res: Response) {
        try {
            res.json(await this.userService.login(req.body as any));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    public async register(req: Request & { params: { userId: number }, query: any }, res: Response) {
        try {
            await this.userService.register(req.body as any);
            res.status(200).send('Inserted successfully');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }


}