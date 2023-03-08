import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Patient from "./components/patient/Patient";
import AddNewPatient from "./components/patient/AddNewPatient";
import Files from "./components/files/Files";
import Upload from "./components/upload/Upload";
import Setting from "./components/setting/Setting";
import Report from "./components/report/Report";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row m-0">
        <div className="col-md-1 col-sm-12 col-xs-12 d-flex flex-column flex-shrink-0 sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-xs-12  col-md-11 ">
          <Routes>
            <Route path="/" element={<Patient />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/add-new-patient" element={<AddNewPatient />} />
            <Route path="/files-data" element={<Files />} />
            <Route path="/upload-data" element={<Upload />} />
            <Route path="/report" element={<Report />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
