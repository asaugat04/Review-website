import { useState } from "react";
import Progerssbar from "./Progressbar";

export default function ReviewViewer({ changeActiveTab, activeTab }) {
  return (
    <div
      style={{
        background: "radial-gradient(at top left,#fff 20%,#F3F3F7)",
      }}
      className="flex justify-around p-4 py-8 "
    >
      <div className="pr-5 mt-2 flex flex-col items-center">
        <span
          style={{
            fontSize: "26px",
            lineHeight: "32px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Himalayan Yoga & Excursion Reviews
        </span>
        <div className="ratings-star my-5 flex flex-row flex-wrap">
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "40px" }}
          />
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "40px" }}
          />
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "40px" }}
          />
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "40px" }}
          />
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "40px" }}
          />
        </div>
        <div className="ratingsViewer ml-2">
          <span className="font-bold">4.7</span> Rating
          <span className=" ml-5 font-bold">695</span> Reviews
        </div>

        <div className="flex flex-row companyReviews ml-1 mt-4">
          <a
            className="company flex flex-col md:flex-row items-center"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeActiveTab("tripAdvisor");
            }}
          >
            <img
              style={{ height: 40 }}
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
            />
            <span className="hidden md:block text-xl font-bold pl-2 text-sm">
              Tripadvisor Reviews
            </span>
            <span
              style={{ fontWeight: activeTab == "tripAdvisor" ? "bold" : "" }}
              className="md:hidden text-sm text-xl  pl-2"
            >
              Tripadvisor
            </span>
          </a>

          <a
            className="lonleyplanet flex flex-col md:flex-row items-center justify-between md:hidden"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeActiveTab("lonleyplanet");
            }}
          >
            <img
              style={{ height: 40 }}
              src="https://assets.reviews.io/img/all-global-assets/icons/icon-reporting--sm--colour.svg"
            />
            <span
              style={{ fontWeight: activeTab == "lonleyplanet" ? "bold" : "" }}
              className=" text-sm  pl-2"
            >
              Lonleyplanet
            </span>
          </a>

          <a
            className="info flex flex-col  md:flex-row items-center md:hidden"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeActiveTab("info");
            }}
          >
            <img
              style={{ height: 40 }}
              src="https://assets.reviews.io/img/all-global-assets/icons/icon-information--sm--colour.svg"
            />
            <span
              style={{ fontWeight: activeTab == "info" ? "bold" : "" }}
              className=" text-sm  pl-2"
            >
              Info
            </span>
          </a>
        </div>
      </div>
      <div className=" md:pl-5 md:mt-2 hidden md:block">
        <Progerssbar percentage={70} />
      </div>
    </div>
  );
}
