import Image from 'next/image'
import recording from '../assert/home/record.png'
import CustomButton from '../common/CustomButton'

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Us</h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="md:w-2/3">
            <p className="text-lg sm:text-xl text-[#999999]">
              You have the inspiration to start podcasting. Property Portfolio has the tools, support, and community to ensure you keep podcasting.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-start md:justify-end">
            <CustomButton text="Get Started Free" />
          </div>
        </div>

        <div className=" rounded-lg ">

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src={recording}
              alt="Person recording a podcast"
              fill
              className="object-cover"
            />

          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
