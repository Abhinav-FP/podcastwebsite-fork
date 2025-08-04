// /components/FullPlayer.jsx
import { useAudioPlayer } from "@/context/AudioPlayerContext";

export default function FullPlayer() {
  const { isPlaying, pauseTrack, playTrack, currentTrack, setIsMinimized, selectedEpisode } = useAudioPlayer();

  return (
    <div className="bg-black text-white p-4 flex flex-col space-y-4 h-screen">
      <div className="text-center text-lg font-semibold">{currentTrack || "No Track"}</div>
      <div className="flex justify-center space-x-6">
        {isPlaying ? (
          <button onClick={pauseTrack}>⏸️ Pause</button>
        ) : (
          <button onClick={() => playTrack(selectedEpisode)}>▶️ Play</button>
        )}
      </div>
      <div className="text-center">
        <button onClick={() => setIsMinimized(true)}>⬇️ Minimize</button>
      </div>
    </div>
  );
}