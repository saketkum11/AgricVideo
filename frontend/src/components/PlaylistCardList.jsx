/* eslint-disable react/prop-types */
import { TbPlaylistAdd } from "react-icons/tb";
import { FaEllipsisV } from "react-icons/fa";

import Button from "./Button";
import { usePlaylist } from "../context/PlaylistContext";
import React, { useState } from "react";
import ToggleList from "./ToggleList";
import { useNavigate } from "react-router-dom";
const ListItem = React.lazy(() => import("./ListItem"));
const PlaylistCardList = ({ list }) => {
  const [toggle, setToggle] = useState(false);
  const { deletePlaylist } = usePlaylist();
  const navigate = useNavigate();
  const handleDeletePlaylist = () => {
    deletePlaylist({ playlistId: list?._id });
  };
  const handleToggle = () => {
    setToggle((flag) => !flag);
  };
  const navigateToPlaylist = () => {
    navigate(`/playlist/${list._id}`);
  };
  return (
    <div
      onClick={navigateToPlaylist}
      className="bg-zinc-800 cursor-pointer backdrop-opacity-90   border-2 h-48 rounded-md shadow-md relative"
    >
      <div></div>
      <div className=" py-3 h-full flex justify-center items-end ">
        <div className=" w-full flex justify-between items-center px-4">
          <h2 className="text-white text-lg  ">{list.content}</h2>
          <TbPlaylistAdd className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <Button
          type={"button"}
          onClick={handleToggle}
          label={<FaEllipsisV className="h-5 w-5 text-white" />}
        ></Button>
      </div>
      <div className="absolute top-0 right-0">
        {toggle && (
          <ToggleList>
            <ListItem>Rename</ListItem>
            <ListItem onClick={handleDeletePlaylist}>Delete </ListItem>
          </ToggleList>
        )}
      </div>
    </div>
  );
};

export default PlaylistCardList;
