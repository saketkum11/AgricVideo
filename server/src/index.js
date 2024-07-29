import dotenv from "dotenv";
import { connectToDataBase } from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectToDataBase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server Started ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Mongo db Connection Failed:", error);
  });
