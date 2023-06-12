import { v4 as uuidv4 } from "uuid";
import { Product } from "../interfaces/product.interface";

export const products: Product[] = [
  {
    id: uuidv4(),
    title: "Product1",
    description: "Description",
    price: 100,
  },
  {
    id: uuidv4(),
    title: "Product2",
    description: "Description",
    price: 200,
  },
  {
    id: uuidv4(),
    title: "Product3",
    description: "Description",
    price: 300,
  },
  {
    id: uuidv4(),
    title: "Product4",
    description: "Description",
    price: 400,
  },
  {
    id: uuidv4(),
    title: "Product5",
    description: "Description",
    price: 500,
  },
];
