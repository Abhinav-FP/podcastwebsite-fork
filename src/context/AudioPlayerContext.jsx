import { createContext, useContext, useRef, useState, useEffect } from "react";

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  /**
   * ✅ CHANGE TRACK (NO PLAY LOGIC HERE)
   */
  const playTrack = (episode) => {
    if (!episode) return;

    // stop existing audio immediately
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setSelectedEpisode(episode);
    setCurrentTrack(episode.link);
  };

  /**
   * ✅ AUDIO PLAY/PAUSE HANDLERS
   */
  const pauseTrack = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  /**
   * ✅ AUDIO LIFECYCLE (THIS IS KEY)
   */
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;

    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);

    return () => {
      audioRef.current.pause();
    };
  }, [currentTrack]);

  return (
    <AudioPlayerContext.Provider
      value={{
        audioRef,
        currentTrack,
        selectedEpisode,
        isPlaying,
        isMinimized,
        setIsMinimized,
        playTrack,
        pauseTrack,
        setSelectedEpisode,
        setCurrentTrack,
      }}
    >
      {children}

      {/* ✅ SINGLE AUDIO INSTANCE */}
      <audio
        ref={audioRef}
        src={currentTrack || ""}
        onEnded={() => setIsPlaying(false)}
      />
    </AudioPlayerContext.Provider>
  );
};