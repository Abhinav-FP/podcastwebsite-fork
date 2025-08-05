import { useEffect, useRef } from "react";
import Plyr from "plyr";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

export default function AudioPlyr() {
  const { selectedEpisode, setIsPlaying } = useAudioPlayer();
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      const plyr = new Plyr(playerRef.current, {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume'],
      });

      plyr.on("play", () => setIsPlaying(true));
      plyr.on("pause", () => setIsPlaying(false));

      return () => plyr.destroy();
    }
  }, [selectedEpisode?.link]);

  return (
    <audio
      ref={playerRef}
      src={selectedEpisode?.link}
      autoPlay
      controls
      className="w-full plyr-audio"
    />
  );
}