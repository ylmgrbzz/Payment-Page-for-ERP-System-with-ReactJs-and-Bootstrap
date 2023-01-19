import React, { useState } from "react";
import Content from "../components/home/Content";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

import "./Home.css";
const Home = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="wrapper d-flex flex-column ">
      <Header show={show} setShow={setShow} />
      <div className="d-flex screen">
        <Sidebar show={show} />
        <Content />
      </div>
    </div>
  );
};

export default Home;
