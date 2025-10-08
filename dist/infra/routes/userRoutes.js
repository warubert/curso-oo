"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRoutes = createUserRoutes;
const express_1 = require("express");
function createUserRoutes() {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        res.json({ message: "users..." });
    });
    router.post("/", (req, res) => {
        res.json({ message: "User created" });
    });
    router.get("/:id", (req, res) => {
        res.json({ message: "User found" });
    });
    router.put("/:id", (req, res) => {
        res.json({ message: "User updated" });
    });
    router.delete("/:id", (req, res) => {
        res.json({ message: "User deleted" });
    });
    return router;
}
