import React, { useEffect, useState } from "react";
import "./Appointments.css";
import Treatments from "./Treatments";
import {
  fetchUpcommingAppointmentsAsync,
  fetchPastAppointmentsAsync,
} from "../../redux/appointment/appointmentSlice";
import { useSelector, useDispatch } from "react-redux";

const Appointments = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("upcomming");
  const [appointments, setAppointments] = useState([]);
  const { upcommingAppointments, pastAppointments } = useSelector(
    (state) => state.appointment
  );
  /* useEffect for fetching appointments */
  useEffect(() => {
    dispatch(fetchUpcommingAppointmentsAsync());
    dispatch(fetchPastAppointmentsAsync());
  }, []);

  useEffect(() => {
    if (upcommingAppointments) {
      setAppointments(upcommingAppointments);
    }
  }, [upcommingAppointments]);

  const fetchAppointmentsHandler = (value) => {
    setFilterValue(value);

    if (value === "upcomming") {
      setAppointments(upcommingAppointments);
    }

    if (value === "past") {
      setAppointments(pastAppointments);
    }
    if (value === "medical") {
      setAppointments([]);
    }
  };

  return (
    <>
      <div className="row appintment-section-wrapper">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <div className="row align-items-center appointment-type-wrapper">
            <div
              className={`col-xs-12 col-sm-12 col-md-12 col-lg-4 appointments-type ${
                filterValue === "upcomming" ? "active" : ""
              }`}
              onClick={() => fetchAppointmentsHandler("upcomming")}
            >
              <span>Upcoming Appointments</span>
            </div>
            <div
              className={`col-xs-12 col-sm-12 col-md-12 col-lg-4 appointments-type ${
                filterValue === "past" ? "active" : ""
              }`}
              onClick={() => fetchAppointmentsHandler("past")}
            >
              <span>Past Appointments</span>
            </div>
            <div
              className={`col-xs-12 col-sm-12 col-md-12 col-lg-4 appointments-type ${
                filterValue === "medical" ? "active" : ""
              }`}
              onClick={() => fetchAppointmentsHandler("medical")}
            >
              <span>Medical Records</span>
            </div>
          </div>
        </div>
      </div>

      {filterValue === "medical" && (
        <div className="row appointment-wrapper mt-3">
          <h5 className="m-0 py-3 medical-record">
            Medical records data comming soon..!
          </h5>
        </div>
      )}

      {filterValue !== "medical" && !appointments && (
        <div className="row appointment-wrapper no-appointment mt-3">
          <h5>Appointments data not available..!</h5>
        </div>
      )}

      {filterValue !== "medical" &&
        appointments &&
        appointments.map((appointment, i) => {
          return (
            <div className="row appointment-wrapper mt-3" key={i}>
              <div className="col-md-6 appointments-section-title ">
                <span>{appointment.appointmenType}</span>
              </div>
              <div className="col-md-6 previous-treatment">
                <span className="appointments-section active">
                  Show Previous Treatments
                </span>
              </div>
              <hr />
              <div className="row appointment-data m-0">
                {appointment.treatments &&
                  appointment.treatments.map((treatment, j) => {
                    return <Treatments data={treatment} key={j} />;
                  })}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Appointments;
