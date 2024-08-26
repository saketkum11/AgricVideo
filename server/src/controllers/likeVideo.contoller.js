//  CRUD operation
// create liked video list
//  read get likes video list
//  delete liked video from video list
import { z as zod } from "zod";
import { ApiErrorHandler } from "../utils/ApiErrorHandler.js";
import { ApiResponse } from "../utils/ApiResponseHandler.js";
import { Like } from "../models/like.model.js";
import mongoose from "mongoose";

const videoIDValidate = zod.string();
const getLikedVideo = async (req, res) => {
  try {
    const likedVideoList = await Like.aggregate([
      {
        $match: {
          likedBy: new mongoose.Types.ObjectId(req.user?._id),
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
                      createdAt: 1,
                      updatedAt: 1,
                    },
                  },
                ],
              },
            },
            {
              $project: {
                _id: 1,
                video: 1,
                owner: 1,
                createdAt: 1,
                updatedAt: 1,
                likedBy: 1,
              },
            },
          ],
        },
      },
    ]);
    return res
      .status(200)
      .json(
        new ApiResponse(200, "Successfully fetched liked video", likedVideoList)
      );
  } catch (error) {}
};
// add video to list
const createLikedVideo = async (req, res) => {
  try {
    const { videoId } = req.params;

    const validateId = videoIDValidate.safeParse(videoId);
    if (!validateId.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid Id", validateId.error.errors, 403));
    }

    const alreadyLikedExits = await Like.findOne({
      video: videoId,
      likedBy: req.user._id,
    });

    if (alreadyLikedExits) {
      await Like.findByIdAndDelete(alreadyLikedExits?._id);
      return res
        .status(409)
        .json(
          new ApiResponse(
            "Already you liked this video",
            { isLiked: false },
            409
          )
        );
    }
    await Like.create({
      likedBy: req.user?._id,
      video: videoId,
    });
    return res.status(200).json(
      new ApiResponse(200, "Successfully Created liked video", {
        isLiked: true,
      })
    );
  } catch (error) {
    return res.status(500).json(new ApiErrorHandler(500, "internal error"));
  }
};

// delete video from the list of liked videos
const deletLikedVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const validatedVideoId = videoIDValidate.safeParse(id);
    if (!validatedVideoId.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid Id", validateId.error.errors, 403));
    }

    await Like.findByIdAndDelete(id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Successfully deleted liked video from list"));
  } catch (error) {
    return res.status(500).json(new ApiErrorHandler(500, "internal error"));
  }
};
export { getLikedVideo, createLikedVideo, deletLikedVideo };
