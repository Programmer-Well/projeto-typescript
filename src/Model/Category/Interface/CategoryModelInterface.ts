import { Model } from "@sequelize/core";

interface CategoryModelInterface extends Model {
    
    name: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
}

export default CategoryModelInterface;