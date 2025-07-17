import React from 'react';
import Heading from '../common/heading';

export default function Testimonials() {
  const testimonials = [
    {
      stars: '★★★★★',
      title: 'Everything about this service is fantastic!',
      description: 'Buzzsprout has made it easy to host 300+ daily episodes.',
      author: '— Ben'
    },
    {
      stars: '★★★★★',
      title: 'Everything about this service is fantastic!',
      description: 'Buzzsprout has made it easy to host 300+ daily episodes.',
      author: '— Ben'
    },
    {
      stars: '★★★★★',
      title: 'Everything about this service is fantastic!',
      description: 'Buzzsprout has made it easy to host 300+ daily episodes.',
      author: '— Ben'
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="container  w-[100%]  max-w-[1440px] m-auto ">
       <Heading  title={ "Real podcast success stories" }/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl p-6 shadow-md">
              <div className="text-white-400 text-[20px] mb-2">{testimonial.stars}</div>
              <h4 className="text-[24px] sm:text-[28px] font-medium mb-3">
                {testimonial.title}
              </h4>
              <p className="text-[16px] sm:text-[18px] text-gray-400">
                {testimonial.description}
              </p>
              <p className="mt-4 text-[16px] sm:text-[18px] font-semibold text-gray-300">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
