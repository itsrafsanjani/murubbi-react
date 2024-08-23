import { faRedo, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useSound from "use-sound";
import "./App.css";
import sfx from "./assets/sounds/sfx.mp3";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const [play] = useSound(sfx, {
    interrupt: true,
    onend: () => setIsPlaying(false),
  });

  const handlePlay = () => {
    play();
    setIsPlaying(true);
  };

  return (
    <>
      <div>
        <h1>403</h1>
        <h3 className="msg">You are not allowed to access this page.</h3>

        <button className="btn-retry" onClick={handlePlay}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faVolumeUp} className="speaker-icon" />
          ) : (
            <FontAwesomeIcon icon={faRedo} className="reload-icon" />
          )}
          <span>{isPlaying ? "Playing audio..." : "Retry"}</span>
        </button>
      </div>
    </>
  );
}

export default App;
