import TravleDetails from "@/component/TravleDetails";
import { deletetravelaction, updateTravleInfo } from "@/lib/action";
import { getTravleDataById } from "@/lib/data";

import React from "react";

const TravlePlaceDetails = async ({ params }) => {
  const { travleid } = await params;
  const travleDetail = await getTravleDataById(travleid);
  console.log(travleDetail);
  const updateUserData = async (formData) => {
    "use server";
    await updateTravleInfo(travleid, formData );
  };
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-5">
      <TravleDetails
        travleDetail={travleDetail}
        deletetravelaction={deletetravelaction}
        updateUserData={updateUserData}
      />
    </main>
  );
};

export default TravlePlaceDetails;
