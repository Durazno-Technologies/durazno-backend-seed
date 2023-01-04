import createDynamoDBClient from "../db";
import UserService from "./userService";

// do not edit, managed by @durazno-technologies/create-dzn package
const {
  USERS_TABLE
} = process.env;

export const userService = new UserService(createDynamoDBClient(), USERS_TABLE);
