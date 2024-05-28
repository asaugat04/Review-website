import Navbar from "./components/Navbar";
import ReviewViewer from "./components/ReviewViewer";
import ReviewsPage from "./components/ReviewsPage";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [activeTab, changeActiveTab] = useState("company");
  return (
    <div className="App">
      <Navbar />
      <div className="Reviewpage mt-4 m-0">
        <ReviewViewer changeActiveTab={changeActiveTab} activeTab={activeTab} />
        <ReviewsPage activeTab={activeTab} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
