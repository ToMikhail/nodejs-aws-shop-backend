import { v4 as uuidv4 } from "uuid";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

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
