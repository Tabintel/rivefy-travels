"use client";

import Badge from "@/assets/svg/badge";
import React, { useState, useCallback } from "react";
import moment from "moment";
import { addDays, format } from "date-fns";
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
import toast from "react-hot-toast";

const Travel = ({ setTravelTab, handleUploadDocscanDocuments }) => {
  const city = [
    "Paris, France",
    "Tokyo, Japan",
    "Sydney, Austalia",
    "New York, USA",
  ];

  const today = new Date();
  const [date, setDate] = React.useState({
    from: today,
    to: addDays(today, 3),
  });
  const [citys, setCitys] = useState("");
  const [packages, setPackages] = useState("");

  const startdate = date?.from;
  const enddate = date?.to;
  let date1 = moment(startdate);
  let date2 = moment(enddate);

  const packagelist = ["Basic Package", "Premium Package", "Luxury Package"];

  const handleCitySelection = (value) => {
    setCitys(value);
  };

  const handlePackageSelection = (value) => {
    setPackages(value);
  };

  const travelDocumentData = {
    city: citys,
    packages,
    startDate: moment(date.from).format("DD MMMM YYYY"),
    endDate: moment(date.to).format("DD MMMM YYYY"),
  };

  const handleIdVerification = () => {
    setTravelTab(1);
    // console.log(travelDocumentData);
    localStorage.setItem("traveldata", JSON.stringify(travelDocumentData));
  };
  return (
    <div className="w-full py-16">
      <div className="w-[90%] mx-auto max-w-custom_1 grid md:grid-cols-2 gap-24 md:gap-12">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-extrabold">
            Book Your Travel
            <span className="block text-lg md:text-xl pt-4 text-grey font-normal">
              Find the perfect travel package for your next getaway.
            </span>
          </h2>
          <div className="w-full flex flex-col gap-4">
            <label
              htmlFor=""
              className="text-sm w-full text-dark font-semibold flex flex-col gap-2"
            >
              Destination
              <Select onValueChange={(e) => handleCitySelection(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {city?.map((city, index) => {
                    return (
                      <SelectGroup key={index}>
                        <SelectItem key={index} value={city}>
                          {city}
                        </SelectItem>
                      </SelectGroup>
                    );
                  })}
                </SelectContent>
              </Select>
            </label>
            <Popover>
              <PopoverTrigger>
                <div className="w-full flex items-start flex-col gap-2">
                  <span className="text-sm text-start font-semibold">
                    Travel Dates
                  </span>
                  <div className="w-full grid sm:grid-cols-2 gap-4">
                    {/* dates */}
                    <div className="w-full px-3 border cursor-pointer rounded-lg p-3 text-xs font-semibold flex items-start justify-center flex-col gap-1">
                      <span>CHECK IN</span>
                      <label
                        htmlFor="titleprice"
                        className="text-xs w-full justify-between  flex items-center gap-2 font-booking_font"
                      >
                        {moment(date.from).format("DD MMMM YYYY")}
                        <FaCalendarAlt />
                      </label>
                    </div>
                    <div className="w-full px-3 border cursor-pointer rounded-lg p-3 text-xs font-semibold flex items-start justify-center flex-col gap-1">
                      <span>CHECK OUT</span>
                      <label
                        htmlFor="titleprice"
                        className="text-xs w-full justify-between  flex items-center gap-2 font-booking_font"
                      >
                        {moment(date.to).format("DD MMMM YYYY")}
                        <FaCalendarAlt />
                      </label>
                    </div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
            <label
              htmlFor=""
              className="text-sm w-full text-dark font-semibold flex flex-col gap-2"
            >
              Package
              <Select onValueChange={(e) => handlePackageSelection(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Package" />
                </SelectTrigger>
                <SelectContent>
                  {packagelist?.map((packagedata, index) => {
                    return (
                      <SelectGroup key={index}>
                        <SelectItem key={index} value={packagedata}>
                          {packagedata}
                        </SelectItem>
                      </SelectGroup>
                    );
                  })}
                </SelectContent>
              </Select>
            </label>
            <button
              disabled={citys === "" || packages === ""}
              onClick={handleIdVerification}
              className="btn h-[55px] w-full py-3 rounded-[10px] px-6 text-base font-semibold border"
            >
              Proceed to ID Verfication
            </button>
          </div>
        </div>
        <div className="w-full">
          {/* Secure ID Verification */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-extrabold">
              Secure ID Verification
              <span className="block text-lg md:text-xl pt-6 text-grey font-normal">
                Verify your identity to complete your booking.
              </span>
            </h2>
            <div className="w-full p-6 px-8 border rounded-xl flex items-center justify-center gap-4">
              <div className="w-full flex items-center justify-center flex-col gap-4">
                <Badge />
                <h3 className="text-2xl text-center font-extrabold">
                  Verify Your Identity
                  {/* ID Verification in Progress */}
                  <span className="block text-sm md:text-base pt-2 text-grey font-normal">
                    {/* Verify your identity to complete your booking. */}
                    Upload a photo of your government-issued ID to complete the
                    booking process.
                  </span>
                </h3>

                <button className="btn h-[55px] w-full py-3 rounded-[10px] px-6 text-base font-semibold border">
                  Verify ID
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Travel;
