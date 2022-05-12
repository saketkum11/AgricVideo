import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Auth-context/Auth-context";
import { VideoProvider } from "./Context/Video-Context/video-context";
import { WatchProvider } from "./Context/WatchLater-context/Watch-context";
import { PlayProvider } from "./Context/Playlets-context/Playlets-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <WatchProvider>
            <PlayProvider>
              <App />
            </PlayProvider>
          </WatchProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
