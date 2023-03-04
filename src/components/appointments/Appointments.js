import React from "react";
import "./Appointments.css";
import Treatments from "./Treatments";

const Appointments = () => {
  return (
    <>
      <div className="row">
        <div className="col-9 d-flex appointment-type-wrapper">
          <div className="col-md-4 appointments-type active">
            <span>Upcoming Appointments</span>
          </div>
          <div className="col-md-4 appointments-type">
            <span>Past Appointments</span>
          </div>
          <div className="col-md-4 appointments-type">
            <span>Medical Records</span>
          </div>
        </div>
      </div>
      <div>
        <div className="row appointment-wrapper mt-3">
          <div className="col-md-6 appointments-section-title ">
            <span>Root Canal Treatment</span>
          </div>
          <div className="col-md-6 previous-treatment">
            <span className="appointments-section active">
              Show Previous Treatments
            </span>
          </div>
          <hr />
          <div className="row appointment-data m-0">
            <Treatments />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
