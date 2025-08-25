import Layout from "@/layout/Layout";
import React, { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "@/common/Heading";
import Link from "next/link";
import FAQSection from "./FAQSection";
import toast from "react-hot-toast";
import Listing from "../api/Listing";
import GetInTouch from "./GetInTouch";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!formData.email || !formData.email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    if (!formData.name || !formData.message) {
      toast.error("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.AddContact(formData);
      console.log("Success:", response);
      toast.success("Thank you for contacting us!");
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to contact. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const faqs = [
    {
      question: "Can I be a guest on the podcast?",
      answer:
        'We\'re always looking for interesting guests with valuable property insights. Use the contact form above with "Guest Opportunity" as the subject and tell us about your experience.',
    },
    {
      question: "Do you offer personal consultations?",
      answer:
        "While we don't provide individual financial advice, we can put you in touch with trusted professionals in our network. Reach out and we'll help connect you with the right resources.",
    },
    {
      question: "How can I suggest episode topics?",
      answer:
        "We love hearing from our community! Send us your topic suggestions through the contact form. Many of our best episodes come from listener requests.",
    },
    {
      question: "Are your guides really free?",
      answer:
        "Yes! All our guides are completely free with no hidden costs. We believe quality property education should be accessible to everyone.",
    },
  ];

  return (
    <Layout>
      <div className="mx-auto container xl:max-w-[1440px] p-4 sm:p-6 lg:p-16 bg-[#1C1C1C]">
        <GetInTouch />
        {/* <section className=" rounded-[10px] p-[20px] md:p-[40px] mt-4"> */}
          <FAQSection />
        {/* </section> */}
      </div>
    </Layout>
  );
};

export default Index;

{/* <section className="bg-[#141414] border border-[#FFFFFF33] rounded-[10px] p-[20px] md:p-[40px]">

                <Heading
                    title="Get in Touch"
                    content="Have a question, guest suggestion, or just want to say hello? We'd love to hear from you. We typically respond within 18 hours."
                />

                <div className="flex gap-8 flex-wrap sm:flex-nowrap">
                    <div className="w-full md:w-2/3 bg-[#1F1F1F] p-4 md:p-6 rounded-lg">
                        <h2 className="text-white text-[20px] sm:text-[35px] md:text-[45px] font-bold  mb-2 md:mb-4 leading-tight">
                            Send A Message
                        </h2>
                        <p className="text-[#FFFFFF66] mb-1 md:mb-2 font-outfit">
                            Questions? Comments? We're just a message away.
                        </p>

                        <form onSubmit={handleSubmit} className='px-2 py-2'>
                            <div className="mb-2 md:mb-4">
                                <label htmlFor="name" className="block text-white font-outfit text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Jason Dawson*"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full py-3 px-4 bg-[#1F1F1F] font-outfit text-white border-b-1 border-[#FFFFFF33] rounded placeholder-[#FFFFFF66] focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-2 md:mb-4">
                                <label htmlFor="email" className="block text-white font-outfit text-sm font-bold mb-2">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="hello@property"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full py-3 px-4 bg-[#1F1F1F] font-outfit text-white border-b-1 border-[#FFFFFF33] rounded placeholder-[#FFFFFF66] focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="message" className="block text-white font-outfit text-sm font-bold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="I'd love to learn more about your services here*"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full py-3 px-4 bg-[#1F1F1F] font-outfit text-white border-b-1 border-[#FFFFFF33] rounded placeholder-[#FFFFFF66] focus:outline-none"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-white text-gray-900 font-outfit font-bold py-3 px-4 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer"
                                >
                                    {loading ? "Processing" : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="w-full md:w-1/3 space-y-8">
                        <div className="bg-[#1F1F1F] p-3 md:p-6 rounded-lg border border-[#FFFFFF33]">
                            <h3 className="text-[#FFFFFF66]  text-[15px] md:text-[18px] mb-2 md:mb-4">Location</h3>
                            <p className="text-white  font-medium text-[15px] md:text-[18px]">Sydney & Melbourne, Australia</p>
                        </div>

                        <div className="bg-[#1F1F1F] p-3 md:p-6 rounded-lg border border-[#FFFFFF33]">
                            <h3 className="text-[#FFFFFF66] font-outfit text-[15px] md:text-[18px] mb-2 md:mb-4">Work Hours</h3>
                            <p className="text-white  font-medium text-[15px] md:text-[18px]">Monday-Friday: 9AM - 7PM</p>
                            <p className="text-white font-medium text-[15px] md:text-[18px]">Sunday: 10AM - 7PM</p>
                        </div>

                        <div className="bg-[#1F1F1F] p-3 md:p-6 rounded-lg border border-[#FFFFFF33]">
                            <h3 className="text-[#FFFFFF66] font-outfit text-[15px] md:text-[18px] mb-2 md:mb-4">Support</h3>
                            <p className="text-white  font-medium text-[15px] md:text-[18px]">hello@property.com</p>
                            <p className="text-white  font-medium text-[15px] md:text-[18px]">6232 1151 2211</p>
                        </div>

                        <div className="flex justify-between items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-3">
                                <p className="text-[#FFFFFF66] text-[18px] font-[400] m-0 font-outfit">Follow Us</p>
                                <span className="flex items-center">
                                    <IoIosArrowForward className='text-white ' />
                                    <IoIosArrowForward className='text-white' />
                                </span>
                            </div>
                            <div className="flex gap-4 ">
                                <Link href="#" className="bg-white  p-1 rounded-full transition duration-300"><FaSpotify size={18} /></Link>
                                <Link href="#" className="bg-white  p-1 rounded-full transition duration-300"><FaTwitter size={18} /></Link>
                                <Link href="#" className="bg-white  p-1 rounded-full transition duration-300"><FaFacebookF size={18} /></Link>
                                <Link href="#" className="bg-white  p-1 rounded-full transition duration-300"><FaInstagram size={18} /></Link>
                                <Link href="#" className="bg-white  p-1 rounded-full transition duration-300"><FaYoutube size={18} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
{/* </div> */}
{/* <div className="mx-auto container xl:max-w-[1440px] px-4 mt-4"> */}