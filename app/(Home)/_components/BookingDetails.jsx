"use client";

import Badge from "@/assets/svg/badge";
import React, { useState, useCallback } from "react";
import moment from "moment";
import { addDays, format } from "date-fns";
import Image from "next/image";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { CiImageOn } from "react-icons/ci";
import { CldUploadWidget } from "next-cloudinary";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaCalendarAlt } from "react-icons/fa";
import { CalendarCheck, CreditCard, Power, ShieldQuestion } from "lucide-react";
import toast from "react-hot-toast";

const BookingDetails = ({ setTravelTab, userDocumentData }) => {

  const travelData = {
    citys: "Paris, France",
    packages: "Premium Package",
    startDate: "24th May 2024",
    endDate: "29th May 2024",
    idtype: "National ID card",
  };
  return (
    <>
      <div className="w-full py-16">
        <div className="w-[90%] mx-auto max-w-custom_1 grid md:grid-cols-2 gap-24 md:gap-12">
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-bold">
              Your Booking is Confirmed
              <span className="block text-sm md:text-base pt-2 text-grey font-normal">
                Follow the steps to securely upload and verify your ID document.
              </span>
            </h3>
            <div className="w-full flex flex-col gap-4">
              <span className="flex-col flex text-sm text-grey">
                Destination
                <span className="block text-base font-semibold text-[#000]">
                  {travelData?.citys}
                </span>
              </span>

              <span className="flex-col flex text-sm text-grey">
                Travel Dates
                <span className="block text-base font-semibold text-[#000]">
                  {travelData?.startDate} - {travelData?.endDate}
                </span>
              </span>

              <span className="flex-col flex text-sm text-grey">
                Package
                <span className="block text-base font-semibold text-[#000]">
                  {travelData?.packages}
                </span>
              </span>

              <span className="flex-col flex text-sm text-grey">
                Total Cost
                <span className="block text-base font-semibold text-[#000]">
                  $25600
                </span>
              </span>
            </div>
            <div className="pt-6 border-t flex flex-col gap-4">
              <h4 className="text-2xl font-bold">Next Step</h4>
              <div className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <CalendarCheck />
                  <span className="flex-col flex text-base font-semibold text-[#000]">
                    Prepare for Your Trip
                    <span className="block text-sm font-normal text-grey">
                      Review your itinerary and start planning your activities.
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <CreditCard />
                  <span className="flex-col flex text-base font-semibold text-[#000]">
                    Complete Payment
                    <span className="block text-sm font-normal text-grey">
                      Securely pay for your booking to finalize your
                      reservation.
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Power />
                  <span className="flex-col flex text-base font-semibold text-[#000]">
                    Contact Support
                    <span className="block text-sm font-normal text-grey">
                      If you have any questions or need assistance, our support
                      team is here to help.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* Secure ID Verification */}
            <div className="flex flex-col gap-4">
              <div className="w-full p-6 px-8 border rounded-xl flex items-center justify-center gap-4">
                <div className="w-full flex items-center justify-center flex-col gap-4">
                  <Badge type={"snow"} />
                  <h3 className="text-2xl text-center font-extrabold">
                    Booking Confirmed
                    {/* ID Verification in Progress */}
                    <span className="block text-sm md:text-base pt-2 text-grey font-normal">
                      Here are the outcome of the The DOCSCAN API .
                    </span>
                  </h3>

                  {/* <button className="btn h-[55px] w-full py-3 rounded-[10px] px-6 text-base font-semibold border">
                  View Itineray
                </button> */}
                  {userDocumentData && (
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-40 relative">
                        <img
                          src={userDocumentData?.face_url}
                          alt=""
                          className="w-full object-cover"
                        />
                      </div>
                      <div className="w-full grid grid-cols-2 gap-2">
                        <span className="flex-col capitalize flex text-sm text-grey">
                          issuingCountry
                          <span className="block text-base font-semibold text-[#000]">
                            {userDocumentData?.fields?.issuingCountry}
                          </span>
                        </span>

                        <span className="flex-col capitalize flex text-sm text-grey">
                          documentNumber
                          <span className="block text-base font-semibold text-[#000]">
                            {userDocumentData?.fields?.documentNumber}
                          </span>
                        </span>

                        <span className="flex-col capitalize flex text-sm text-grey">
                          fullName
                          <span className="block text-base font-semibold text-[#000]">
                            {userDocumentData?.fields?.fullName}
                          </span>
                        </span>
                        <span className="flex-col capitalize flex text-sm text-grey">
                          nationality
                          <span className="block text-base font-semibold text-[#000]">
                            {userDocumentData?.fields?.nationality}
                          </span>
                        </span>
                        <span className="flex-col capitalize flex text-sm text-grey">
                          dateOfBirth
                          <span className="block text-base font-semibold text-[#000]">
                            {userDocumentData?.fields?.dateOfBirth}
                          </span>
                        </span>
                        <span className="flex-col capitalize flex text-sm text-grey">
                          sex
                          <span className="block text-base font-semibold text-[#000]">
                            {userDocumentData?.fields?.sex}
                          </span>
                        </span>
                        <span className="flex-col capitalize flex text-sm text-grey">
                          personalNumber
                          <span className="block text-base font-semibold text-[#000]">
                            {userDocumentData?.fields?.personalNumber}
                          </span>
                        </span>
                        <span className="flex-col capitalize flex text-sm text-grey">
                          documentNumber
                          <span className="block text-base font-semibold text-[#000]">
                            {userDocumentData?.fields?.documentNumber}
                          </span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <h5 className="text-sm text-grey">
                You can access your booking details and trip information in your
                dashboard.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <BookingDashboard />
    </>
  );
};

const BookingDashboard = () => {
  return (
    <div className="w-full py-16">
      <div className="w-[90%] mx-auto max-w-custom_1 grid md:grid-cols-1 gap-24 md:gap-12">
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-bold">
            Your Travel Dashboard
            <span className="block text-sm md:text-base text-grey font-normal">
              Manage your bookings, view your travel itinerary, and access
              support resources.
            </span>
          </h3>
        </div>
        <div className="w-full">
          {/* Secure ID Verification */}
          <div className="flex flex-col gap-4">
            <div className="w-full p-6 px-8 border rounded-xl flex gap-4">
              <div className="w-full flex flex-col gap-8">
                {/* <Badge type={"snow"} /> */}
                <h3 className="text-xl text-start font-bold">Upcoming Trips</h3>

                <div className="w-full flex flex-col gap-3">
                  <div className="flex items-center justify-between w-full gap-4">
                    <div className="flex items-center gap-4">
                      {/* <CalendarCheck /> */}
                      <span className="flex-col flex text-base font-semibold text-[#000]">
                        Paris, France
                        <span className="block text-sm font-normal text-grey">
                          April 2, 2024 - April 10, 2024
                        </span>
                      </span>
                    </div>
                    <div className="btn btn_2 rounded-lg px-4 py-3 text-sm font-semibold">
                      View Details
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full gap-4">
                    <div className="flex items-center gap-4">
                      {/* <CalendarCheck /> */}
                      <span className="flex-col flex text-base font-semibold text-[#000]">
                        Tokyo, Japan
                        <span className="block text-sm font-normal text-grey">
                          June 15, 2024 - June 22, 2024
                        </span>
                      </span>
                    </div>
                    <div className="btn btn_2 rounded-lg px-4 py-3 text-sm font-semibold">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-6 px-8 border rounded-xl flex gap-4">
              <div className="w-full flex flex-col gap-8">
                {/* <Badge type={"snow"} /> */}
                <h4 className="text-2xl text-start font-bold">
                  Support Resources
                </h4>

                <div className="w-full flex flex-col gap-3">
                  <div className="flex items-center justify-between w-full gap-4">
                    <div className="flex items-center gap-4">
                      {/* <CalendarCheck /> */}
                      <ShieldQuestion />
                      <span className="flex-col flex text-base font-semibold text-[#000]">
                        FAQ
                        <span className="block text-sm font-normal text-grey">
                          Find answers to common questions.
                        </span>
                      </span>
                    </div>
                    <div className="btn btn_2 rounded-lg px-4 py-3 text-sm font-semibold">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const TravelPackages = () => {
  const travelist = [
    {
      title: "Bali Bliss",
      price: "1,999",
      description:
        "Escape to the tropical paradise of Bali with our all-inclusive package.",
      image: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
      title: "Maui Retreat",
      price: "2,499",
      description:
        "Unwind in the serene beauty of Maui with our luxury resort package.",
      image: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
      title: "Paris Escapade",
      price: "2,799",
      description:
        "Immerse yourself in the romance and culture of Paris with our curated package.",
      image: "https://generated.vusercontent.net/placeholder.svg",
    },
  ];
  return (
    <div className="w-full py-12">
      <div className="w-[90%] mx-auto max-w-custom_1 flex flex-col gap-12">
        <h2 className="text-6xl w-full md:text-center font-bold">
          Featured Travel Packages
          <span className="block text-lg md:text-xl pt-4 text-grey font-normal">
            Explore our curated selection of top-rated travel packages.
          </span>
        </h2>
        <div className="w-full grid md:grid-cols-2 gap-8 lg:grid-cols-3">
          {travelist?.map((data, index) => {
            return (
              <div
                key={index}
                className="w-full border flex flex-col gap-3 pb-4 rounded-xl"
              >
                <div className="w-full">
                  <img
                    src={data?.image}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full p-4 flex flex-col gap-2">
                  <h4 className="text-2xl font-bold">{data?.title}</h4>
                  <h5 className="text-base font-normal text-grey">
                    {data?.description}
                  </h5>
                  <div className="w-full pt-2 flex items-center justify-between gap-4">
                    <h5 className="text-base font-normal text-dark">
                      ${data?.price}
                    </h5>
                    <button className="btn px-4 py-3 rounded-xl text-sm font-bold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BookingDetails;
