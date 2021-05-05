import { Switch, Route, useLocation } from "react-router-dom";
import routes from "./routes";
import BottomNav from "./components/layouts/BottomNav";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { VscUnmute, VscMute } from "react-icons/vsc";

function App() {
  const location = useLocation();
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    let musicEl = document.getElementById("music");
    musicEl.autoplay = true;
    setPlay(true);
  };

  const togglePlayMusic = () => {
    let musicEl = document.getElementById("music");

    if (play) {
      musicEl.pause();
    } else {
      musicEl.play();
    }

    setPlay(!play);
  };

  useEffect(() => {
    playMusic();
  }, []);

  return (
    <div>
      <audio id="music" loop>
        <source src="/audio/clip.mp3" />
      </audio>

      {location.pathname !== "/" && (
        <button
          className="btn btn-default rounded bg-white shadow-none music-button"
          onClick={() => togglePlayMusic()}
          id="music-button"
        >
          {play ? (
            <VscUnmute className="mt-n1" style={{ fontSize: 18 }} />
          ) : (
            <VscMute className="text-danger mt-n1" style={{ fontSize: 18 }} />
          )}
        </button>
      )}

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {routes.map((route, i) => (
            <Route key={i} {...route} exact />
          ))}
        </Switch>
      </AnimatePresence>
      {location.pathname !== "/" && <BottomNav />}
    </div>
  );
}

export default App;
