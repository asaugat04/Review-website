export default function Metrices({ display }) {
  console.log(display);
  return (
    <div
      className={
        (display ? "block " : "hidden ") +
        "md:block metrices border md:w-fit lg:w-auto  rounded-xl p-3 md:sticky top-0 z-5 bg-white"
      }
    >
      <div className="itemHeading  flex justify-between">
        <div className="flex justify-center items-center">
          <img
            src="https://assets.reviews.io/img/all-global-assets/icons/icon-chat--md--colour.svg"
            alt="store"
            className="w-9 h-9"
          />
          <h1 className="text-l font-bold ml-2">Customer Service</h1>
        </div>
      </div>
      <table>
        <tr>
          <td className="text-l py-1 px-2">Communication Channels</td>
          <td className="text-l py-1 px-2">Email, Phone, Live Chat</td>
        </tr>
        <tr>
          <td className="text-l py-1 px-2">Queries Resolved In</td>
          <td className="text-l py-1 px-2">6 - 12 Hours</td>
        </tr>
        <tr>
          <td className="text-l py-1 px-2">Customer Service</td>
          <td className="text-l py-1 px-2">
            <b>4.5</b> out of 5
          </td>
        </tr>
      </table>
    </div>
  );
}
