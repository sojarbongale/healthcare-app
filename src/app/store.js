import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../redux/patient/patientSlice";
import appointmentReducer from "../redux/appointment/appointmentSlice";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    appointment: appointmentReducer,
  },
});
