// get video list
import { ApiErrorHandler } from "../utils/ApiErrorHandler.js";
import { Video } from "../models/video.model.js";
import { ApiResponse } from "../utils/ApiResponseHandler.js";

const getVideoList = async (req, res) => {
  try {
    const videos = await Video.find();
    return res
      .status(200)
      .json(new ApiResponse(200, "All videos fetched ", videos));
  } catch (error) {
    return res.statu(500).json(new ApiErrorHandler(500, "internal error"));
  }
};

export { getVideoList };
