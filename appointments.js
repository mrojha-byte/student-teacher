function bookAppointment() {
    let teacherId = document.getElementById("teacher-id").value;
    let appointmentTime = document.getElementById("appointment-time").value;
    let message = document.getElementById("message").value;
    let studentId = auth.currentUser.uid;

    db.collection("appointments").add({
        studentId: studentId,
        teacherId: teacherId,
        date: appointmentTime,
        message: message,
        status: "pending"
    })
    .then(() => console.log("Appointment booked"))
    .catch(error => console.error("Error:", error));
}

function fetchAppointments() {
    db.collection("appointments").where("studentId", "==", auth.currentUser.uid)
        .onSnapshot(snapshot => {
            document.getElementById("appointments-list").innerHTML = "";
            snapshot.forEach(doc => {
                let appointment = doc.data();
                document.getElementById("appointments-list").innerHTML += `<li>${appointment.date} - ${appointment.message} [${appointment.status}]</li>`;
            });
        });
}
