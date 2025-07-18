// components/TopicsGrid.jsx
import HeadingTopic from '@/common/HeadingTopic';
import React from 'react';

const topicsData = [
  {
    id: 1,
    title: 'Top 100 Overall',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU', // Example placeholder with color
    gradient: 'from-yellow-600 to-amber-800',
  },
  {
    id: 2,
    title: 'Top 100 True Crime',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-red-600 to-red-800',
  },
  {
    id: 3,
    title: 'Pride',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-pink-500 to-purple-700',
  },
  {
    id: 4,
    title: 'Top 100 Overall', // Duplicate for layout example
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-yellow-600 to-amber-800',
  },
  {
    id: 5,
    title: 'Comedy',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-purple-500 to-fuchsia-700',
  },
  {
    id: 6,
    title: 'Society & Culture',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-green-600 to-emerald-800',
  },
  {
    id: 7,
    title: 'Sports',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-orange-500 to-amber-700',
  },
  {
    id: 8,
    title: 'Comedy', // Duplicate for layout example
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-purple-500 to-fuchsia-700',
  },
  {
    id: 9,
    title: 'Crime',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-purple-700 to-indigo-900',
  },
  {
    id: 10,
    title: 'Radio On-Demand',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-blue-500 to-cyan-700',
  },
  {
    id: 11,
    title: 'Society & Culture', // Duplicate
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-green-600 to-emerald-800',
  },
  {
    id: 12,
    title: 'Radio On-Demand', // Duplicate
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-blue-500 to-cyan-700',
  },
  {
    id: 13,
    title: 'Health',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 14,
    title: 'Latinx',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    id: 15,
    title: 'Business & Finance',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    id: 16,
    title: 'Health', // Duplicate
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52V6ArOAyC0IBIo3XeBhY9A8IcV1cmJJSi5gi2-GIjqTPVJkkIOC3toEGstdDq2wrCsw&usqp=CAU',
    gradient: 'from-blue-400 to-blue-600',
  },
];

const TopicsGrid = () => {
  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1440px]  ">
        <HeadingTopic title="topics" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
          {topicsData.map((topic) => (
            <div
              key={topic.id}
              className={`relative rounded-lg overflow-hidden h-40 `}  >
              <img
                src={topic.imageSrc}
                alt={topic.title}
                className="absolute inset-0 w-full h-[229px] object-cover rounded-lg opacity-80 "
              />
              <div className="relative p-2 flex items-start h-full">
                <span className="text-white text-lg font-bold heading">{topic.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsGrid;