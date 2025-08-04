import { useAudioPlayer } from "@/context/AudioPlayerContext";
import MiniPlayer from "./MiniPlayer";
import FullPlayer from "./FullPlayer";

export default function Player() {
  const { isMinimized } = useAudioPlayer();
  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999]">
      {isMinimized ? <MiniPlayer /> : <FullPlayer />}
    </div>
  );
}