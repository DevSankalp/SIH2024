import React from "react";
import "./App.css";
import "./index.css";
import Lenis from "@studio-freight/lenis";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
import Engage from "./Pages/Engage";
import Directory from "./Pages/Directory";
import Dashboard from "./Pages/Dashboard";
import Forums from "./Pages/Forums";
import Network from "./Pages/Network";
import Details from "./Pages/Details";
import JobPortal from "./Pages/JobPortal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  return (
    <React.Fragment>
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Directory" element={<Directory />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Edit_Profile" element={<Details />} />
            <Route path="/Engage" element={<Engage />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Forum" element={<Forums />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Network" element={<Network />} />
            <Route path="/Jobs" element={<JobPortal />} />
          </Routes>
        </Router>
      </ParallaxProvider>
      {/* <Sugar
        time={1000}
        animation={"fade"}
        color={"#fff"}
        background={"linear-gradient(45deg, #a1c4fd 0%, #c2e9fb 100%)"}
      /> */}
    </React.Fragment>
  );
}

export default App;
