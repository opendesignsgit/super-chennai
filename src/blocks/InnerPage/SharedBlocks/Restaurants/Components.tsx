"use client";
import React from "react";

interface Location {
  label: string;
  link: string;
}

interface Point {
  name: string;
  description?: string;
  subDescription?: string;
  locations?: Location[];
}

interface SectionProps {
  title: string;
  points: Point[];
}

export default function RestaurantsCategoriesComponent({
  title,
  points,
}: SectionProps) {
  return (
    <section className="py-10">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>

      {/* Points List */}
      <div className="space-y-8">
        {points?.map((point, index) => (
          <div
            key={index}
            className="p-5 rounded-xl border border-gray-200 shadow-sm bg-white"
          >
            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900">
              {point.name}
            </h3>

            {/* Description */}
            {point.description && (
              <p className="text-gray-700 mt-2">{point.description}</p>
            )}

            {/* Sub Description */}
            {point.subDescription && (
              <p className="text-gray-500 text-sm mt-1">
                {point.subDescription}
              </p>
            )}
{/* 
      {point.locations?.length > 0 && (
  <div className="mt-4">
    <p className="font-medium text-gray-900">Locations:</p>

    <ul className="mt-2 space-y-2">
      {point.locations?.map((loc, i) => (
        <li key={i}>
          <a
            href={loc.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            📍 {loc.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
)} */}

          </div>
        ))}
      </div>
    </section>
  );
}
