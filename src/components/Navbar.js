import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [slider, setSlider] = useState(false);
  return (
    <nav className="m-0">
      <div
        className="wrapper py-4 flex justify-between md:justify-around drop-shadow-lg"
        style={{ boxShadow: "0px -30px 23px 12px black" }}
      >
        <a href="/">
          <img
            src="https://hye.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-no-bg-new.917dcf43.png&w=640&q=75"
            alt="logo"
            className="w-40 md:w-48 l-3"
            // style={{ width: "200px" }}
          />
        </a>
        <button
          onClick={() => {
            setSlider(true);
            console.log(slider);
          }}
          className="slider-trigger flex items-center mx-5 md:hidden block"
        >
          <i class="text-3xl fa-solid fa-bars align-self-center"></i>
        </button>

        <div className="flex items-center mx-5 hidden md:block">
          <i class="fa-solid fa-magnifying-glass align-self-center"></i>
          <button className="mx-5 text-dark border-black border-2 font-bold py-2 px-4 rounded ">
            Are you a business? click here
          </button>
        </div>
      </div>
      <Sidebar slider={slider} setSlider={setSlider} />
    </nav>
  );
}
