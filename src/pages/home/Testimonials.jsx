import React from 'react'

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 heading">
        Real podcast success stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className=" rounded-2xl p-6 shadow-md">
          <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
          <p className="text-base font-medium mb-3 paraheading">
            Everything about this service is fantastic!
          </p>
          <p className="text-sm text-gray-400 paraheading">
            Buzzsprout has made it easy to host 300+ daily episodes.
          </p>
          <p className="mt-4 text-sm font-semibold text-gray-300 paraheading">— Ben</p>
        </div>


      </div>
    </section>
  )
}
