// get all history video
// add to histroy video list
import { z as zod } from "zod";
import { History } from "../models/history.model.js";
import { ApiErrorHandler } from "../utils/ApiErrorHandler.js";
import { ApiResponse } from "../utils/ApiResponseHandler.js";
import mongoose from "mongoose";
// delete video from histroy video
const videoIDValidate = zod.string();

const getAllHistoryVideo = async (req, res) => {
  try {
    const HistoryVideoList = await History.aggregate([
      {
        $match: {
          viewedBy: new mongoose.Types.ObjectId(req.user?._id),
        },
      },
      {
        $lookup: {
          from: "videos",
          localField: "video",
          foreignField: "_id",
          as: "video",
          pipeline: [
            {
              $lookup: {
                from: "users",
                localField: "owner",
                foreignField: "_id",
                as: "owner",
                pipeline: [
                  {
                    $project: {
                      fullName: 1,
                      email: 1,
                      username: 1,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          video: 1,
        },
      },
    ]);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Successfully fetched history video",
          HistoryVideoList
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiErrorHandler(500, "internal error", error));
  }
};
const addVideohistory = async (req, res) => {
  try {
    const { videoId } = req.params;

    const validateId = videoIDValidate.safeParse(videoId);
    if (!validateId.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid Id", validateId.error.errors, 403));
    }

    const alreadyExitsWatchList = await History.findOne({
      video: videoId,
      viewedBy: req.user?._id,
    });

    if (alreadyExitsWatchList) {
      return res
        .status(409)
        .json(
          new ApiErrorHandler(
            "ALready video added to histroy list",
            "already added in the list",
            409
          )
        );
    }
    await History.create({
      viewedBy: req.user?._id,
      video: videoId,
    });
    return res
      .status(200)
      .json(new ApiResponse(200, "Successfully added video into history list"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiErrorHandler(500, "internal error", error));
  }
};
const deletVideoFromHistory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const validatedVideoId = videoIDValidate.safeParse(id);
    console.log(validatedVideoId);
    if (!validatedVideoId.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid Id", validateId.error.errors, 403));
    }
    const findVideoinWatcheLater = await History.findById(id);
    console.log(findVideoinWatcheLater);
    if (!findVideoinWatcheLater) {
      return res
        .status(404)
        .json(new ApiErrorHandler("not found in the list", "not found", 404));
    }

    await History.findByIdAndDelete(id);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Successfully deleted  video from history list",
          {}
        )
      );
  } catch (error) {
    return res.status(500).json(new ApiErrorHandler(500, "internal error"));
  }
};

export { getAllHistoryVideo, addVideohistory, deletVideoFromHistory };
