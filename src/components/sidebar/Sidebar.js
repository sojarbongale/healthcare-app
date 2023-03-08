import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [activePath, SetActivePath] = useState("patient");
  const location = useLocation();

  useEffect(() => {
    let path = location.pathname.split("/")[1];
    console.log(path);
    SetActivePath(path);
  }, [location.pathname]);

  return (
    <div>
      <Link to="/patient" className="d-block link-dark text-decoration-none">
        <img src="logo80.png" className="w-100 logo" alt="logo" />
      </Link>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li
          className={`nav-item ${
            activePath === "add-new-patient" ? "active" : ""
          }`}
        >
          <Link to="/add-new-patient" className="nav-link p-3">
            <i className="fa fa-plus" aria-hidden="true"></i>
            <div className="link-text">Add</div>
          </Link>
        </li>
        <li
          className={`nav-item ${
            activePath === "" || activePath === "patient" ? "active" : ""
          }`}
        >
          <Link to="/patient" className="nav-link p-3 ">
            <i className="fa fa-user" aria-hidden="true"></i>
            <div className="link-text">Patient</div>
          </Link>
        </li>
        <li
          className={`nav-item ${activePath === "files-data" ? "active" : ""}`}
        >
          <Link to="/files-data" href="#" className="nav-link p-3">
            <i className="fa fa-folder-open" aria-hidden="true"></i>
            <div className="link-text">Files</div>
          </Link>
        </li>
        <li
          className={`nav-item ${activePath === "upload-data" ? "active" : ""}`}
        >
          <Link to="/upload-data" className="nav-link p-3">
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            <div className="link-text">Upload</div>
          </Link>
        </li>
        <li className={`nav-item ${activePath === "report" ? "active" : ""}`}>
          <Link to="/report" className="nav-link p-3">
            <i className="fa fa-file-text" aria-hidden="true"></i>
            <div className="link-text">Report</div>
          </Link>
        </li>
        <li className={`nav-item ${activePath === "setting" ? "active" : ""}`}>
          <Link to="/setting" className="nav-link p-3">
            <i className="fa fa-cog" aria-hidden="true"></i>
            <div className="link-text">Setting</div>
          </Link>
        </li>
        <li
          className="
        "
        >
          <a href="#" className="nav-link p-3">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <div className="link-text">Logout</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
