import mongoose, { Schema } from "mongoose";
import bcyrpt from "bcrypt";
import Jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      require: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      lowercase: true,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      lowercase: true,
      require: true,
      unique: true,
      trim: true,
    },
    watchList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    playList: [{ type: Schema.Types.ObjectId, ref: "Video" }],
    likeVideo: [{ type: Schema.Types.ObjectId, ref: "Video" }],
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcyrpt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcyrpt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = function () {
  return Jwt.sign(
    {
      _id: this._id,
      name: this.fullName,
      username: this.username,
      password: this.password,
    },
    process.env.ACCESS_tOKEN_SCERET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};
userSchema.methods.generateRefreshToken = function () {
  return Jwt.sign(
    {
      id: this._id,
      username: this.username,
    },
    process.env.REFRESH_TOKEN_SCERET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
export const User = mongoose.model("user", userSchema);
