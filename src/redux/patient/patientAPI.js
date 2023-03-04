// A mock function to mimic making an async request for data
export function fetchPatientDetails() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          patientId: "11",
          firstName: "Diane",
          lastName: "Cooper",
          email: "diane.cooper@example.com",
          gender: "Female",
          dateOfBirth: "Feb 24th, 1997",
          phoneNo: "(239) 555 -0108",
          registeredDate: "Feb 24th, 1997",
          address: "JL. Diponegoro No. 21",
          city: "Cilacap",
          zipCode: "655849",
          memberStatus: "Active Member",
        }),
      500
    )
  );
}
