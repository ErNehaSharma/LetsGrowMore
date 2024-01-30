function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var branch = document.getElementById("branch").value;
    var contact = document.getElementById("contact").value;

    var displayDataElement = document.getElementById("displayData");
    displayDataElement.innerHTML = "<h2>Submitted from:</h2>" +
        "<p><strong>Full Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Course:</strong> " + course + "</p>" +
        "<p><strong>Branch:</strong> " + branch + "</p>" +
        "<p><strong>Contact:</strong> " + contact + "</p>";

    // Clear the form after displaying data
    document.getElementById("registrationForm").reset();
}
