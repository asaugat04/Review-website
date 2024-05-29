export default function WriteReview() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom,#f3fbff 0,#fff 60%)",
      }}
      className="flex flex-col w-full ml-5 mb-20"
    >
      <div className="reviewBox flex flex-col w-full mt-4">
        <h2 className="mb-3">Tell us how you feel about HYE?</h2>
        <textarea className=" border-2 w-auto border-dashed outline-0 rounded mr-14 md:mr-0"></textarea>
        <p className="text-sm text-gray-300">Minimum 10 characters</p>
      </div>
      <div className="reviewBox flex flex-col w-full mt-4">
        <h2 className="mb-3">What is your Name?</h2>
        <textarea className=" border-2 w-auto border-dashed outline-0 rounded mr-14 md:mr-0"></textarea>
      </div>
      <div className="reviewBox flex flex-col w-full mt-4">
        <h2 className="mb-3">What is your Email?</h2>
        <textarea className=" border-2 w-auto border-dashed outline-0 rounded mr-14 md:mr-0"></textarea>
      </div>
      <div className="reviewBox flex flex-col w-full mt-6 ">
        <button className="bg-black p-4 text-white w-2/5 lg:w-1/5 rounded">
          Submit Review
        </button>
      </div>
    </div>
  );
}
