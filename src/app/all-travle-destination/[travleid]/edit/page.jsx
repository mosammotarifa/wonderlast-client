import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { updateTravleInfo } from "@/lib/action";
import { getTravleDataById } from "@/lib/data";
import React from "react";
import EditUserData from "@/component/EditUserData";

const EditingPage = async ({ params }) => {
  const { travleid } = await params;
  const edituser = await getTravleDataById(travleid);
  console.log(edituser);
  const updateUserData = async (formData) => {
    "use server";
    await updateTravleInfo(travleid, formData);
  };
  return (
    <div>
      <EditUserData edituser={edituser} updateUserData={updateUserData} />
    </div>
  );
};

export default EditingPage;
