"use client"
import React from "react";
const Navbar = () => {
  return (
    <div className="w-full border-b py-4">
      <div className="w-[90%] mx-auto max-w-custom_1 flex items-center justify-between gap-4">
        <h5 className="text-xl font-bold">Jetset Journeys</h5>
        <div className="hidden lg:flex items-center justify-center gap-6">
          <h5 className="text-base font-semibold">Destinations</h5>
          <h5 className="text-base font-semibold">Packages</h5>
          <h5 className="text-base font-semibold">Contact</h5>
          <h5 className="text-base font-semibold">About</h5>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="btn py-3 rounded-[10px] px-6 text-sm font-semibold border">
            Sign In
          </div>

          <div className="btn btn_2 py-3 rounded-[10px] px-6 text-sm font-semibold border">
          Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
