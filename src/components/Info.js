export default function Info({ display }) {
  return (
    <div
      style={{ top: 240 }}
      className={
        (display ? "block " : "hidden ") +
        " md:block border md:w-auto lg:w-auto rounded-xl p-3 mt-5 lg:sticky lg:block md:hidden "
      }
    >
      <img
        className="p-3 "
        src="https://hye.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-no-bg-new.917dcf43.png&w=640&q=75"
      />
      <button className="bg-black rounded text-white flex justify-center mx-auto my-4 w-4/5 text-xl p-2">
        Visit Website
      </button>
    </div>
  );
}
