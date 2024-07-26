"use client";

import React, { useCallback, useState } from "react";
import Badge from "@/assets/svg/badge";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { CldUploadWidget } from "next-cloudinary";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
// import { toast } from "react-toastify";

const IDVerification = ({
  setIDType,
  image,
  handleUpload,
  handleUploadDocscanDocuments,
  loading,
  idtype,
  newTravelData,
  setImage,
}) => {
  const handleIDTypeSelection = (value) => {
    setIDType(value);
  };

  const handleSetData = () => {
    localStorage.setItem("traveldata", JSON.stringify(newTravelData));
  };

  const packagelist = ["Passport", "Driver License", "National ID card"];

  return (
    <div className="w-full py-16">
      <div className="w-[90%] mx-auto max-w-custom_1 grid md:grid-cols-2 gap-24 md:gap-12">
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-extrabold">
            Verify Your Identity
            <span className="block text-sm md:text-base pt-2 text-grey font-normal">
              Follow the steps to securely upload and verify your ID document.
            </span>
          </h3>
          <div className="w-full flex flex-col gap-4">
            <label
              htmlFor=""
              className="text-sm w-full text-dark font-semibold flex flex-col gap-2"
            >
              ID Type
              <Select onValueChange={(e) => handleIDTypeSelection(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select ID Type" />
                </SelectTrigger>
                <SelectContent>
                  {packagelist?.map((packagedata, index) => (
                    <SelectGroup key={index}>
                      <SelectItem key={index} value={packagedata}>
                        {packagedata}
                      </SelectItem>
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <div className="text-sm w-full text-dark font-semibold flex flex-col gap-2">
              Upload ID Document
              <div className="w-full">
                {image ? (
                  <Image
                    alt="Cotion"
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src={image}
                    className="h-[150px] w-full md:mx-auto object-cover"
                  />
                ) : (
                  <div
                    className="w-full"
                    id="uploadDiv"
                    // onClick={handleUploadWidgetClick}
                  >
                    <CldUploadWidget
                      onSuccess={handleUpload}
                      uploadPreset="dl93zl9fn"
                      folder="uploads"
                      sources={["local", "url", "camera"]}
                    >
                      {({ open }) => (
                        <div
                          className="w-full cursor-pointer border px-4 md:px-8 border-[rgba(0,0,0,.2)] h-[150px] flex flex-col gap-4 items-center justify-center"
                          onClick={() => open()}
                        >
                          <CiImageOn fontSize={"38px"} />
                          <span className="text-sm text-center">
                            Upload a file or drag and drop PNG, JPG, GIF up to
                            10MB
                          </span>
                        </div>
                      )}
                    </CldUploadWidget>
                  </div>
                )}
              </div>
              <input
                value={image}
                name="image"
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Enter your image URL"
                className="input h-[50px] text-sm rounded-xl"
              />
            </div>
            <button
              onClick={() => {
                handleSetData();
                handleUploadDocscanDocuments();
              }}
              disabled={image === "" || idtype === "" || loading === true}
              className="btn h-[55px] w-full py-3 rounded-[10px] px-6 text-base font-semibold border"
            >
              Proceed to ID Verification
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-4">
            {!loading ? (
              <div className="w-full p-6 px-8 border rounded-xl flex items-center justify-center gap-4">
                <div className="w-full flex items-center justify-center flex-col gap-4">
                  <Badge />
                  <h3 className="text-2xl text-center font-extrabold">
                    Verify Your Identity
                    <span className="block text-sm md:text-base pt-2 text-grey font-normal">
                      Upload a photo of your government-issued ID to complete
                      the booking process.
                    </span>
                  </h3>

                  <button
                    onClick={() => {
                      handleSetData();
                      handleUploadDocscanDocuments();
                    }}
                    className="btn h-[55px] w-full py-3 rounded-[10px] px-6 text-base font-semibold border"
                  >
                    Verify ID
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full p-6 px-8 border rounded-xl flex items-center justify-center gap-4">
                <div className="w-full flex items-center justify-center flex-col gap-4">
                  <Badge />
                  <h3 className="text-2xl text-center font-extrabold">
                    ID Verification in Progress
                    <span className="block text-sm md:text-base pt-2 text-grey font-normal">
                      We`&lsquo;`re reviewing your ID document. You`&lsquo;`ll receive a
                      notification once the verification is complete.
                    </span>
                  </h3>

                  <span className=" h-[55px] w-full text-center px-6 text-base font-semibold">
                    Verifying...
                  </span>
                </div>
              </div>
            )}

            <h5 className="text-sm text-grey">
              Your personal information is securely stored and will not be
              shared with third parties.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDVerification;
