import React from "react";
import PatientDocuments from "./PatientDocuments";
import PatientInfo from "./PatientInfo";
import "./PatientDocuments.css";
import Appointments from "../appointments/Appointments";

const Patient = () => {
  return (
    <div>
      <PatientInfo />
      <div className="row">
        <div className="col-md-3">
          <PatientDocuments />
        </div>
        <div className="col-md-8 section-wrapper">
          <Appointments />
        </div>
      </div>
    </div>
  );
};

export default Patient;
