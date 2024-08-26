import { User } from "../models/user.model.js";
import { z as zod } from "zod";
import { ApiErrorHandler } from "../utils/ApiErrorHandler.js";
const user = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
  fullName: zod.string(),
  username: zod.string(),
});
const loginUser = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});
const registerUser = async (req, res) => {
  const { email, password, fullName, username } = req.body;
  console.log("line16", req.body);
  const validUser = user.safeParse(req.body);

  if (!validUser.success) {
    return res.status(403).json(validUser.error.errors);
  }
  const alreadyAccount = await User.findOne({
    $or: [{ username }, { email }, { fullName }],
  });
  if (alreadyAccount) {
    return res.status(403).json({
      message: " user account is already  created by Email or username",
    });
  }
  const createUser = await User.create(validUser.data);

  return res.status(200).json(createUser);
};
const login = async (req, res) => {
  try {
    const validUser = loginUser.safeParse(req.body);
    const {
      data: { email, password },
    } = validUser;
    if (!validUser.success) {
      return res.status(403).json(new ApiErrorHandler(validUser.error.message));
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json(
          new ApiErrorHandler("User does not exits with this email id", 404)
        );
    }

    const checkPassword = await user.isPasswordCorrect(password);
    if (!checkPassword) {
      return res
        .status(403)
        .json(
          new ApiErrorHandler(403, "Invalid credentials or password is wrong")
        );
    }
    const loggedInUser = await User.findOne({ email }).select("-password");
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    const options = { httpOnly: true, secure: true };
    return res
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .status(200)
      .json(loggedInUser);
  } catch (error) {
    return res.status(500).json(new ApiErrorHandler(500, error.message));
  }
};
const logoutUser = async (req, res) => {
  try {
    const options = { httpOnly: true, secure: true };
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({ message: "SuccessFully Logged out" });
  } catch (error) {
    return res.status(500).json(new ApiErrorHandler(500, error.message));
  }
};
export { registerUser, login, logoutUser };
