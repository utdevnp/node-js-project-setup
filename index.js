import express from "express";
import routes from "./routes/index.js";
import env from "./config/env.js";
import connectDB from "./utils/database.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
connectDB();
app.use("/", routes);
app.listen(process.env.PORT || 3000, function () {
  console.log("Server listening on port " + process.env.PORT || 3000);
});
