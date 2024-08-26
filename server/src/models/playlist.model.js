import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    video: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);
export const Playlist = mongoose.model("Playlist", playlistSchema);
