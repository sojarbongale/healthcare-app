import React from "react";

const Treatments = ({ data }) => {
  return (
    <div className="col-12 d-flex bg-white mb-3">
      <div className="col-md-2 patient-appointment-data ">
        <div className="patient-appointment-dtl text-left mt-2">
          {data.treatementDate}
        </div>
        <div className="patient-appointment-time mb-3">
          {data.treatementStartTime} - {data.treatementEndTime}
        </div>
      </div>
      <div
        className="vr mt-4 d-none d-md-block d-lg-block"
        style={{ height: "35px" }}
      ></div>
      <div className="col-md-2 patient-treatment-data">
        <div className="patient-treatment-head mt-3">Treatment</div>
        <div className="patient-treatment-typeName text-left mb-3">
          {data.treatementType}
        </div>
      </div>
      <div
        className="vr mt-4 d-none d-md-block d-lg-block"
        style={{ height: "35px" }}
      ></div>
      <div className="col-md-3 patient-treatment-data ">
        <div className="patient-treatment-head mt-3">Dentist</div>
        <div className="patient-treatment-typeName text-left mb-3">
          {data.dentistName}
        </div>
      </div>
      <div className="col-md-3 patient-treatment-data ">
        <div className="patient-treatment-head mt-3">Nurse</div>
        <div className="patient-treatment-typeName text-left mb-3">
          {data.nurseName}
        </div>
      </div>
      <div className="col-md-1 patient-treatment-data note-wrapper d-flex justify-content-center align-items-center">
        <div className="patient-treatment-notes ">
          <a href={data.noteURL} className="text-decoration-none text-dark">
            <span>
              <i className="fa-solid fa-file-lines"></i>
            </span>
            <span className="patient-report-file-name ms-2 ">Note</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
