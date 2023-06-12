import * as aws from "aws-sdk";

const tableName = 'AWS_Cloud_Products'
const documentClient = new aws.DynamoDB.DocumentClient({ region: "eu-west-1" });

const hashKey = "id";

const batchWrite = async () => {
  await documentClient
    .batchWrite({
      RequestItems: {
        [tableName]: [
          {
            PutRequest: {
              Item: {
                [hashKey]: "deeac8f7-cfd7-45ae-b9aa-100c6e15f0cb",
                title: "Product1" ,
                description: "Description",
                price: 100,
              },
            },
          },
          {
            PutRequest: {
              Item: {
                [hashKey]: "9cbbb25c-aa29-4277-8844-13ab1493a5e3",
                title: "Product2" ,
                description: "Description",
                price: 200,
              },
            },
          },
          {
            PutRequest: {
              Item: {
                [hashKey]: "59b263d4-ed24-4061-9898-9d02230f9504",
                title: "Product3" ,
                description: "Description",
                price: 300,
              },
            },
          },
          {
            PutRequest: {
              Item: {
                [hashKey]: "09b8aa27-1652-49b8-9c0f-d1872d105014",
                title: "Product4" ,
                description: "Description",
                price: 400,
              },
            },
          },
          {
            PutRequest: {
              Item: {
                [hashKey]: "3e44e5a2-b6d9-482b-8fc5-21a45964551b",
                title: "Product5" ,
                description: "Description",
                price: 500,
              },
            },
          },

        ],
      },
    }).promise();
};

batchWrite();
