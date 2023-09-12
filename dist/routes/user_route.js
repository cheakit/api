import express from "express";
import { getUser } from "../controller/user_controller.js";
const userRoute = express.Router();
userRoute.get("/getUser", getUser);
export default userRoute;
//# sourceMappingURL=user_route.js.map