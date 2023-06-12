import { products } from "../mocks/productList";
import { Product } from "../interfaces/product.interface";

const newProducts = (products: any) => {
  
  const ddbItems = products.map((product: any) => {
    const modifiedProducts: any = {};
    
    for (const key in product) {
      if (product.hasOwnProperty(key)) {
        const value = product[key];

        if (typeof value === "string") {
          modifiedProducts[key] = { S: value };
        }
        else if (typeof value === "number") {
          modifiedProducts[key] = { N: value };
        }
      }

    }
    return modifiedProducts
  });
  console.log("ddbItems", ddbItems);
};

newProducts(products);