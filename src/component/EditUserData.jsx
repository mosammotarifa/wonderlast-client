"use client";
import { Button, Input, Label, Modal, Surface } from "@heroui/react";
import React from "react";

const EditUserData = ({ edituser, updateUserData }) => {
  return (
    <div>
      <Modal>
        <Button
          variant="secondary"
          className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-100"
        >
          ✎ Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-3xl">
              <Modal.CloseTrigger />

              <Modal.Header className="border-b border-gray-200 bg-white px-6 py-5">
                <Modal.Heading className="text-2xl font-bold text-gray-900">
                  Edit Travel Package
                </Modal.Heading>
                <p className="mt-2 text-sm text-gray-500">
                  Update your travel package information and manage your
                  destination details.
                </p>
              </Modal.Header>

              <Modal.Body className="max-h-[70vh] overflow-y-auto bg-gray-50 p-6">
                <Surface variant="default" className="rounded-2xl bg-white p-6">
                  <form
                    id="edit-travel-form"
                    action={updateUserData}
                    className="space-y-6"
                  >
                    {/* Destination Name */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">
                        Destination Name
                      </Label>
                      <Input
                        name="destinationName"
                        defaultValue={edituser.destinationName}
                        placeholder="Bali Paradise"
                        className="w-full"
                      />
                    </div>

                    {/* Country & Category */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">
                          Country
                        </Label>
                        <Input
                          name="country"
                          defaultValue={edituser.country}
                          placeholder="Indonesia"
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">
                          Category
                        </Label>
                        <Input
                          name="category"
                          defaultValue={edituser.category}
                          placeholder="Beach"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Price & Duration */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">
                          Price (USD)
                        </Label>
                        <Input
                          name="price"
                          type="number"
                          min="0"
                          defaultValue={edituser.price}
                          placeholder="e.g., 1299"
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">
                          Duration
                        </Label>
                        <Input
                          name="duration"
                          defaultValue={edituser.duration}
                          placeholder="e.g., 7 Days"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Departure Date */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">
                        Departure Date
                      </Label>
                      <Input
                        name="departureDate"
                        type="date"
                        defaultValue={edituser.departureDate}
                        className="w-full"
                      />
                    </div>

                    {/* Image URL */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">
                        Image URL
                      </Label>
                      <Input
                        name="image"
                        type="url"
                        defaultValue={edituser.image}
                        placeholder="https://example.com/image.jpg"
                        className="w-full"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">
                        Description
                      </Label>
                      <textarea
                        name="description"
                        rows={5}
                        defaultValue={edituser.description}
                        placeholder="Describe the travel experience..."
                        className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <Modal.Footer className="flex justify-end gap-3 border-t border-gray-200 bg-white px-6 py-4">
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        form="edit-travel-form"
                        className="bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700"
                      >
                        Update Travel Package
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditUserData;
