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
import { LikeProvider } from "./Context/Like/Like-context";
import { HistoryProvider } from "./Context/History-context/History-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <WatchProvider>
            <PlayProvider>
              <LikeProvider>
                <HistoryProvider>
                  <App />
                </HistoryProvider>
              </LikeProvider>
            </PlayProvider>
          </WatchProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
