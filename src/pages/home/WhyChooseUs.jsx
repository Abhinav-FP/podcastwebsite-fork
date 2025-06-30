import Image from 'next/image';
import Podccast from "../assert/home/podcast.webp"
import CustomButton from '../common/CustomButton';

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="md:w-2/3">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              You have the inspiration to start podcasting. Property Portfolio has the tools, support, and community to ensure you keep podcasting.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-start md:justify-end">
            <CustomButton text={"Get Started Free"} />
          </div>
        </div>

<div className='bg-[#141414] rounded-lg'>

        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg ">
          <Image
            src={Podccast}
            alt="Person recording a podcast"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="rounded-xl"
          />
        </div>
</div>
      </div>
    </div>
  );
};

export default WhyChooseUs;