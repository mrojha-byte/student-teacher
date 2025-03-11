function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log("Logged in:", user.user.email);
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}

function logoutUser() {
    auth.signOut().then(() => {
        console.log("User Logged Out");
        window.location.href = "index.html";
    });
}
