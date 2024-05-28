import { useEffect } from "react";
import Metrices from "./Metrices";
import Info from "./Info";

export default function ReviewsPageLeft({ activeTab }) {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="flex items-center flex-col mt-4 lg:w-1/5 lg:sticky top-0 md:w-auto md:m-5"
    >
      <Metrices display={activeTab == "metrices"} />

      <Info display={activeTab == "info"} />
    </div>
  );
}
