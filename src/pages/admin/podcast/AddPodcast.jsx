import React, { useEffect, useState } from "react";
import Popup from "@/common/Popup";
import toast from "react-hot-toast";
import Listing from "@/pages/api/Listing";

export default function AddPodcast({ isOpen, onClose, fetchPodcasts, selectedPodcast }) {
  // console.log("selectedPodcast", selectedPodcast);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    Author: "",
    Cast: "",
    thumbnail: null,
    description: "",
  });
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  useEffect(() => {
      setFormData({
        name: selectedPodcast?.name || "",
        Author: selectedPodcast?.Author || "",
        Cast: Array.isArray(selectedPodcast?.Cast)
              ? selectedPodcast.Cast.join(", ")
              : selectedPodcast?.Cast || "",
        thumbnail: selectedPodcast?.thumbnail || null,
        description: selectedPodcast?.description || "",
      });
  
      if (selectedPodcast?.thumbnail) {
        setThumbnailPreview(selectedPodcast.thumbnail);
        return;
      }
      setThumbnailPreview(null);
    }, [selectedPodcast]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail" && files?.[0]) {
      const file = files[0];
      if (!file.type.startsWith("image/")) {
        // setErrors((prev) => ({
        //   ...prev,
        //   thumbnail: "Only image files allowed",
        // }));
        toast.error("Only image files allowed");
        return;
      }
      setFormData((prev) => ({ ...prev, thumbnail: file }));
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, thumbnail: file }));
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      toast.error("Only image files are allowed");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const main = new Listing();
      const castArray = formData.Cast
        ? formData.Cast.split(",").map((c) => c.trim())
        : [];
      const payload = new FormData();
      payload.append("name", formData.name);
      if (formData.Author) payload.append("Author", formData.Author);
      if (formData.Cast) payload.append("Cast", JSON.stringify(castArray));
      payload.append("thumbnail", formData.thumbnail);
      payload.append("description", formData.description);
      const response = await main.PodcastAdd(payload);
      if (response?.data?.status) {
        toast.success(response.data.message);
        setFormData({
          name: "",
          Author: "",
          Cast: "",
          thumbnail: null,
          description: "",
        });
        fetchPodcasts();
        onClose();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
      setLoading(false);
    }
    setLoading(false);
  };
  // console.log("formdata",formData);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const main = new Listing();
      console.log("formData.Cast", formData.Cast);
      const castArray = JSON.stringify(formData.Cast.split(",").map((s) => s.trim()));
      const payload = new FormData();
      payload.append("name", formData.name);
      if (formData.Author) payload.append("Author", formData.Author);
      if (formData.Cast) payload.append("Cast", castArray);
      payload.append("description", formData.description);
      if (formData.thumbnail instanceof File) {
        payload.append("thumbnail", formData.thumbnail);
      }
      const response = await main.PodcastUpdate(selectedPodcast?.uuid, payload);
      if (response?.data?.status) {
        toast.success(response.data.message);
        setFormData({
          name: "",
          Author: "",
          Cast: "",
          thumbnail: null,
          description: "",
        });
        fetchPodcasts();
        onClose();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} size="max-w-lg">
      <form onSubmit={selectedPodcast ? handleUpdate : handleSubmit} className=" w-full text-white">
        <h3 className="text-3xl font-bold text-center heading">
         {selectedPodcast ? "Edit Podcast" : "Add Podcast"} 
        </h3>
        <div className="space-y-6">
          {/* Name */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Author */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">Author</label>
            <input
              type="text"
              name="Author"
              className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.Author}
              onChange={handleChange}
            />
          </div>

          {/* Cast */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              Cast{" "}
              <span className="text-xs text-gray-400">(Comma-separated)</span>
            </label>
            <input
              type="text"
              name="Cast"
              className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.Cast}
              onChange={handleChange}
            />
          </div>

          {/* Thumbnail Uploader */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Thumbnail <span className="text-red-500">*</span>
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="relative w-full h-64 bg-[#1c1c1c] border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center text-gray-400 cursor-pointer hover:border-white transition"
            >
              {thumbnailPreview ? (
                <img
                  src={thumbnailPreview}
                  alt="Preview"
                  className="h-full object-contain rounded"
                />
              ) : (
                <p className="text-center text-sm">
                  Drag & drop or click to upload
                </p>
              )}
              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              rows="4"
              name="description"
              className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full button-bg font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </Popup>
  );
}
