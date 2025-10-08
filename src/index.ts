import express from "express";
import { createUserRoutes } from "./infra/routes/userRoutes";

const app = express();

app.use(express.json());

app.use("/api/v1/users", createUserRoutes());

app.get("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
