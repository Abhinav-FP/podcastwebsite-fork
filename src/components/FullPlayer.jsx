import { useAudioPlayer } from "@/context/AudioPlayerContext";
import Image from "next/image";
import AudioPlyr from "./AudioPlyr";
import { BsFullscreenExit } from "react-icons/bs";

export default function FullPlayer() {
  const { selectedEpisode, setIsMinimized } = useAudioPlayer();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#1e2f3f] to-[#304d60] text-white">
      <div className="flex justify-between items-center px-5">
        <div/>
      <div className="p-6 text-left font-semibold text-lg">
        {selectedEpisode?.title}
      </div>
      <button
            className="text-white text-xl cursor-pointer"
            onClick={() => setIsMinimized(true)}
          >
            <BsFullscreenExit size={20}/>
          </button>
      </div>

      <div className="flex-grow flex items-center justify-center">
        {selectedEpisode?.thumbnail && (
          <div className="w-80 h-80 relative shadow-lg rounded-lg overflow-hidden">
            <Image
              src={selectedEpisode.thumbnail}
              alt="Podcast Cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>

      <div className="bg-black bg-opacity-50 backdrop-blur-md px-6 py-4">
        <AudioPlyr />
      </div>
    </div>
  );
}