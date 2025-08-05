import { createContext, useContext, useRef, useState } from "react";

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isMinimized, setIsMinimized] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  console.log("selectedEpisode", selectedEpisode);

  const playTrack = (episode) => {
    if (selectedEpisode !== episode) {
      setSelectedEpisode(episode);
      setCurrentTrack(episode?.link);
      setTimeout(() => audioRef.current.play(), 0);
    } else {
      audioRef.current.play();
    }
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlaying,
        currentTrack,
        setCurrentTrack,
        playTrack,
        pauseTrack,
        audioRef,
        isMinimized,
        setIsMinimized,
        selectedEpisode,
        setSelectedEpisode
      }}
    >
      {children}
      <audio ref={audioRef} src={currentTrack} onEnded={() => setIsPlaying(false)} />
    </AudioPlayerContext.Provider>
  );
};