import React from "react";
import "./PatientInfo.css";
const PatientInfo = () => {
  return (
    <div className="row">
      <div class="col-3 card border-0">
        <div className="mb-3" style={{ marginTop: "36px" }}>
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            class="card-img-top patient-profile"
            alt="female"
          />
        </div>
        <div className="mt-3">
          <div className="patient-name">
            <span> Diane Cooper</span>
          </div>
          <div className="patient-email text-center">
            <span> diane.cooper@example.com</span>
          </div>
        </div>
        <div class="row mt-3 px-4 justify-content-center">
          <div class="col-md-4">
            <div className="row">
              <div className="patients-records">15</div>
              <div className="patient-record-dtl ">past</div>
            </div>
          </div>
          <div class="vr p-0"></div>
          <div class="col-md-4">
            <div className="row">
              <div className="patients-records">15</div>
              <div className="patient-record-dtl ">Upcomming</div>
            </div>
          </div>
        </div>
        <div className="send-msg-wrapper">
          <button className="btn btn-outline-dark patient-profile-button w-100">
            <span>Send Message</span>
          </button>
        </div>
      </div>
      <div class="col-md-8 patient-information-wrapper">
        <div className="row patient-bio">
          <div className="col-md-3 patient-data ">
            <div className=" patient-input-label">Gender</div>
            <div className="patient-input-value text-left mt-1">Female</div>
            <div className="horizontal-rule">
              <hr />
            </div>
          </div>
          <div className="col-md-3 patient-data">
            <div className=" patient-input-label">Birthday</div>
            <div className="patient-input-value mt-1 ">Feb 24th, 1997</div>
            <div>
              <hr />
            </div>
          </div>
          <div className="col-md-3 patient-data">
            <div className=" patient-input-label">Phone Number</div>
            <div className="patient-input-value mt-1">(239) 555 -0108</div>
            <div>
              <hr />
            </div>
          </div>
          <div className="col-md-3 patient-data">
            <div className=" patient-input-label">Registered Date</div>
            <div className="patient-input-value mt-1">Feb 24th, 1997</div>
            <div>
              <hr />
            </div>
          </div>
        </div>
        <div className="row patient-bio">
          <div className="col-md-3 patient-data">
            <div className=" patient-input-label">Street Address</div>
            <div className="patient-input-value mt-1">
              JL. Diponegoro No. 21
            </div>
            <div>
              <hr />
            </div>
          </div>
          <div className="col-md-3 patient-data">
            <div className=" patient-input-label">City</div>
            <div className="patient-input-value mt-1">Cilacap</div>
            <div>
              <hr />
            </div>
          </div>
          <div className="col-md-3 patient-data">
            <div className=" patient-input-label">Zip Code</div>
            <div className="patient-input-value mt-1">655849</div>
            <div>
              <hr />
            </div>
          </div>
          <div className="col-md-3 patient-data">
            <div className=" patient-input-label">Member Status</div>
            <div className="patient-input-value mt-1">Active Member</div>
            <div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
