import Layout from "@/layout/Layout";
import Image from "next/image";
import PodcastDetails from "@/common/PodcastDetails";

export default function index() {
  const episodes = [
    {
      title: "Mahabharata Episode 1: Beginnings",
      description:
        "Ganga, Devabrata and Shantanu... This episode tells the story of the beginnings of the great saga told by Rishi Vyasa and written by Lord Ganesha. , Ganga, Devabrata and Shantanu... This episode tells the story of the beginnings of the great saga told by Rishi Vyasa and written by Lord Ganesha.,Ganga, Devabrata and Shantanu... This episode tells the story of the beginnings of the great saga told by Rishi Vyasa and written by Lord Ganesha.",
      duration: "23 min",
    },
    {
      title: "Mahabharata Episode 2: Amba’s Plight",
      description:
        "Bhishma abducts Amba, Ambika and Ambalika... Audio engineering and sound design by Avi Ziv.",
      duration: "26 min",
    },
    {
      title: "Mahabharata Episode 3: Birth of the Kuru Princes",
      description:
        "Pandu Hunts the Deer Couple... We also learn about the tragic death of King Pandu.",
      duration: "20 min",
    },
    {
      title: "Mahabharata Episode 4: The Conflict Begins",
      description:
        "Young Bheema fights with the Nagas... Enjoy and do not forget to give your feedback.",
      duration: "15 min",
    },
  ];

  return (
    <Layout>
      <div className=" pt-[118px] lg:pt-[128px] ">
        <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  px-4">
    <PodcastDetails/>

          {/* Episodes List */}
          <h2 className="mt-10 text-xl font-semibold text-white">Episodes </h2>
          <div className="mt-4 divide-y divide-[#FFFFFF1A]">
            {episodes.map((ep, index) => (
              <div key={index} className="py-6">
                <h4 className="font-bold text-[15px] leading-snug text-white uppercase mb-1">
                  Episode {index + 1}
                </h4>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex-1">
                    <h2 className="font-bold text-[17px] leading-snug text-white mb-1">{ep.title}</h2>
                    <p className="text-sm text-[#AAAAAA] leading-snug line-clamp-3">
                      {ep.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex flex-row items-center gap-4 mt-[30px]">
                    <span className="text-[#727272] text-[16px]">{ep.duration}</span>
                    <span className="text-[#727272] text-[16px]">
                      ...
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
