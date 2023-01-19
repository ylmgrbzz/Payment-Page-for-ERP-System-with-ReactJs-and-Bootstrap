import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";

import "./Layout.css";
import { Link } from "react-router-dom";
const Header = ({ show, setShow }) => {
  const [log, setLog] = useState(true);
  return (
    <div className="header d-flex justify-content-between align-items-center py-0 px-2">
      <div className="d-flex align-items-center  gap-5">
        <Link to="/" style={{ textDecoration: "none", color: "#212529" }}>
          <div className="logo  ">
            <span className="logo-green">[</span>
            <span className="logo-text text-center">ProEntegre</span>
            <span className="logo-green">]</span>
          </div>
        </Link>
      </div>
      <div
        onClick={() => setShow(show === true ? false : true)}
        className="hamburger-menu border-start border-end d-flex align-items-center justify-content-center px-2 "
      >
        <GiHamburgerMenu />
      </div>
      <div className="header-text position-relative">
        Yerinde Teknoloji Bilg.Yaz. Ve Dan.Hizm.Dış.Tic.Lt{" "}
        <AiOutlineArrowDown
          className="icon arrow-icon"
          onClick={() => setLog(log === true ? false : true)}
        />
        <span
          className="logo icon arrow-icon"
          onClick={() => setLog(log === true ? false : true)}
        >
          <img className="image" src="/images/logo.jpg" alt="" />
        </span>
        <div
          className={`${
            log === true ? "d-flex" : "d-none"
          } bg-white position-absolute end-0 top-100 p-3 z-3  flex-column`}
        >
        <Link to="/profile" style={{ textDecoration: "none" , color: "#868ba1" }} >
        
        <div className="d-flex gap-2 align-items-center">
        <AiOutlineUser className="icon" />
        Profil
        </div>
        </Link>
        <div className="d-flex gap-2 align-items-center">
            <FiLogOut className="icon" />
            Çıkış Yap
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
