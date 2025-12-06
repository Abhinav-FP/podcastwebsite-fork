import { useAudioPlayer } from "@/context/AudioPlayerContext";
import Player from "./Player";

export default function AudioPlayerWrapper() {
  const { currentTrack } = useAudioPlayer();
  if (!currentTrack) return null;
  return <Player />;
}
