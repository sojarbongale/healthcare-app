import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <Link
        to="/patient"
        className="d-block link-dark text-decoration-none "
        title
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        {<img src="logo80.png" className="w-100" alt="logo" />}
      </Link>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link p-3 mt-4"
            aria-current="page"
            title
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
            <div>Add</div>
          </a>
        </li>
        <li className="nav-item active">
          <a
            href="#"
            className="nav-link p-3 "
            title
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
          >
            <i className="fa fa-user" aria-hidden="true"></i>
            <div>Patient</div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link p-3"
            title
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Orders"
          >
            <i className="fa fa-folder-open" aria-hidden="true"></i>
            <div>Files</div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link p-3"
            title
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Products"
          >
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            <div>Upload</div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link p-3"
            title
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <i className="fa fa-file-text" aria-hidden="true"></i>
            <div>Report</div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link p-3"
            title
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <i className="fa fa-cog" aria-hidden="true"></i>
            <div>Setting</div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link p-3"
            title
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
