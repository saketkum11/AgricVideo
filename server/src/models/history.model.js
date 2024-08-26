import mongoose, { Schema } from "mongoose";

const historySchema = new mongoose.Schema(
  {
    viewedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  },
  { timestamps: true }
);
export const History = mongoose.model("History", historySchema);
