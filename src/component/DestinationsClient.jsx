"use client";

import { useState } from "react";
import TravlePlace from "@/component/TravlePlace";

const DestinationsClient = ({ allTraveldestination }) => {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // Get unique categories from MongoDB data
  const categories = [
    ...new Set(allTraveldestination.map((item) => item.category)),
  ];

  // Filter and sort destinations
  const filteredDestinations = allTraveldestination
    .filter((item) => {
      const price = Number(item.price);

      const categoryMatch = category === "all" || item.category === category;

      const priceMatch =
        priceRange === "all" ||
        (priceRange === "low" && price < 10000) ||
        (priceRange === "medium" && price >= 10000 && price <= 20000) ||
        (priceRange === "high" && price > 20000);

      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === "low") {
        return Number(a.price) - Number(b.price);
      }

      if (sortBy === "high") {
        return Number(b.price) - Number(a.price);
      }

      if (sortBy === "az") {
        return a.destinationName.localeCompare(b.destinationName);
      }

      if (sortBy === "za") {
        return b.destinationName.localeCompare(a.destinationName);
      }

      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Our Destinations
          </h2>

          <p className="mt-3 text-gray-500">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Category */}
            <div>
            

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500"
              >
                <option value="all"> Categories</option>

                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
          

              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500"
              >
                <option value="all"> Prices</option>
                <option value="low">Under 10,000</option>
                <option value="medium">10,000 - 20,000</option>
                <option value="high">Above 20,000</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
             

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500"
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-blue-600">
              {filteredDestinations.length}
            </span>{" "}
            destinations
          </p>

          <button
            onClick={() => {
              setCategory("all");
              setPriceRange("all");
              setSortBy("default");
            }}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
          >
            Reset Filters
          </button>
        </div>

        {/* Travel Cards */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((travlePlace) => (
              <TravlePlace key={travlePlace._id} travlePlace={travlePlace} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-12 text-center text-gray-500">
            No destinations found.
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsClient;
