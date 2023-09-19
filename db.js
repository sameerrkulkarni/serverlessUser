const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const db = new DynamoDBClient({});

module.exports = db;
