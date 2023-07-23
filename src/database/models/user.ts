import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface UserAttributes {
    id: number;
    username: string;
    password: string;
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public username!: string;
    public password!: string;
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
    },
    {
        sequelize
    }
);
export default User;