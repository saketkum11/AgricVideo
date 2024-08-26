import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    videoId: {
      type: String,
      require: true,
      unique: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: String,
    },
    profile: {
      type: String,
      require: true,
    },
    profileName: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export const Video = mongoose.model("Video", videoSchema);
