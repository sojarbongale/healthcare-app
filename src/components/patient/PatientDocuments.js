import React from "react";
import "./PatientDocuments.css";

const PatientDocuments = () => {
  return (
    <>
      <div className="patient-report-header ms-4">Files / Documents</div>
      <div className="patient-report-file-wrapper mb-2 ms-4">
        <span>
          <i class="fa-solid fa-file-lines"></i>
        </span>
        <span className=" patient-report-file-name ms-2">
          Check Up Results.pdf{" "}
        </span>
      </div>
      <div className="patient-report-file-wrapper mb-2 ms-4">
        <span>
          <i class="fa-solid fa-file-lines"></i>
        </span>
        <span className=" patient-report-file-name ms-2">
          Check Up Results.pdf
        </span>
      </div>
      <div className="patient-report-file-wrapper mb-2 ms-4">
        <span>
          <i class="fa-solid fa-file-lines"></i>
        </span>
        <span className=" patient-report-file-name ms-2">
          Medical Prescription.pdf
        </span>
      </div>
      <div className="patient-report-file-wrapper mb-2 ms-4">
        <span>
          <i class="fa-solid fa-file-lines"></i>
        </span>
        <span className="patient-report-file-name ms-2">
          Dental X-Ray Result.pdf
        </span>
      </div>
    </>
  );
};

export default PatientDocuments;
