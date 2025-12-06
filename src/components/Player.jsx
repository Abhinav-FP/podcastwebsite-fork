import { useAudioPlayer } from "@/context/AudioPlayerContext";
import MiniPlayer from "./MiniPlayer";
import FullPlayer from "./FullPlayer";
import VideoPlayer from "./VideoPlayer";
import AudioPlyr from "./AudioPlyr";

function isVideo(url) {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/.test(url);
}

export default function Player() {
  const { isMinimized, selectedEpisode } = useAudioPlayer();

  if (!selectedEpisode) return null;

  const isVideoFile = isVideo(selectedEpisode.link);

  if (isVideoFile) return <VideoPlayer />;

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-[99]">
        {isMinimized ? <></> : <FullPlayer />}
      <AudioPlyr/> 
      </div>
      {/* <div className={`${isMinimized ? "hidden" : "block z-[51] relative bottom-[0px]"}`}> */}
      {/* </div> */}
    </>
  );
}