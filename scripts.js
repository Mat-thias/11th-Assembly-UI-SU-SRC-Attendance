document.getElementById("attendanceForm").onsubmit = function () {
    
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }
    
    const securityCode = document.getElementById("securityCode").value;
    const confirmSecurityCode = document.getElementById("confirmSecurityCode").value;
    if (securityCode !== confirmSecurityCode) {
        showModal("Security codes do not match!");
        return false;
    }
    // More validations here

    const entryChecked = document.getElementById("entry").checked;
    const exitChecked = document.getElementById("exit").checked;
    if (!entryChecked && !exitChecked) {
        alert("Please select whether you are registering for Entry or Exit.");
        return false;
    }

    return true;
};

function showModal(message) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    document.getElementById("modalText").innerText = message;
    
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email.toLowerCase());
}

function resetForm() {
    document.getElementById("attendanceForm").reset();
}

window.onload = resetForm;
