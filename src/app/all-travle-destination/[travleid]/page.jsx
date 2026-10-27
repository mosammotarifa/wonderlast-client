import TravleDetails from "@/component/TravleDetails";
import { deletetravelaction } from "@/lib/action";
import { getTravleDataById } from "@/lib/data";

import React from "react";

const TravlePlaceDetails = async ({ params }) => {
  const { travleid } = await params;
  const travleDetail = await getTravleDataById(travleid);
  console.log(travleDetail);

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-5">
      <TravleDetails
        travleDetail={travleDetail}
        deletetravelaction={deletetravelaction}
      />
    </main>
  );
};

export default TravlePlaceDetails;
