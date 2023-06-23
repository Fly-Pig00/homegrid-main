import React, { useState, useEffect } from "react";
import DistributorsMap from "./DistributorsMap";
import Image from "next/image";
import { SalesMaps, Distributors } from "@/sanity/types";

const Maps = ({
  salesMaps,
  distributors,
}: {
  salesMaps: SalesMaps[];
  distributors: Distributors[];
}) => {
  const [mapType, setMapType] = useState("sales");
  const [salesRegion, setSalesRegion] = useState("United States");

  const SalesMapTab = ({ region }: { region: string }) => {
    return (
      <button
        className={`contact__mapSales--buttons ${
          salesRegion === region ? "bg-primary" : "bg-[#f5f5f5]"
        }`}
        onClick={() => setSalesRegion(region)}
      >
        {region}
      </button>
    );
  };

  return (
    <div className="contact__map">
      <div className="contact__map--tabs">
        <button
          className={`contact__map--buttons ${
            mapType === "sales" ? "bg-primary" : "bg-[#f5f5f5]"
          } `}
          onClick={() => setMapType("sales")}
        >
          Sales
        </button>
        <button
          className={`contact__map--buttons ${
            mapType === "distributors" ? "bg-primary" : "bg-[#f5f5f5]"
          }`}
          onClick={() => setMapType("distributors")}
        >
          Distributors
        </button>
      </div>
      <div
        className={`contact__mapSales ${
          mapType === "sales" ? "block" : "hidden"
        }`}
        id="sales"
      >
        <div className="contact__mapSales--tabs">
          {salesMaps?.map(({ name }, idx) => {
            return <SalesMapTab key={idx} region={name} />;
          })}
        </div>
        <SalesMap
          mapData={salesMaps?.filter((map) => map.name === salesRegion)[0]}
        />
      </div>
      <div className={mapType === "distributors" ? "block" : "hidden"}>
        <DistributorsMap distributors={distributors} />
      </div>
    </div>
  );
};

const SalesMap = ({ mapData }: { mapData: SalesMaps }) => {
  const { name, interactiveMapLink, mapImage, salesReps } = mapData;

  // CreateAClickableMap Scripts
  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener(
        "message",
        function (event) {
          if (event.data.length >= 22) {
            if (event.data.substr(0, 22) == "__MM-LOCATION.REDIRECT")
              location = event.data.substr(22);
          }
        },
        false
      );
    } else if ((window as any).attachEvent) {
      (window as any).attachEvent(
        "message",
        function (event: any) {
          if (event.data.length >= 22) {
            if (event.data.substr(0, 22) == "__MM-LOCATION.REDIRECT")
              location = event.data.substr(22);
          }
        },
        false
      );
    }
  }, []);

  return (
    <div className="contact__mapSales--mapContainer">
      <iframe
        src={interactiveMapLink}
        width="900"
        height="525"
        className="border-none w-full h-[800px] hidden sm:block"
      />
      {/* JPG MAPS FOR MOBILE */}
      <JPGMap mapImage={mapImage} salesReps={salesReps} name={name} />
    </div>
  );
};

const JPGMap = ({
  mapImage,
  salesReps,
  name,
}: {
  mapImage: SalesMaps["mapImage"];
  salesReps: SalesMaps["salesReps"];
  name: SalesMaps["name"];
}) => {
  return (
    <div className="block sm:hidden py-5 ">
      <div className="relative h-[250px] sm:h-[600px] w-full mb-5">
        <Image
          src={mapImage?.url}
          alt={`${name} Sales Map`}
          fill
          priority
          className="w-full h-full object-contain"
        />
      </div>
      <div className=" flex flex-wrap justify-between sm:w-3/5 mx-auto">
        {salesReps?.map(({ name, email, phone, regionColor }, idx) => {
          return (
            <div key={idx} className="mb-5 w-[150px] sm:w-max">
              <p style={{ color: regionColor }} className="font-bold">
                {name}
              </p>
              <p className="break-words text-xs">{email}</p>
              <p>{phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Maps;
