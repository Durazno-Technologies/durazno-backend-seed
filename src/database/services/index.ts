import createDynamoDBClient from "../db";
import UserService from "./userService";

const { USERS_TABLE } = process.env;

export const userService = new UserService(createDynamoDBClient(), USERS_TABLE);
