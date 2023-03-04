import React from "react";

const Treatments = () => {
  return (
    <div className="col-12 d-flex bg-white mb-3">
      <div className="col-md-2 patient-appointment-data ">
        <div className="patient-appointment-dtl text-left mt-2">26 Nov ‘19</div>
        <div className="patient-appointment-time mb-3">09.00 - 10.00</div>
      </div>
      <div class="vr mt-4" style={{ height: "35px" }}></div>
      <div className="col-md-2 patient-treatment-data ">
        <div className="patient-treatment-head mt-3">Treatment</div>
        <div className="patient-treatment-typeName text-left mb-3">
          Open Access
        </div>
      </div>
      <div class="vr mt-4" style={{ height: "35px" }}></div>
      <div className="col-md-3 patient-treatment-data ">
        <div className="patient-treatment-head mt-3">Dentist</div>
        <div className="patient-treatment-typeName text-left mb-3">
          Drg. Adam H.
        </div>
      </div>
      <div className="col-md-3 patient-treatment-data ">
        <div className="patient-treatment-head mt-3">Nurse</div>
        <div className="patient-treatment-typeName text-left mb-3">
          Jessicamila
        </div>
      </div>
      <div className="col-md-1 patient-treatment-data d-flex justify-content-center align-items-center">
        <div className="patient-treatment-notes ">
          <span>
            <i class="fa-solid fa-file-lines"></i>
          </span>
          <span className=" patient-report-file-name ms-2 ">Note</span>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
