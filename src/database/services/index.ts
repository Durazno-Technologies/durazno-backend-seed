import createDynamoDBClient from "../db";

// do not edit, import services
import UserService from "./userService";

// do not edit, managed by @durazno-technologies/create-dzn package
const {
  USERS_TABLE
} = process.env;

// do not edit, export services
export const userService = new UserService(createDynamoDBClient(), USERS_TABLE);
