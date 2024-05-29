export default function UserReview({ name, desc, index }) {
  return (
    <div
      className="w-full my-3 px-4 border-b-2 rounded "
      style={{
        backgroundColor:
          index % 2 == 0 ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="flex flex-row items-center">
        <div className="text-left font-bold text-xl mt-3">{name}</div>
        <div className="ratings-star ml-2 flex flex-row ">
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "15px" }}
          />
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "15px" }}
          />
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "15px" }}
          />
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "15px" }}
          />
          <img
            src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
            alt="logo"
            style={{ height: "15px" }}
          />
        </div>
      </div>
      <div className=" md:w-auto ">
        <span className="text-xl font-bold mb-0 pb-0">“</span>
        <div className="flex text-lg lg:w-4/5 text-sm break-keep md:w-full m-0 p-0">
          {desc}
        </div>
        <div className="text-right text-xl mt-0 font-bold w-full">“</div>
      </div>
      <div className="flex flex-row items-center justify-start align-center">
        <i
          onClick={(e) => {
            if (e.target.style.color != "red") e.target.style.color = "red";
            else e.target.style.color = "black";
            // color == "red" ? (color = "black") : (color = "red");
          }}
          class="fa-regular fa-heart mx-2 mb-3 "
        ></i>
        <i class="fa-solid fa-share mx-2 mb-3"></i>
        <i class="fa-regular fa-flag mx-2 mb-3"></i>
        <img
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
          alt="logo"
          className="mb-3 mx-2"
          style={{ height: "20px" }}
        />
      </div>
    </div>
  );
}
