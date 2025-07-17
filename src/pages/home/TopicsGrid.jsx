// components/TopicsGrid.jsx
import React from 'react';

const topicsData = [
  {
    id: 1,
    title: 'Top 100 Overall',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png', // Example placeholder with color
    gradient: 'from-yellow-600 to-amber-800',
  },
  {
    id: 2,
    title: 'Top 100 True Crime',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-red-600 to-red-800',
  },
  {
    id: 3,
    title: 'Pride',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-pink-500 to-purple-700',
  },
  {
    id: 4,
    title: 'Top 100 Overall', // Duplicate for layout example
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-yellow-600 to-amber-800',
  },
  {
    id: 5,
    title: 'Comedy',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-purple-500 to-fuchsia-700',
  },
  {
    id: 6,
    title: 'Society & Culture',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-green-600 to-emerald-800',
  },
  {
    id: 7,
    title: 'Sports',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-orange-500 to-amber-700',
  },
  {
    id: 8,
    title: 'Comedy', // Duplicate for layout example
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-purple-500 to-fuchsia-700',
  },
  {
    id: 9,
    title: 'Crime',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-purple-700 to-indigo-900',
  },
  {
    id: 10,
    title: 'Radio On-Demand',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-blue-500 to-cyan-700',
  },
  {
    id: 11,
    title: 'Society & Culture', // Duplicate
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-green-600 to-emerald-800',
  },
  {
    id: 12,
    title: 'Radio On-Demand', // Duplicate
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-blue-500 to-cyan-700',
  },
  {
    id: 13,
    title: 'Health',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 14,
    title: 'Latinx',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    id: 15,
    title: 'Business & Finance',
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    id: 16,
    title: 'Health', // Duplicate
    imageSrc: 'https://www.nasa.gov/wp-content/uploads/2024/07/hwhap-logo-2024-4k.png',
    gradient: 'from-blue-400 to-blue-600',
  },
];

const TopicsGrid = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container  w-[100%] max-w-[1440px] m-auto ">
        <h2 className="text-xl font-bold mb-2">Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topicsData.map((topic) => (
            <div
              key={topic.id} // Essential for list rendering in React
              className={`relative rounded-lg overflow-hidden h-40 bg-gradient-to-br ${topic.gradient}`}
            >
              <img
                src={topic.imageSrc}
                alt={topic.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative p-4 flex items-start h-full">
                <span className="text-white text-lg font-semibold">{topic.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsGrid;