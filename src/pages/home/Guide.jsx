import Image from "next/image";

const guides = [
  {
    id: 1,
    title: "The Complete Guide to Property Depreciation",
    desc: "Each episode features expert insights, proven strategies, and real-world stories that break down complex topics into easy, actionable steps. From mastering productivity tools to understanding algorithms and digital marketing, E-Guide gives you the clarity and confidence to thrive online.",
    pages: "32 pages",
    downloads: "2.5k Download",
    image: "/guide.jpg", // replace with actual image path
  },
  {
    id: 2,
    title: "The Complete Guide to Property Depreciation",
    desc: "Each episode features expert insights, proven strategies, and real-world stories that break down complex topics into easy, actionable steps. From mastering productivity tools to understanding algorithms and digital marketing, E-Guide gives you the clarity and confidence to thrive online.",
    pages: "32 pages",
    downloads: "2.5k Download",
    image: "/guide.jpg",
  },
  {
    id: 3,
    title: "The Complete Guide to Property Depreciation",
    desc: "Each episode features expert insights, proven strategies, and real-world stories that break down complex topics into easy, actionable steps. From mastering productivity tools to understanding algorithms and digital marketing, E-Guide gives you the clarity and confidence to thrive online.",
    pages: "32 pages",
    downloads: "2.5k Download",
    image: "/guide.jpg",
  },
  {
    id: 4,
    title: "The Complete Guide to Property Depreciation",
    desc: "Each episode features expert insights, proven strategies, and real-world stories that break down complex topics into easy, actionable steps. From mastering productivity tools to understanding algorithms and digital marketing, E-Guide gives you the clarity and confidence to thrive online.",
    pages: "32 pages",
    downloads: "2.5k Download",
    image: "/guide.jpg",
  },
];

export default function Guide() {
  return (
    <div className="bg-[#1C1C1C]">
    <section className="mx-auto container xl:max-w-[1440px] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          FREE{" "}
          <span className="bg-gradient-to-r from-[#9747FF] to-[#FC18D8] bg-clip-text text-transparent">
            E-GUIDES
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {guides && guides?.map((guide) => (
          <div
            key={guide?.id}
            className="relative rounded-2xl p-[2px] bg-transparent transition"
          >
            <div className="bg-[#2C2C2C] rounded-2xl p-6 flex flex-col sm:flex-row gap-6 h-full">
              {/* Left Image */}
              <div className="relative w-full sm:w-1/3 h-40 sm:h-auto rounded-xl overflow-hidden">
                <Image
                  src={"/guide.png"}
                  alt={guide?.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 flex flex-col justify-between text-center sm:text-left">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 transition">
                    {guide?.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {guide?.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span>{guide?.pages}</span>
                  <span>{guide?.downloads}</span>
                </div>

                <button className="w-full cursor-pointer bg-gray-700 text-white py-2 rounded-lg font-medium hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)] transition">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 rounded-full font-medium text-white bg-theme hover:opacity-90 transition">
          View All
        </button>
      </div>
    </section>
    </div>
  );
}
