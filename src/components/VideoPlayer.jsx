import { useEffect, useRef } from "react";
import Plyr from "plyr";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { IoMdClose } from "react-icons/io";

export default function VideoPlayer() {
  const { selectedEpisode, setCurrentTrack, setSelectedEpisode } =
    useAudioPlayer();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      new Plyr(videoRef.current, {
        controls: [
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "fullscreen",
        ],
      });
    }
  }, [selectedEpisode?.link]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex justify-center p-4">
      <div className="relative w-full max-w-[90vw]">
        <div className="flex justify-between items-center">
          <div className="p-6 text-left font-semibold text-lg">
            {selectedEpisode?.title}
          </div>
          <button
            // className="absolute top-2 right-2 text-white text-xl z-50 cursor-pointer"
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
          className="w-full h-auto max-h-[80vh] rounded-lg"
        />
      </div>
    </div>
  );
}