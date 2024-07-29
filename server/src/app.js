import cookies from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
const serverPort = 3000 || process.env.PORT;
app.use(cors());

app.use(cookies());
app.listen(serverPort, () => {
  console.log(serverPort);
});
export { app };
