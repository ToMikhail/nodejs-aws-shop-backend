import { Handler } from "aws-cdk-lib/aws-lambda";
import { products } from "../mocks/productList";

export const handler: Handler = async (event: Event) => {
  try {
    if (!products) {
      return {
        statusCode: 404,
        headers: { "Content-Type": "text/plain" },
        body: "Products haven't been found",
      };
    }
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(products)
    };
  } catch (error: any) {
    return reportError({ message: error.message });
  }
};
