import { DataTypes } from "@sequelize/core";
import connection from "../../config/database";
import UserModelInterface from "./Interface/UserModelInterface";
import 'dotenv/config'; 

const User = connection.define<UserModelInterface>('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
})

export default User