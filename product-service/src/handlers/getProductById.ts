import { Handler } from "aws-cdk-lib/aws-lambda";
import { products } from "../mocks/productList";

export const handler: Handler = async (event: any) => {

  const productId = event.pathParameters.id;
  try {
    const product = products.find((el) => el.id === productId);
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(product)
    };
  } catch (error: any) {
    return reportError({ message: error.message });
  }
};