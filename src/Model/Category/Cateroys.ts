import { DataTypes } from "@sequelize/core";
import connection from "../../config/database";
import 'dotenv/config'; 

const Category = connection.define('category', {

    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true    
    },

    description: {
        type: DataTypes.TEXT, 
        allowNull: true   
    }
});

export default Category;