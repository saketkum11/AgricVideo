// crud operation
// create a list watchlist video
// read watchlist video from database which  is get watch list  video
// delete watchlist video from the data base
// delete all video from the data bases

import { WatchLater } from "../models/watchLater.model.js";
import { z as zod } from "zod";
import { ApiErrorHandler } from "../utils/ApiErrorHandler.js";
import { ApiResponse } from "../utils/ApiResponseHandler.js";
import mongoose from "mongoose";

const videoIDValidate = zod.string();
// get watchlater video
const getWatchListLaterVideo = async (req, res) => {
  try {
    const watchLaterVideos = await WatchLater.aggregate([
      {
        $match: {
          watchedBy: new mongoose.Types.ObjectId(req.user?._id),
        },
      },

      {
        $lookup: {
          from: "videos",
          localField: "video",
          foreignField: "_id",
          as: "video",
        },
      },
      {
        $unwind: "$video",
      },
      {
        $project: {
          _id: 1,
          watchedBy: 1,
          video: {
            _id: 1,
            thumbnail: 1,
            title: 1,
            profile: 1,
            profileName: 1,
            description: 1,
            duration: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      },
    ]);
    console.log("form get", watchLaterVideos);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Successfully fetched watchLater video",
          watchLaterVideos
        )
      );
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};
// create watchlater video List
const createWatcherLaterVideo = async (req, res) => {
  try {
    const { videoId } = req.params;
    console.log(videoId);
    const validateId = videoIDValidate.safeParse(videoId);
    if (!validateId.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid Id", validateId.error.errors, 403));
    }

    const alreadyExitsWatchList = await WatchLater.findOne({
      video: videoId,
      watchedBy: req.user?._id,
    });

    if (alreadyExitsWatchList) {
      return res
        .status(409)
        .json(
          new ApiErrorHandler(
            "ALready video added to watch list",
            "already added in the list",
            409
          )
        );
    }
    await WatchLater.create({
      watchedBy: req.user?._id,
      video: videoId,
    });
    const watcherLaterVideoList = await WatchLater.aggregate([
      {
        $match: {
          watchedBy: new mongoose.Types.ObjectId(req.user?._id),
        },
      },
      {
        $lookup: {
          from: "videos",
          localField: "video",
          foreignField: "_id",
          as: "video",
        },
      },
      {
        $unwind: "$video",
      },
      {
        $project: {
          _id: 1,
          watchedBy: 1,
          video: {
            _id: 1,
            thumbnail: 1,
            title: 1,
            profile: 1,
            profileName: 1,
            description: 1,
            duration: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      },
    ]);
    console.log("from line 115", watcherLaterVideoList);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Successfully added video into watch later list",
          watcherLaterVideoList
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiErrorHandler(500, "internal error", error));
  }
};
// remove video from watch later video
const deleteWatcherLaterVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const validatedVideoId = videoIDValidate.safeParse(id);
    if (!validatedVideoId.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid Id", validateId.error.errors, 403));
    }
    const findVideoinWatcheLater = await WatchLater.findById(id);
    if (!findVideoinWatcheLater) {
      return res
        .status(404)
        .json(new ApiErrorHandler("not found in the list", "not found", 404));
    }

    await WatchLater.findByIdAndDelete(id);
    const watcherLaterVideoList = await WatchLater.aggregate([
      {
        $match: {
          watchedBy: new mongoose.Types.ObjectId(req.user?._id),
        },
      },
      {
        $lookup: {
          from: "videos",
          localField: "video",
          foreignField: "_id",
          as: "video",
        },
      },
      {
        $unwind: "$video",
      },
      {
        $project: {
          _id: 1,
          watchedBy: 1,
          video: {
            _id: 1,
            thumbnail: 1,
            title: 1,
            profile: 1,
            profileName: 1,
            description: 1,
            duration: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      },
    ]);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Successfully deleted  video from watchLater list",
          watcherLaterVideoList
        )
      );
  } catch (error) {
    return res.status(500).json(new ApiErrorHandler(500, "internal error"));
  }
};
export {
  getWatchListLaterVideo,
  createWatcherLaterVideo,
  deleteWatcherLaterVideo,
};
