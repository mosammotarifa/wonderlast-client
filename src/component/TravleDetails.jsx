"use client";

import { AlertDialog, Button } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const TravleDetails = ({ travleDetail,deletetravelaction }) => {
  
  const handleDelte = async (travleid) => {
    await deletetravelaction(travleid);
  };
  return (
    <div>
      <div className="mx-auto max-w-6xl">
        {/* Header + Action Buttons */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-blue-600">
              Destinations / Details
            </p>
            <h1 className="text-3xl font-bold text-slate-900">
              Travel Details
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Explore and manage your travel destination
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/all-travle-destination/${travleDetail._id}/edit`}
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
            >
              ✎ Edit
            </Link>

            <AlertDialog>
              <Button variant="danger">Delete </Button>
              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                      <AlertDialog.Icon status="danger" />
                      <AlertDialog.Heading>
                        Delete project permanently?
                      </AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                      <p>
                        This will permanently delete{" "}
                        <strong>{travleDetail.destinationName}</strong> and all of its data.
                        This action cannot be undone.
                      </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <Button slot="close" variant="tertiary">
                        Cancel
                      </Button>
                      <Button onClick={()=>handleDelte(travleDetail._id)} variant="danger">
                        Delete Project
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
          </div>
        </div>

        {/* Main Details Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Large Banner Image */}
          <div className="relative h-72 w-full md:h-[450px]">
            <Image
              src={travleDetail.image}
              alt={travleDetail.destinationName}
              fill
              unoptimized
              className="object-cover " 
            />

            <span className="absolute left-6 top-6 rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-blue-600 shadow-md">
              {travleDetail.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Title + Price */}
            <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-100 pb-8">
              <div>
                <h2 className="text-3xl font-bold capitalize text-slate-900 md:text-4xl">
                  {travleDetail.destinationName}
                </h2>

                <p className="mt-3 text-base text-slate-500">
                  📍 {travleDetail.country}
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 px-6 py-4">
                <p className="text-3xl font-bold text-blue-600">
                  ${travleDetail.price}
                </p>
                <p className="mt-1 text-sm text-slate-500">Per Person</p>
              </div>
            </div>

            {/* Travel Information */}
            <div className="grid grid-cols-1 gap-5 border-b border-slate-100 py-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="mb-2 text-sm text-slate-500">🕒 Trip Duration</p>
                <p className="text-lg font-semibold text-slate-900">
                  {travleDetail.duration}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="mb-2 text-sm text-slate-500">📅 Departure Date</p>
                <p className="text-lg font-semibold text-slate-900">
                  {travleDetail.departureDate}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="pt-8">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                About This Destination
              </h3>

              <p className="text-base leading-8 text-slate-600">
                {travleDetail.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravleDetails;
