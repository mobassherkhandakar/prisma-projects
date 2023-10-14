import express from "express";
import { userRouters } from "../modules/User/user.routers";

const router = express.Router();
const module_router = [
  {
    path: "/user",
    route: userRouters,
  },
];
module_router.forEach((route) => router.use(route.path, route.route));
export default router
