import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { useRef } from "react";
import { FaBackward, FaForward } from "react-icons/fa";
import Image from "next/image";

export default function AudioPlyr() {
  const { isPlaying, pauseTrack, playTrack, currentTrack, setIsMinimized, selectedEpisode, isMinimized } = useAudioPlayer();
  const playerRef = useRef(null);

  const forward = () => {
    const player = playerRef.current.audio.current;
    if (player) player.currentTime += 10;
  };

  const backward = () => {
    const player = playerRef.current.audio.current;
    if (player) player.currentTime -= 10;
  };

  if (!selectedEpisode?.link) return null;

  return (
    <div className="flex justify-between">
    {isMinimized && 
    <div className="flex gap-2 items-center">
      <div className=" relative w-12 h-12">
        <Image
          src={selectedEpisode?.thumbnail || ""}
          alt={selectedEpisode?.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="text-sm w-1/2 capitalize">{selectedEpisode?.title || ""}</div>
      </div>
    } 
    <AudioPlayer
      ref={playerRef}
      src={selectedEpisode.link}
      autoPlay
      showJumpControls={false}
      onPlay={() => playTrack(selectedEpisode)}
      onPause={pauseTrack}
      // customAdditionalControls={[
      //   <button className="custom-skip-btn" onClick={backward} key="backward">
      //     <FaBackward />
      //   </button>,
      //   <button className="custom-skip-btn" onClick={forward} key="forward">
      //     <FaForward />
      //   </button>,
      // ]}
      className="rounded-lg"
    />
    </div>
  );
}