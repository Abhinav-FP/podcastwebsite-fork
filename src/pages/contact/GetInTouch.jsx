import Heading from "@/common/Heading";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { SiSpotify } from "react-icons/si";
import Listing from "../api/Listing";
import toast from "react-hot-toast";

export default function GetInTouch() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    if (loading) return;
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.AddContact(formData);
      if (response?.data?.status) {
      toast.success("Thank you for contacting us!");
      setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    } else {
        toast.error(response.data.message);
    }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative md:py-10 mt-24 px-4 py-6 md:px-12">
      <div className="relative z-[1]">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-3">
            GET IN<span className="text-theme"> TOUCH </span>With Us
          </h2>
          <p className="mt-3 text-gray-300 max-w-lg items-center mx-auto">
            Share your questions, thoughts, or suggestions, and we’ll get back
            to you with something worth your time.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white mt-12 px-4">
          {/* Left Side */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="min-w-12 w-12 min-h-12 h-12 flex items-center justify-center rounded-full border border-white/40">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Phone</h4>
                  <p className="text-gray-300 text-base">6232 1151 2211</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="min-w-12 w-12 min-h-12 h-12 flex items-center justify-center rounded-full border border-white/40">
                  <FaLocationDot size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Our Location</h4>
                  <p className="text-gray-300 text-base">Australia</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="min-w-12 w-12 min-h-12 h-12 flex items-center justify-center rounded-full border border-white/40">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Email</h4>
                  <p className="text-gray-300 text-base">hello@property.com</p>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h4 className="font-bold text-xl mb-2">Social Network</h4>
                <p className="text-gray-300 mb-3">Follow us on</p>
                <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 sm:gap-4">
                  <a
                    href="#"
                    className="min-w-10 w-10 min-h-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
                  >
                    <SiSpotify size={18} />
                  </a>
                  <a
                    href="#"
                    className="min-w-10 w-10 min-h-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
                  >
                    <FaXTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="min-w-10 w-10 min-h-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="min-w-10 w-10 min-h-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="min-w-10 w-10 min-h-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
                  >
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-black/60 rounded-2xl shadow-lg p-6 md:p-10">
            <h3 className="text-2xl font-semibold mb-8">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-lg font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#4B4B4B] text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="yourwinzy@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#4B4B4B] text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Your subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#4B4B4B] text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#4B4B4B] text-white placeholder-gray-400 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4B4B4B] hover:bg-gradient-to-r hover:from-[#9747FF] hover:to-[#FC18D8] transition-all text-white py-3 rounded-full font-semibold cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/contact-bg.png')] bg-no-repeat bg-center bg-cover " />
    </section>
  );
}
