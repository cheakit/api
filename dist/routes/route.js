import { productRoute } from "./product_route.js";
import userRoute from "./user_route.js";
export const MyRoute = (app) => {
    app.use("/api", productRoute);
    app.use("/api", userRoute);
};
//# sourceMappingURL=route.js.map