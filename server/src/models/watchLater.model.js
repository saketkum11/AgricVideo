import mongoose, { Schema } from "mongoose";

const watchLaterSchema = new mongoose.Schema(
  {
    watchedBy: {
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
export const WatchLater = mongoose.model("WatchLater", watchLaterSchema);
