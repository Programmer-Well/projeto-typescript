import connection from "../config/database";
import User from "./User/User";
import Product from "./products/Products";

Category.hasMany(Product, {
    foreignKey: 'categoryId'
});

Product.belongsTo(Category, {
    foreignKey: 'categoryId'
});

connection.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.")
})

export default {
    User,
    Product,
    Category,
}