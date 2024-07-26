"use client";
import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Hero from "./Hero";
import Travel from "./Travel";
import IDVerification from "./IDVerification";
import BookingDetails from "./BookingDetails";
const MainContent = () => {
  const [traveltab, setTravelTab] = useState(0);
  const [idtype, setIDType] = useState(0);
  const [userDocumentData, setUserDocumentData] = useState(null);
  const [image, setImage] = useState("");
  // https://ekyc.pixlab.io/assets/images/passport_template.png
  // http://i.stack.imgur.com/oJY2K.png
  const [loading, setLoading] = useState(false);
  // let loading = false;

  const tempKey = process.env.NEXT_PUBLIC_PIXLAB_API_KEY;
  const handleUpload = useCallback(
    (result) => {
      setImage(result.info?.secure_url);
    },
    [setImage]
  );
  let travelData;
  if (typeof window !== "undefined") {
    travelData = JSON.parse(localStorage.getItem("traveldata"));
  }


  const newTravelData = {
    city: travelData?.citys,
    packages: travelData?.packages,
    startDate: travelData?.startDate,
    endDate: travelData?.endDate,
    idtype: idtype,
  };
  const handleUploadDocscanDocuments = async () => {
    setLoading(true);

    try {
      const { data } = await axios.post("/api/docscan", {
        img: image,
        key: tempKey,
      });
      setUserDocumentData(data);
      setTravelTab(2);
      toast.success("Image test successfull!!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <div className="w-full">
      <Hero />
      {/* <TravelPackages /> */}
      {traveltab === 0 ? (
        <Travel
          setTravelTab={setTravelTab}
          handleUploadDocscanDocuments={handleUploadDocscanDocuments}
          loading={loading}
        />
      ) : traveltab === 1 ? (
        <IDVerification
          setTravelTab={setTravelTab}
          image={image}
          setIDType={setIDType}
          handleUpload={handleUpload}
          handleUploadDocscanDocuments={handleUploadDocscanDocuments}
          loading={loading}
          newTravelData={newTravelData}
          idtype={idtype}
          setImage={setImage}
          // loading={loading}
        />
      ) : traveltab === 2 && userDocumentData !== null ? (
        <>
          <BookingDetails
            userDocumentData={userDocumentData}
            travelData={travelData}
            setTravelTab={setTravelTab}
          />
        </>
      ) : (
        ""
      )}
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
export default MainContent;
