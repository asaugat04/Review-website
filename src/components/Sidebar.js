export default function Sidebar({ slider, setSlider }) {
  return (
    <div
      style={{
        // backgroundImage:
        //   "linear-gradient(to bottom,rgb(160, 160, 160) 0,rgb(180, 180, 180) 100%)",
        background: "transparent",
        backdropFilter:
          "blur(10px) brightness(0.5) saturate(0.5) contrast(0.5)",
        overflow: "hidden",
        transition: "all 0.1s",
      }}
      className={
        (slider ? "w-4/5 py-4" : "w-0 py-0") +
        " md:hidden slider fixed top-0 right-0 pt-3 z-50 h-[100dvh] bg-stone-900 text-white"
      }
    >
      <button
        onClick={() => {
          setSlider(false);
          console.log(slider);
        }}
        className="text-right text-bold w-full mt-3 pr-4 text-3xl"
      >
        X
      </button>

      <div className="flex items-center w-auto mx-9">
        <img src="https://hye.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-no-bg-new.917dcf43.png&w=256&q=75" />
      </div>
      <p className="text-center my-7">Get in touch</p>
      <hr className="w-4/5 m-auto" />
      <ul className="m-6">
        <li className="my-2 flex flex-row items-center gap-2">
          <i class="fa-solid fa-envelope rounded-full p-2 bg-[#77A613]"></i>
          <span className=" text-xs">
            info@himalayanyogaandexcursion.com.np
          </span>
        </li>
        <li className="my-2 flex flex-row items-center gap-2">
          <i class="fa-solid fa-location-dot rounded-full p-2 bg-[#77A613]"></i>
          <span className=" text-xs">Thamel, Kathmandu 26</span>
        </li>
        <li className="my-2 flex flex-row items-center gap-2">
          <i class="fa-solid fa-phone rounded-full p-2 bg-[#77A613]"></i>
          <span className=" text-xs">9851117039</span>
        </li>
        <li className="my-2 flex flex-row items-center gap-2">
          <a className="flex flex-row items-center gap-2" href="#">
            <img
              className="w-7 h-7"
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
            />
            <span className=" text-xs">Tripadvisor</span>
          </a>
        </li>
      </ul>
      <ul className="absolute bottom-0 ml-4 mb-4 text-3xl flex gap-4">
        <li>
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
