"use server";

import { revalidatePath } from "next/cache";

export const createUser = async (formData) => {
  const newUsers = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUsers),
  });
  if (!res.ok) {
    throw new Error("Failed to create destination");
  }
  const data = await res.json();
  revalidatePath("/all-travle-destination");
  return data;
};

export const deletetravelaction = async (travleid) => {
  const res = await fetch(`http://localhost:5000/users/${travleid}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Delete failed`);
  }
  const data =await res.json()
  console.log("after delete", data);
  revalidatePath("/users");
  return data;
};
