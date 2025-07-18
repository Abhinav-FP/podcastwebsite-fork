import Image from "next/image";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";

export default function EpisodeCard({ episode }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-4 border-b border-gray-700">
      {/* Thumbnail */}
      <div className="w-full sm:w-32 h-28 relative rounded-lg overflow-hidden">
        <Image
          src={
            episode?.thumbnail ||
            "https://logistics-manage.s3.eu-north-1.amazonaws.com/files/31616de2-c5e9-4401-84db-9b0f4f08d119-forbes.jpg"
          }
          alt={episode?.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        {/* Date and Title */}
        <div className="text-sm text-gray-400 font-medium whitespace-nowrap">
          {episode?.createdAt
            ? moment(episode.createdAt).fromNow().toUpperCase()
            : ""}
        </div>

        {/* Title */}
        <h2 className="text-white font-semibold mt-1 text-base sm:text-lg leading-snug">
          {episode?.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">
          {episode?.description}
        </p>
      </div>
      {/* Duration */}
      <div className="text-sm text-gray-400 mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
        {episode?.duration} min
      </div>
      <div className="">
        <BsThreeDots className="text-gray-400 text-xl cursor-pointer" />
      </div>
    </div>
  );
}
