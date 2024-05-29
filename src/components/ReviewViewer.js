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

        <div className="flex flex-row md:gap-3 md:flex-col companyReviews md:w-2/5 ml-0 mt-4">
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
            <span
              style={{ fontWeight: activeTab == "tripAdvisor" ? "bold" : "" }}
              className=" text-sm  pl-2 inline-block w-[90px]"
            >
              <p className="flex flex-row gap-1">
                Tripadvisor <span className="hidden md:block">Reviews</span>{" "}
              </p>
            </span>
          </a>

          <a
            className="lonleyplanet flex flex-col md:flex-row items-center md:justify-start justify-between "
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeActiveTab("lonleyplanet");
            }}
          >
            <img
              style={{ height: 40 }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAMAAAAynjhNAAAAM1BMVEVHcEwAVdcAV9kAV9kAV9kAV9kAVtgAV9kAVtkAV9kAV9kAVtkAV9kAV9kAV9kAV9kAVthDEWDfAAAAEXRSTlMACWOw9P8ThC2SnETkd1bEIsqFdPEAAAEPSURBVHgBYiAWAMomCySGYRgIynBm+v9rG49GketcIbBiJcY6jy1nwxdG751NIYQM+HIZ1NasoS0O4e1JOwpDcgArKo0Q44RXWWjF0DCqzrfCEajgUOJ0U9NkhTM2TpcUW8WFUHe8ScH2Ee7SKuUdFqM2AK3SlsYmWjDPL/Es/dq4Cd1z8INGc+cgHMPBRUfqYg/3Ni7FZkdRs/GIjon0yVi96cL9aFTc/XqDD1w7WrHLtmekdawgBFJxY+QFt0fTHnRBtyByisvcNoq0al700EG98kacG1td7ovpkJP6j9k7aZZ+0swuPt8PiVZuIluJauOyZt3QNj8+LxHQ7FrVugZ9idRgOB7gtBdUhYv8ALYMDRVcD5H+AAAAAElFTkSuQmCC"
            />
            <span
              style={{ fontWeight: activeTab == "lonleyplanet" ? "bold" : "" }}
              className=" text-sm  pl-2 w-[100px]"
            >
              <p className="flex flex-row gap-1 w-max">
                Lonleyplanet <span className="hidden md:block">Reviews</span>
              </p>
            </span>
          </a>

          <a
            className="maps flex flex-col  md:flex-row items-center "
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeActiveTab("maps");
            }}
          >
            <img
              style={{ height: 40 }}
              src="https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q"
            />
            <span
              style={{ fontWeight: activeTab == "maps" ? "bold" : "" }}
              className=" text-sm  pl-2 w-[60px]"
            >
              <p className="flex flex-row gap-1">
                Maps <span className="hidden md:block">Reviews</span>
              </p>
            </span>
          </a>
        </div>
      </div>
      <div className=" md:pl-5 md:mt-2 hidden md:block">
        <Progerssbar percentage={80} />
      </div>
    </div>
  );
}
