import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../redux/patient/patientSlice";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});
