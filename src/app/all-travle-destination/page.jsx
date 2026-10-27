
import DestinationsClient from "@/component/DestinationsClient";


import { travleData } from "@/lib/data";
import React from "react";

const AllTravleDestinations = async () => {
  const allTraveldestination = await travleData();
  console.log(allTraveldestination);
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Travel Cards Grid
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allTraveldestination.map((travlePlace) => (
          <TravlePlace key={travlePlace._id} travlePlace={travlePlace} />
        ))}
      </div> */}
      <DestinationsClient allTraveldestination={allTraveldestination}   />
    </div>
  );
};

export default AllTravleDestinations;
