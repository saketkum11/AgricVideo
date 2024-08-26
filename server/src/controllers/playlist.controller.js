// crud operation
// create a playlist video
// get all playlist
// delete playlist
// add video to a playlist
// update playlist

import { z as zod } from "zod";
import { ApiErrorHandler } from "../utils/ApiErrorHandler.js";
import { Playlist } from "../models/playlist.model.js";
import { ApiResponse } from "../utils/ApiResponseHandler.js";
import mongoose from "mongoose";

const checkContent = zod.string();
const validateId = zod.string();

const getAllPlaylist = async (req, res) => {
  try {
    const expandPlaylist = await Playlist.aggregate([
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(req.user?._id),
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
    ]);

    return res
      .status(200)
      .json(new ApiResponse(200, "Fetched all playlist data", expandPlaylist));
    return;
  } catch (error) {}
};
const createPlaylist = async (req, res) => {
  try {
    // take video id
    // do manupulation
    //
    const { content } = req.body;
    console.log(content);

    const validateContent = checkContent.safeParse(content);
    console.log(content);

    if (!validateContent.success) {
      return res.status(405).json(new ApiErrorHandler("Invalid id", _, 409));
    }
    const createPlayList = await Playlist.create({
      content,
      createdBy: req.user?._id,
    });
    if (!createPlayList) {
      return res.status(403).json(new ApiErrorHandler("PlayList not created"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "Succesfully created playlist"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiErrorHandler("Internal error", error, 500));
  }
};
const addVideoToPlaylist = async (req, res) => {
  console.log(req.params);

  try {
    const { playlistId, videoId } = req.params;
    const validate = validateId.safeParse(playlistId);
    const playlistIDValidate = validateId.safeParse(videoId);
    if (!validate.success || !playlistIDValidate.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid playlistId", _, 403));
    }
    const updateVideo = await Playlist.findByIdAndUpdate(
      playlistId,
      {
        $addToSet: {
          video: videoId,
        },
      },
      { new: true }
    );

    if (!updateVideo) {
      return res
        .status(409)
        .json(new ApiErrorHandler("Failed to update the playlist", _, 409));
    }
    const expandPlaylist = await Playlist.aggregate([
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(req.user?._id),
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
    ]);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Successfully updated the playlist",
          expandPlaylist
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiErrorHandler("Internal error", error, 500));
  }
};
const removeVideoFromPlayList = async (req, res) => {
  try {
    const { videoId, playlistId } = req.params;
    const validate = validateId.safeParse(playlistId);
    const validateVidoeId = validateId.safeParse(videoId);
    if (!validate.success || !validateVidoeId.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid playlistId or videoId", _, 403));
    }
    const removeVideo = await Playlist.findByIdAndUpdate(
      playlistId,
      {
        $pull: {
          video: videoId,
        },
      },
      { new: true }
    );
    if (!removeVideo) {
      return res
        .status(403)
        .json(new ApiErrorHandler("video not removed", _, 403));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "Successfully removed video from playlist"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiErrorHandler("Internal error", error, 500));
  }
};
const deletePlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const validate = validateId.safeParse(playlistId);
    if (!validate.success) {
      return res
        .status(403)
        .json(new ApiErrorHandler("Invalid playlistId", _, 403));
    }
    const removeplaylist = await Playlist.findByIdAndDelete(playlistId);
    if (!removeplaylist) {
      return res
        .status(403)
        .json(new ApiErrorHandler("playlist did not removed", _, 403));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Successfully removed the playlist", {}));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiErrorHandler("Internal error", error, 500));
  }
};
export {
  createPlaylist,
  getAllPlaylist,
  addVideoToPlaylist,
  deletePlaylist,
  removeVideoFromPlayList,
};
