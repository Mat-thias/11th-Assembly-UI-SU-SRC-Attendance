document.getElementById("campaignForm").onsubmit = function(event) {
    var securityCode = document.getElementById("securityCode").value;
    var confirmSecurityCode = document.getElementById("confirmSecurityCode").value;
    if (securityCode !== confirmSecurityCode) {
        alert("Security codes do not match!");
        event.preventDefault();
    }
};
