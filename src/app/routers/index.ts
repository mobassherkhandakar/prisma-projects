import express from "express";
import { userRouters } from "../modules/User/user.routers";
import { categoryRouter } from "../modules/Category/category.router";

const router = express.Router();
const module_router = [
  {
    path: "/user",
    route: userRouters,
  },
  {
    path: "/category",
    route: categoryRouter
  }
];
module_router.forEach((route) => router.use(route.path, route.route));
export default router
