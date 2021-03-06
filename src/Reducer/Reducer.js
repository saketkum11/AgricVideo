import { ACTION_TYPE } from "./sevice";

const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.DEFAULT_VIDEO:
      return { ...state, video: payload };

    case ACTION_TYPE.WATCHLATER_VIDEO:
      return {
        ...state,
        watchlater: payload,
      };
    case ACTION_TYPE.REMOVE_WATCHLATER_VIDEO:
      return {
        ...state,
        watchlater: payload,
      };

    case ACTION_TYPE.PLAYLIST:
      return {
        ...state,
        playlists: payload,
      };
    case ACTION_TYPE.SINGLE_PLAYLIST:
      return {
        ...state,
        playlist: payload,
      };
    case ACTION_TYPE.VIDEO_TO_PLAYLIST:
      return {
        ...state,
        playlist: payload,
      };
    case ACTION_TYPE.DELETED_VIDEO:
      return {
        ...state,
        playlist: payload,
      };
    case ACTION_TYPE.SINGLE_VIDEO:
      return {
        ...state,
        singleVideo: payload,
      };
    case ACTION_TYPE.LIKED_VIDEO:
      return {
        ...state,
        like: payload,
      };
    case ACTION_TYPE.REMOVE_LIKED_VIDEO:
      return {
        ...state,
        like: payload,
      };
    case ACTION_TYPE.HISTORY:
      return {
        ...state,
        history: payload,
      };
    case ACTION_TYPE.CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export { videoReducer };
