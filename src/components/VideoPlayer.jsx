import { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { IoMdClose } from "react-icons/io";
import "plyr/dist/plyr.css";

export default function VideoPlayer() {
  const { selectedEpisode, setCurrentTrack, setSelectedEpisode } =
    useAudioPlayer();
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Plyr(videoRef.current, {
        controls: [
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "fullscreen",
        ],
      });

      // Handle fullscreen events
      player.on("enterfullscreen", () => setIsFullscreen(true));
      player.on("exitfullscreen", () => setIsFullscreen(false));
    }
  }, [selectedEpisode?.link]);

  return (
    <div className="fixed inset-0 z-[99] bg-black flex justify-center p-4">
      <div className="relative w-full max-w-[90vw]">
        <div className="flex justify-between items-center">
          <div className="p-6 text-left font-semibold text-lg text-white">
            {selectedEpisode?.title}
          </div>
          <button
            className="text-white text-xl cursor-pointer z-50"
            onClick={() => {
              setSelectedEpisode(null);
              setCurrentTrack(null);
            }}
          >
            <IoMdClose size={22} />
          </button>
        </div>
        <video
          ref={videoRef}
          src={selectedEpisode?.link}
          playsInline
          controls
          autoPlay
          className={`w-auto h-full rounded-lg ${
            isFullscreen ? "" : "max-h-[90vh]"
          }`}
        />
      </div>
    </div>
  );
}
