import { getTravleDataById } from "@/lib/data";
import Image from "next/image";
import React from "react";

const TravlePlaceDetails = async ({ params }) => {
  const { travleid } = await params;
  const travleDetail = await getTravleDataById(travleid);
  console.log(travleDetail);
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Destination Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={travleDetail.image}
          alt={travleDetail.destinationName}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-blue-600 shadow">
          {travleDetail.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold capitalize text-gray-900">
              {travleDetail.destinationName}
            </h2>
            <p className="mt-1 text-sm capitalize text-gray-500">
              📍 {travleDetail.country}
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">
              ${travleDetail.price}
            </p>
            <p className="text-xs text-gray-400">Per Person</p>
          </div>
        </div>

        <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-600">
          { travleDetail.description}
        </p>

        {/* Travel Information */}
        <div className="mb-5 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-4">
          <div>
            <p className="text-xs text-gray-400">Duration</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
              🕒 {travleDetail.duration}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Departure</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">
              📅 {travleDetail.departureDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravlePlaceDetails;
