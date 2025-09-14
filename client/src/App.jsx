import React from "react";
import Dashboard from "./components/Navbar/Dashboard/Dashboard";
import OverviewCounter from "./OverviewCounter/OverviewCounter";
import OurVision from "./components/Navbar/OurVision/OurVision";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Navbar/Banner/Banner";

const App = () => {
  return (
    <>
      <main className="overflow-hidden dark:bg-gray-900 bg-white">
        <Navbar/>
        <Dashboard />
        <OverviewCounter />
        <OurVision/>
        <Banner/>
      </main>
    </>
  );
};

export default App;
