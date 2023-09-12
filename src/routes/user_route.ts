import express from "express";
import Auth from "../controller/user_controller.js";

const userRoute = express.Router();

userRoute.get("/getUser", Auth.login);

export default userRoute;
