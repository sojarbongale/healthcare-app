import React, { useEffect } from "react";
import "./PatientInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPatientDetailsAsync } from "../../redux/patient/patientSlice";

const PatientInfo = () => {
  const { patientDetails } = useSelector((state) => state.patient);
  const { upcommingAppointmentsCount, pastAppointmentsCount } = useSelector(
    (state) => state.appointment
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatientDetailsAsync());
  }, []);

  return (
    <div className="row">
      {!patientDetails ? (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 position-absolute bg-transparent">
          <div className="spinner-border text-success " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="col-md-3 card border-0">
            <div style={{ marginTop: "36px" }}>
              <img
                src="img_avatar.png"
                className="card-img-top patient-profile"
                alt="female"
              />
            </div>
            <div className="mt-2">
              <div className="patient-name">
                <span>
                  {`${patientDetails.firstName} ${patientDetails.lastName}`}
                </span>
              </div>
              <div className="patient-email text-center">
                <span> {patientDetails.email}</span>
              </div>
            </div>
            <div className="row mt-3 px-4 justify-content-center">
              <div className="col-md-4 past-appointment-count">
                <div className="row">
                  <div className="patients-records">
                    {pastAppointmentsCount}
                  </div>
                  <div className="patient-record-dtl ">Past</div>
                </div>
              </div>
              <div className="vr p-0 d-none d-lg-block"></div>
              <div className="col-md-4 upcoming-appointment-count">
                <div className="row">
                  <div className="patients-records">
                    {upcommingAppointmentsCount}
                  </div>
                  <div className="patient-record-dtl ">Upcoming</div>
                </div>
              </div>
            </div>
            <div className="send-msg-wrapper">
              <button className="btn btn-outline-dark patient-profile-button w-100">
                <span>Send Message</span>
              </button>
            </div>
          </div>
          <div className="col-md-8 patient-information-wrapper">
            <div className="row patient-bio">
              <div className="col-md-3 patient-data ">
                <div className=" patient-input-label">Gender</div>
                <div className="patient-input-value text-left mt-1">
                  {patientDetails.gender}
                </div>
                <div className="horizontal-rule">
                  <hr />
                </div>
              </div>
              <div className="col-md-3 patient-data">
                <div className=" patient-input-label">Birthday</div>
                <div className="patient-input-value mt-1 ">
                  {patientDetails.dateOfBirth}
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3 patient-data">
                <div className=" patient-input-label">Phone Number</div>
                <div className="patient-input-value mt-1">
                  {patientDetails.phoneNo}
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3 patient-data">
                <div className=" patient-input-label">Registered Date</div>
                <div className="patient-input-value mt-1">
                  {patientDetails.registeredDate}
                </div>
                <div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="row patient-bio">
              <div className="col-md-3 patient-data">
                <div className=" patient-input-label">Street Address</div>
                <div className="patient-input-value mt-1">
                  {patientDetails.address}
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3 patient-data">
                <div className=" patient-input-label">City</div>
                <div className="patient-input-value mt-1">
                  {patientDetails.city}
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3 patient-data">
                <div className=" patient-input-label">Zip Code</div>
                <div className="patient-input-value mt-1">
                  {patientDetails.zipCode}
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3 patient-data">
                <div className=" patient-input-label">Member Status</div>
                <div className="patient-input-value mt-1">
                  {patientDetails.memberStatus}
                </div>
                <div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PatientInfo;
