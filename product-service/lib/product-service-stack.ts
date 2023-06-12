import * as cdk from "aws-cdk-lib";
import { NodejsFunction, NodejsFunctionProps } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as apiGateway from "@aws-cdk/aws-apigatewayv2-alpha";
import { HttpLambdaIntegration } from "@aws-cdk/aws-apigatewayv2-integrations-alpha";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as dynamoDB  from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";


const table = 'AWS_Cloud_Products'
export class ProductServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // console.log('urla',`${process.env.DYNAMO_DB_ARN}/${table}`);
    // console.log('tabla',dynamoDB.Table(this, `${table}Table`, table).process.env.DYNAMO_DB_ARN);



    
        // Grant additional permissions for Scan operation
    const dynamoDBPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        "dynamodb:Scan",
        "dynamodb:Query",
        "dynamodb:PutItem",
        "dynamodb:UpdateItem",
        "dynamodb:TransactWriteItems"
      ],
      resources: ["arn:aws:dynamodb:eu-west-1:290971342614:table/*"],
    });
    // The code that defines your stack goes here

    const sharedLambdaProps: Partial<NodejsFunctionProps> = {
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        PRODUCT_AWS_REGION: "eu-west-1",
      },
    };

    const getProductsList = new NodejsFunction(this, "GetProductsList", {
      ...sharedLambdaProps,
      functionName: "getProductsList",
      entry: "src/handlers/getProductsList.ts",
    });

    const getProductById = new NodejsFunction(this, "GetProductById", {
      ...sharedLambdaProps,
      functionName: "getProductById",
      entry: "src/handlers/getProductById.ts",
    });

    const api = new apiGateway.HttpApi(this, "ProductApi", {
      corsPreflight: {
        allowHeaders: ["*"],
        allowOrigins: ["*"],
        allowMethods: [apiGateway.CorsHttpMethod.ANY],
      },
    });

    api.addRoutes({
      integration: new HttpLambdaIntegration(
        "GetProductsListIntegration",
        getProductsList
      ),
      path: "/products",
      methods: [apiGateway.HttpMethod.GET],
    });

    api.addRoutes({
      integration: new HttpLambdaIntegration(
        "GetProductsListIntegration",
        getProductById
      ),
      path: "/products/{id}",
      methods: [apiGateway.HttpMethod.GET],
    });
  }

  // example resource
  // const queue = new sqs.Queue(this, 'ProductServiceQueue', {
  //   visibilityTimeout: cdk.Duration.seconds(300)
  // });
}
