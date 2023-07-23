import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';
import bcrypt from "bcrypt";

interface UserAttributes {
    id: number;
    username: string;
    password: string;
    usertype:string
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public username!: string;
    public password!: string;
    public usertype!:string;
}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.CHAR(60),
            allowNull: false,
        },
        usertype: {
            defaultValue:"user",
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    },
    {
        tableName:"User",
        sequelize
    }
);
User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});
export default User;