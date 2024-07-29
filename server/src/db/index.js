import mongoose from "mongoose";
import { DATA_BASE } from "../constant.js";

const connectToDataBase = async () => {
  try {
    mongoose.connect(`${process.env.DATA_BASE_URL}/${DATA_BASE}`);
    console.log("connect to mongo data base");
  } catch (error) {
    console.error(error);
  }
};
export { connectToDataBase };
