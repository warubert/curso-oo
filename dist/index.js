"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./infra/routes/userRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/users", (0, userRoutes_1.createUserRoutes)());
app.get("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "Hello World" });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
