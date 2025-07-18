'use client';
import React from 'react';

export default function HeadingTopic({ title }) {
  return (
    <h2 className="text-[24px] font-[700] font-inter leading-[100%]  text-white mb-2 capitalize ">
      {title}
    </h2>
  );
}
