import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      review:
        "This podcast gave me the confidence to buy my first investment property. The advice is clear, honest, and incredibly practical.",
      name: "Jenny Wilson",
      role: "First-Time Investor",
    },
    {
      id: 2,
      review:
        "This podcast gave me the confidence to buy my first investment property. The advice is clear, honest, and incredibly practical.",
      name: "Jenny Wilson",
      role: "First-Time Investor",
    },
    {
      id: 3,
      review:
        "This podcast gave me the confidence to buy my first investment property. The advice is clear, honest, and incredibly practical.",
      name: "Jenny Wilson",
      role: "First-Time Investor",
    },
    {
      id: 4,
      review:
        "This podcast gave me the confidence to buy my first investment property. The advice is clear, honest, and incredibly practical.",
      name: "Jenny Wilson",
      role: "First-Time Investor",
    },
  ];
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden z-0 ">
      {/* Left Blur Semi-circle */}
      <div className="absolute w-[40vw] max-w-[350px] aspect-square -left-[12%] top-1/2 -translate-y-1/2 blurcircle rounded-r-full"/>
      {/* Right Blur Semi-circle */}
      <div className="absolute w-[40vw] max-w-[350px] aspect-square -right-[12%] top-1/2 -translate-y-1/2 blurcircle rounded-l-full"/>
      <div className="mx-auto container xl:max-w-[1440px] py-8 sm:py-16 px-8 z-10 relative">
        {/* Heading */}
        {/* Background Circles */}

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            WHAT <span className="text-theme">OUR LISTENERS</span> SAY?
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]} // 👈 add Autoplay here
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true} // 👈 makes it loop infinitely
            autoplay={{
              delay: 3000, // 👈 auto slide every 3s
              disableOnInteraction: false, // 👈 keeps autoplay after user interaction
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials &&
              testimonials?.map((t) => (
                <SwiperSlide key={t?.id}>
                  <div className="bg-[#4B4B4B] rounded-xl p-6 text-white shadow-lg h-full">
                    {/* Stars */}
                    <div className="flex gap-1 text-[#EB9F25] mb-4">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                      “{t?.review}”
                    </p>

                    {/* Author */}
                    <div>
                      <span className="font-semibold">{t?.name}</span>{" "}
                      <span className="text-gray-400 text-sm">{t?.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Custom Arrows */}
          <button className="swiper-button-prev-custom absolute left-[-35px] top-1/2 -translate-y-1/2 z-10 min-w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#ffffff78] text-[#1E1E1E] hover:text-white hover:bg-gradient-to-r hover:from-[#9747FF] hover:to-[#FC18D8] transition cursor-pointer">
            <FaArrowLeft size={20} />
          </button>
          <button className="swiper-button-next-custom absolute right-[-35px] top-1/2 -translate-y-1/2 z-10 min-w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#ffffff78] text-[#1E1E1E] hover:text-white hover:bg-gradient-to-r hover:from-[#9747FF] hover:to-[#FC18D8] transition cursor-pointer">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}