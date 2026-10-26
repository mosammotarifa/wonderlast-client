import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative min-h-[750px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Banner.png"
        alt="Travel Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Text and Buttons */}
      <div className="absolute inset-0 flex items-center justify-center px-6 pb-28">
        <div className="z-10 max-w-4xl text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Discover Your Next Adventure
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/destinations"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700"
            >
              EXPLORE NOW
            </Link>

            <Link
              href="/destinations"
              className="rounded-lg border border-white px-8 py-3 font-semibold hover:bg-white hover:text-black"
            >
              VIEW DESTINATION
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar - Inside Bottom of Image */}
      <div className="absolute bottom-6 left-0 z-20 w-full px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-5 items-center gap-3 rounded-xl border border-white/30 bg-white/20 p-5 shadow-xl backdrop-blur-md">
          {/* Location */}
          <div className="border-r border-gray-300 px-3">
            <p className="font-semibold text-white">Location</p>
            <p className="mt-2 text-sm text-white">address,City or Zip</p>
          </div>

          {/* Date */}
          <div className="border-r border-gray-300 px-3">
            <p className="font-semibold text-white">Date / Duration</p>
            <p className="mt-2 text-sm text-white">Anytime / 3 Days</p>
          </div>

          {/* Budget */}
          <div className="border-r border-gray-300 px-3">
            <p className="font-semibold text-white">Budget</p>
            <p className="mt-2 text-sm text-white">$0 - $3000</p>
          </div>

          {/* People */}
          <div className="px-3">
            <p className="font-semibold text-white">People</p>
            <p className="mt-2 text-sm text-white">5 - 10</p>
          </div>

          {/* Search Button */}
          <button className="rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
