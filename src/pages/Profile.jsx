import React, { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Pro from "../components/profil/Pro";
import "./Home.css";

const Profile = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="wrapper d-flex flex-column ">
      <Header show={show} setShow={setShow} />
      <div className="d-flex screen">
        <Sidebar show={show} />
        <Pro />
      </div>
    </div>
  );
};

export default Profile;
