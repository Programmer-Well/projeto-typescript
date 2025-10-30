import { Model } from "@sequelize/core";

interface ProductsModelInterface extends Model {
    id: number,
    name: string,
    value: number,
    quantity: number,
    description: string,
    status: 'disponivel' | 'indisponivel' | 'em_promocao',
    createdAt: Date,
    updatedAt: Date,
}

export default ProductsModelInterface;