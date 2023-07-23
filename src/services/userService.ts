import User from "../database/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require('dotenv').config();

export default class UserService {
    public async login(user: User) {
        const foundUser = await User.findOne({ where: { username: user.username } });
        if (!foundUser) {
            throw new Error('Name of user is not correct');
        }
        const isMatch = bcrypt.compareSync(user.password, foundUser.password);
        if (isMatch) {
            const token = jwt.sign({ id: foundUser.id.toString(), username: foundUser.username }, process.env.SECRET_KEY, {
                expiresIn: '2 days',
            });
            let _id = foundUser.id;
            let username = foundUser.username;
            return { user: { _id, username }, token: token };
        } else {
            throw new Error('Password is not correct');
        }
    }

    public async register(user: User) {
        const foundUser = await User.findOne({ where: { username: user.username } });
        if (foundUser) {
            throw new Error('Username already taken.');
        }
        await User.create(user);
    }
}