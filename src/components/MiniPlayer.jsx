// /components/MiniPlayer.jsx
import { useAudioPlayer } from "@/context/AudioPlayerContext";

export default function MiniPlayer() {
  const { isPlaying, pauseTrack, playTrack, currentTrack, setIsMinimized, selectedEpisode } = useAudioPlayer();

  return (
    <div className="bg-gray-900 text-white p-2 flex justify-between items-center px-4">
      <div className="text-sm truncate w-1/2 capitalize">{selectedEpisode?.title || ""}</div>
      <div className="flex items-center space-x-4">
        {isPlaying ? (
          <button onClick={pauseTrack}>⏸️</button>
        ) : (
          <button onClick={() => playTrack(selectedEpisode)}>▶️</button>
        )}
        <button onClick={() => setIsMinimized(false)}>⬆️</button>
      </div>
    </div>
  );
}