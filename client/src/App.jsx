import React from "react";
import Dashboard from "./components/Navbar/Dashboard/Dashboard";
import OverviewCounter from "./OverviewCounter/OverviewCounter";
import OurVision from "./components/Navbar/OurVision/OurVision";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Navbar/Banner/Banner";
import Banner2 from "./components/Navbar/Banner/Banner2";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Foooter/Footer";

const App = () => {
  return (
    <>
      <main className="overflow-hidden dark:bg-gray-900 bg-white">
        <Navbar/>
        <Dashboard />
        <OverviewCounter />
        <OurVision/>
        <Banner/>
        <Banner2/>
        <VideoBanner/>
        <Blogs/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
