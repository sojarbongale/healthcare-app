// A mock function to mimic making an async request for data
export function fetchUpcommingAppointments() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            patientId: "123",
            appointmentId: "1",
            appointmentName: "Root Canal Treatment",
            appointmentDate: "26 Feb'23",
            appointmentStatus: "upcomming",
            treatments: [
              {
                treatementDate: "28 Feb ‘23",
                treatementStartTime: "09:00",
                treatementEndTime: "10:00",
                treatementType: "Open Access",
                dentistName: "Drg. Adam H.",
                nurseName: "Jessicamila",
                noteURL: "",
              },
              {
                treatementDate: "26 Feb ‘23",
                treatementStartTime: "09:00",
                treatementEndTime: "10:00",
                treatementType: "Root Canal",
                dentistName: "Drg. Adam H.",
                nurseName: "Jessicamila",
                noteURL: "",
              },
            ],
          },
        ]),
      500
    )
  );
}

export function fetchPastAppointments() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            patientId: "123",
            appointmentId: "1",
            appointmentName: "Root Canal Treatment",
            appointmentDate: "26 Feb'23",
            appointmentStatus: "past",
            treatments: [
              {
                treatementDate: "20 Feb ‘23",
                treatementStartTime: "04:00",
                treatementEndTime: "05:00",
                treatementType: "Open Access",
                dentistName: "Drg. Adam H.",
                nurseName: "Jessicamila",
                noteURL: "",
              },
              {
                treatementDate: "12 Feb ‘23",
                treatementStartTime: "02:00",
                treatementEndTime: "03:00",
                treatementType: "Root Canal",
                dentistName: "Drg. Adam H.",
                nurseName: "Jessicamila",
                noteURL: "",
              },
              {
                treatementDate: "07 Feb ‘23",
                treatementStartTime: "11:00",
                treatementEndTime: "12:30",
                treatementType: "Checkup",
                dentistName: "Drg. Adam H.",
                nurseName: "Jessicamila",
                noteURL: "",
              },
            ],
          },
        ]),
      500
    )
  );
}
