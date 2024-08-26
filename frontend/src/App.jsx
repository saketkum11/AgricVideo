import BrowserRouter from "./BrowserRouter/BrowserRouter";
import { AuthProvider } from "./context/AuthContext";
import { PlaylistProvider } from "./context/PlaylistContext";
import { VideoProvider } from "./context/VideoContext";
import { WatchLaterProvider } from "./context/WatchLaterContext";

function App() {
  return (
    <>
      <div className=" min-h-screen">
        <AuthProvider>
          <VideoProvider>
            <PlaylistProvider>
              <WatchLaterProvider>
                <BrowserRouter />
              </WatchLaterProvider>
            </PlaylistProvider>
          </VideoProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
