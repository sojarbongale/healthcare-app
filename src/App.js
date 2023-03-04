import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Reports from "./components/reports/Reports";
import Patient from "./components/patient/Patient";

function App() {
  return (
    <div className="App">
      <div class="row m-0">
        <div class="col-1 d-flex flex-column flex-shrink-0 sidebar-wrapper">
          <Sidebar />
        </div>
        <div class="col-md-11">
          <Routes>
            <Route path="/patient" element={<Patient />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
