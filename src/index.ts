import express, { Request, Response } from "express";
import { routerUser } from "./routers/users";
import { routerProducts } from "./routers/products";
import { routerCart } from "./routers/cart";
import { routerOrders } from "./routers/orders";

const app = express();
const server = express.json();

const port = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL || "http://localhost";

app.use(server);

app.get("/", async function (req: Request, res: Response) {});

app.use("/api/auth", routerUser);
app.use("/api/products", routerProducts);
app.use("/api/cart", routerCart);
app.use("/api/orders", routerOrders);

app.listen(port, function () {
  console.log(`🚀 Server is running on ${baseURL}:${port}`);
});
