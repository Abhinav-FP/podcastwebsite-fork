import React from 'react';
import Heading from '../../common/HeadingTopic';

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
    <section className=" py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 heading">Real podcast success stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl p-6 shadow-md">
              <div className="text-white text-[20px] mb-2">{testimonial.stars}</div>
              <h4 className="text-[24px] sm:text-[28px] font-medium mb-3 heading">
                {testimonial.title}
              </h4>
              <p className="text-[16px] sm:text-[18px] paragraph">
                {testimonial.description}
              </p>
              <h6 className="mt-4 text-[16px] sm:text-[18px] font-semibold heading">
                {testimonial.author}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
