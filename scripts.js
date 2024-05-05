document.getElementById("attendanceForm").onsubmit = function () {
    const securityCode = document.getElementById("securityCode").value;
    const confirmSecurityCode = document.getElementById("confirmSecurityCode").value;

    if (securityCode !== confirmSecurityCode) {
        alert("Security codes do not match!");
        return false;
    }

    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    const entryChecked = document.getElementById("entry").checked;
    const exitChecked = document.getElementById("exit").checked;
    if (!entryChecked && !exitChecked) {
        alert("Please select whether you are registering for Entry or Exit.");
        return false;
    }

    return true;
};

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email.toLowerCase());
}

function resetForm() {
    document.getElementById("attendanceForm").reset();
}

window.onload = resetForm;
