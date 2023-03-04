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
        <div class="col-md-3">
          <PatientDocuments />
        </div>
        <div
          class="col-md-8"
          style={{ marginLeft: "40px", marginTop: "-58px" }}
        >
          <Appointments />
        </div>
      </div>
    </div>
  );
};

export default Patient;
