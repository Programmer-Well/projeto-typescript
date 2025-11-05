import { DataTypes } from "@sequelize/core";
import connection from "../../config/database";
import ProductsModelInterface from "./Interface/ProductsModelInterface"; 

const Product = connection.define<ProductsModelInterface>('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },

    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, 
        validate: {
            isDecimal: true,
            min: 0
        }
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true 
    },


    status: {
        type: DataTypes.ENUM('disponivel', 'indisponivel', 'em_promocao'),
        allowNull: false,
        defaultValue: 'disponivel' 
    }
})

export default Product