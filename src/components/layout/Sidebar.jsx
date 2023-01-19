import { useState } from "react";
import { FaLiraSign, FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

import { Link, useLocation } from "react-router-dom";
import "./Layout.css";
const Sidebar = ({ show }) => {
  const location = useLocation();
  const [finans, setFinans] = useState(false);
  return (
    <div
      className={`sidebar ${
        show === true ? "active" : ""
      } d-flex flex-column gap-2 text-white h-full p-2`}
    >
      <Link
        to=""
        className={`${
          location.pathname === "/" ? "active" : ""
        } d-flex gap-2 link-bg align-items-center  p-2`}
        onClick={() => setFinans(finans === true ? false : true)}
      >
        <AiOutlineArrowDown className="icon arrow-icon2" />
        <FaLiraSign className="iconn" />{" "}
        {show === true ? <span className="text-color">Finans</span> : ""}
      </Link>

      <Link to="/" style={{ textDecoration: "none" }}>
        {finans === true ? (
          <div className="odeme p-2"> - Ödeme İşlemleri</div>
        ) : null}
      </Link>
      <Link
        to="/profile"
        className={`${
          location.pathname === "/profile" ? "active" : ""
        }  d-flex gap-2 link-bg align-items-center p-2`}
      >
        <FaUserAlt className="iconn " />{" "}
        {show === true ? (
          <span className="text-color">Profil Bilgileri</span>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
};

export default Sidebar;
