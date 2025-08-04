import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import Listing from "@/pages/api/Listing";

export default function EpisodeCard({ episode, setIsEpisodePopupOpen, setSelectedEpisode, fetchDetails, isAdmin=false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDelete = async (id) => {
    if (deleteLoading) return;
    setDeleteLoading(true);
    try {
      const main = new Listing();
      const response = await main.EpisodeDelete(id);
      if (response?.data?.status) {
        toast.success(response.data.message);
        fetchDetails();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      <div
        className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-4 border-b border-gray-700 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Thumbnail */}
        <div className="w-full sm:w-32 h-28 relative rounded-lg overflow-hidden">
          <Image
            src={episode?.thumbnail || ""}
            alt={episode?.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* Hover Play Icon */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <FaPlay className="text-white text-lg sm:text-2xl" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full">
          <div className="text-sm text-gray-400 font-medium whitespace-nowrap">
            {episode?.createdAt
              ? moment(episode.createdAt).fromNow().toUpperCase()
              : ""}
          </div>
          <h2 className="text-white font-semibold mt-1 text-base sm:text-lg leading-snug group-hover:underline capitalize">
            {episode?.title}
          </h2>
          <p className="text-sm text-gray-300 mt-1">{episode?.description}</p>
        </div>

        {/* Duration */}
        <div className="text-sm text-gray-400 mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
          {episode?.duration} mins
        </div>

        {/* Dropdown Menu Trigger */}
        {isAdmin &&
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <BsThreeDots
            className="text-gray-400 text-xl cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          />
          {showMenu && (
            <div
              ref={menuRef}
              className="absolute right-0 w-32 bg-[#1c1c1c] border border-gray-700 rounded-md shadow-lg z-10"
            >
              <button
                onClick={() => {
                  setSelectedEpisode(episode);
                  setShowMenu(false);
                  setIsEpisodePopupOpen(true);
                }}
                className="flex gap-2 items-center w-full px-4 py-2 text-sm text-white hover:bg-white/10 text-left border-b border-gray-700 cursor-pointer"
              >
                Edit <MdEdit size={16} />
              </button>
              <button
                onClick={() => {
                  setShowMenu(false);
                  handleDelete(episode?.uuid);
                }}
                className="flex gap-2 items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-white/10 text-left cursor-pointer"
              >
                Delete <RiDeleteBin5Line size={16} />
              </button>
            </div>
          )}
        </div>}
      </div>

      {/* Video Player Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-black p-4 rounded-lg relative w-[90vw] max-w-3xl">
            <button
              className="absolute top-0.5 right-2 text-white text-4xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <video
              controls
              autoPlay
              className="w-full h-auto rounded"
              src={episode?.link}
            />
          </div>
        </div>
      )}
    </>
  );
}
