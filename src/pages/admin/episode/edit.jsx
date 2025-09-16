import React, { useEffect, useState } from "react";
import AuthLayout from "@/layout/AuthLayout";
import toast from "react-hot-toast";
import Listing from "@/pages/api/Listing";
import { useRouter } from "next/router";
import ReactQuillEditor from "./ReactQuillEditor";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query; 
//   console.log("id", id);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: null,
    video: null,
    details: null,
  });
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const handleQuillChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "thumbnail" && files?.[0]) {
      const file = files[0];
      if (!file.type.startsWith("image/")) {
        toast.error("Only image files allowed");
        return;
      }
      setFormData((prev) => ({ ...prev, thumbnail: file }));
      setThumbnailPreview(URL.createObjectURL(file));
    } else if (name === "video" && files?.[0]) {
      const file = files[0];
      if (!file.type.startsWith("video/") && !file.type.startsWith("audio/")) {
      toast.error("Only video or audio files allowed");
      return;
      }
      setFormData((prev) => ({ ...prev, video: file }));
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
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("description", formData.description);
      payload.append("podcastId", id);
      payload.append("detail", formData?.details);
      if (formData.thumbnail instanceof File) { 
        payload.append("thumbnail", formData.thumbnail);
      }
      if (formData.video instanceof File) {
        payload.append("video", formData.video);
      }
      if (formData.video instanceof File) {
        let size = Number((formData.video.size / (1024 * 1024)).toFixed(2)) || 0;
        payload.append("size", size);
      }
      const response = await main.EpisodeUpdate(id, payload);

      if (response?.data?.status) {
        toast.success(response.data.message);
        setFormData({
          title: "",
          description: "",
          thumbnail: null,
          video: null,
        });
        setThumbnailPreview(null);
        router.push(`/admin/podcast/${data?.podcast?.uuid}`);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const fetchDetails = async (id) => {
    try {
      const main = new Listing();
      const response = await main.AdminEpisodeByUUID(id);
      setData(response?.data?.data || []);
    //   console.log("response?.data?.data?.detail",response?.data?.data?.detail);
      // Updating the fields as required
      setFormData({
      title: response?.data?.data?.title || "",
      description: response?.data?.data?.description || "",
      thumbnail: response?.data?.data?.thumbnail || null,
      video: response?.data?.data?.link || null,
      details: response?.data?.data?.detail || null,
    });

    if (response?.data?.data?.thumbnail) {
      setThumbnailPreview(response?.data?.data.thumbnail);
      return;
    }
    setThumbnailPreview(null);

    } catch (error) {
      console.log("error", error);
      setData({});
    }
  };

  useEffect(() => {
    if (id) {
      fetchDetails(id);
    }
  }, [id]);

  console.log("data", data);

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="w-full text-white space-y-6 mx-auto">
        <h3 className="text-3xl font-bold text-center heading">
          Edit Episode
        </h3>

        {/* Title */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            rows="4"
            className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Thumbnail */}
        <div className="space-y-1">
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

        {/* Video */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            File <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="video"
             accept="video/*,audio/*"
            onChange={handleChange}
            className="w-full text-sm text-gray-400 file:bg-white file:text-black file:rounded-lg file:px-4 file:py-2 border border-gray-700 bg-[#1c1c1c]"
          />
          {typeof formData.video === "string" && (
            <video controls className="mt-2 w-full rounded-lg">
              <source src={data?.link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Video */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Details
          </label>
          <ReactQuillEditor
            label="details"
            desc={formData?.details}
            handleBioChange={(val) => handleQuillChange('details', val)}
          />
        </div>

        {/* Submit */}
        <div className="pt-2 mt-16">
          <button
            type="submit"
            disabled={loading}
            className="w-full button-bg font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}