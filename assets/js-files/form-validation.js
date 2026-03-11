//window on load

window.addEventListener("load", function () {
    var leadSource = "";

    var externalSource = sessionStorage.getItem("externalSource") || document.getElementById("externalSource").value || "";
    if (externalSource) {
        leadSource = externalSource;
    }
    else {
        // Query parameter check
        var params = new URLSearchParams(window.location.search);
        if (params.get("source") === "direct") {
            leadSource = "Direct";
        } else {
            // Referrer check
            var ref = document.referrer;
            if (ref) {
                var path = new URL(ref).pathname;
                leadSource = pageMap[path] || path; // direct access possible
            }
        }
    }
    // alert(leadSource);
    // Hidden field me set karo
    var field = document.getElementById("leadSource");
    if (field) {
        field.value = leadSource;
    }
});






// validation start
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');

emailField.addEventListener('input', () => {
    document.getElementById('emailVerifyErrorID').innerHTML = '';
    const email = emailField.value.trim();
    if (email !== "") {
        const errorMsg = validateEmail(email);
        document.getElementById('emailError').innerHTML = errorMsg;
    } else {
        document.getElementById('emailError').innerHTML = "";
        document.getElementById('emailVerifyErrorID').innerHTML = '';
    }
});

emailField.addEventListener('blur', () => {

    document.getElementById('emailError').innerHTML = "";
    document.getElementById('emailVerifyErrorID').innerHTML = '';
    const submitBtn = document.getElementById("submitBtnID");
    submitBtn.disabled = true;
    const email = emailField.value.trim();
    verifyEmail().then(isEmailValid => {
        //alert("emailVerifyStatus-->"+emailVerifyStatus);
        document.getElementById('emailVerifyStatus').value = emailVerifyStatus;
        document.getElementById('emailError').innerHTML = "";
        document.getElementById('emailError').innerHTML = "";
        const emailErrorDiv = document.getElementById('emailError');
        if (!isEmailValid && email !== "") {
            emailErrorDiv.innerHTML = "Email address is not valid";
            document.getElementById('emailVerifyErrorID').innerHTML = '<i class="fa-solid fa-xmark text-danger"></i>';

        } else if (isEmailValid && email !== "") {
            document.getElementById('emailVerifyErrorID').innerHTML = '<i class="fa-solid fa-check text-success"></i>';
            submitBtn.disabled = false;

        } else {
            document.getElementById('emailVerifyErrorID').innerHTML = '';
            submitBtn.disabled = false;
        }
    });
});


phoneField.addEventListener('input', () => {
    const phone = phoneField.value.trim();

    const numericOnly = phone.replace(/\D/g, '');
    phoneField.value = numericOnly;

    if (numericOnly !== "") {
        const errorMsg = validatePhone(numericOnly);
        document.getElementById('phoneError').innerHTML = errorMsg;
    } else {
        document.getElementById('phoneError').innerHTML = "";
    }
});
var whitePaperId = 0;


//contact
const input = document.querySelector("#phone");

const iti = window.intlTelInput(input, {
    initialCountry: "us",
    separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js"
});


// Listen for country change event
input.addEventListener("countrychange", function () {
    const dialCode = iti.getSelectedCountryData().dialCode;
    document.getElementById("phoneCountryCode").value = dialCode;
    //const currentVal = input.value.replace(/^\+?\d+/, '').trim(); 
    //input.value ='+'+dialCode+ ' ' +currentVal;
});

// Optional: on initial load if needed
window.addEventListener("load", () => {
    const dialCode = iti.getSelectedCountryData().dialCode;
    document.getElementById("phoneCountryCode").value = dialCode;
    //input.value = '+'+dialCode+' ';
});


// form validation        
function validateForm() {
    let valid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const companyName = document.getElementById('companyName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const digitOnlyPattern = /^\d+$/;

    document.getElementById('firstNameError').innerHTML = "";
    document.getElementById('lastNameError').innerHTML = "";
    document.getElementById('companyError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('phoneError').innerHTML = "";

    if (firstName === "") {
        document.getElementById('firstNameError').innerHTML = "First Name is required.";
        valid = false;
    }

    if (lastName === "") {
        document.getElementById('lastNameError').innerHTML = "Last Name is required.";
        valid = false;
    }

    if (companyName === "") {
        document.getElementById('companyError').innerHTML = "Company Name is required.";
        valid = false;
    }

    const emailError = validateEmail(email);
    if (emailError !== "") {
        document.getElementById('emailError').innerHTML = emailError;
        valid = false;
    }

    const phoneErrorMsg = validatePhone(phone);
    if (phoneErrorMsg !== "") {
        document.getElementById('phoneError').innerHTML = phoneErrorMsg;
        valid = false;
    }

    if (emailError === "") {

        if (!emailValid) {
            document.getElementById('emailError').innerHTML = "Email address is not valid."
            document.getElementById('emailVerifyErrorID').innerHTML = '<i class="fa-solid fa-xmark text-danger"></i>';
            valid = false;
        } else {
            document.getElementById('emailVerifyErrorID').innerHTML = '<i class="fa-solid fa-check text-success"></i>';
        }
    }

    return valid;
}


// verify email        
function verifyEmail() {
    const email = document.getElementById("email").value.trim();
    const statusDiv = document.getElementById("emailError");
    const emailVerifyError = document.getElementById("emailVerifyErrorID");

    if (!email) {
        emailValid = false;
        emailVerifyStatus = "";
        return Promise.resolve(false);
    }

    emailVerifyError.innerHTML = '<i class="fas fa-circle-notch fa-spin" style="color:#1b5b7e;"></i>';

    const domain = email.substring(email.lastIndexOf("@") + 1).toLowerCase();
    // ✅ If not .com, skip API call 
    if (!domain.endsWith(".com")) {
        return new Promise(resolve => {
            setTimeout(() => {
                emailValid = true;
                emailVerifyStatus = "skipped";
                resolve(true);
            }, 2000); // 2 sec ka fake verification delay
        });
    }

    return fetch("/verifyEmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "email=" + encodeURIComponent(email)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success && data.status === "valid") {
                emailValid = true;
                emailVerifyStatus = "valid";
                return true;
            } else {
                emailValid = false;
                emailVerifyStatus = "invalid";
                return false;
            }
        })
        .catch(err => {
            console.error("Error verifying email:", err);
            emailValid = false;
            emailVerifyStatus = "";
            return false;
        });
}
// email validation
const validateEmail = (email) => {
    if (email === "") {
        return "Work Email is required.";
    }
    if (!email.includes('@')) {
        return "Work Email must include '@'.";
    }

    const parts = email.split('@');
    if (parts.length !== 2) {
        return "Work Email format is incorrect.";
    }

    const [local, domain] = parts;

    if (local.length === 0) {
        return "Work Email must have characters before '@'.";
    }

    if (domain.length === 0) {
        return "Work Email must have a domain name after '@'.";
    }

    if (!domain.includes('.')) {
        return "Domain must contain a '.' (dot) like '.com', '.org'.";
    }

    const domainParts = domain.split('.');
    if (domainParts.some(part => part.trim() === "")) {
        return "Domain name is incomplete or invalid.";
    }

    return "";
};

// phone validation
function validatePhone(phone) {
    if (phone === "") {
        return "Phone Number is required.";
    }
    if (!/^\d+$/.test(phone)) {
        return "Phone Number should contain digits only.";
    }
    if (phone.length < 10) {
        return "Phone Number must be at least 10 digits.";
    }
    if (phone.length > 15) {
        return "Phone Number must not exceed 15 digits.";
    }
    return ""; // valid
}

document.addEventListener("DOMContentLoaded", function () {

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("timezone").value = userTimezone;
});



let emailValid = false;
let emailVerifyStatus = "";

const handleSubmitWhitePaperForm = () => {
    if (validateForm()) {
        const formData = {
            firstName: document.getElementById('firstName').value || '',
            lastName: document.getElementById('lastName').value || '',
            email: document.getElementById('email').value || '',
            phone: document.getElementById('phone').value || '',
            companyName: document.getElementById('companyName').value || '',
            leadSource: document.getElementById('leadSource').value || '',
            timezone: document.getElementById('timezone').value || '',
            heading: whitepaper_heading || '',
            fileName: whitepaper_fileName || '',
            emailVerifyStatus: document.getElementById('emailVerifyStatus').value.trim() || '',
            phoneCountryCode: document.getElementById('phoneCountryCode').value.trim() || ''
        };

        fetch('/whitepaperdownloadinsert.php', {
            method: 'POST',
            body: new URLSearchParams(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {

                    const paperId = data.data.customerID;
                    const downloadLink = document.createElement('a');
                    downloadLink.href = `/downloadWhitepaper.php?id=${paperId}`;
                    downloadLink.download = '';
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);

                    setTimeout(() => {
                        window.location.href = `/resources/whitepapers.html?status=success`;
                    }, 1000);

                } else {
                    console.log(data.message);
                    console.error(data.response);
                }

            });

    }
}


const handleSubmitCaseStadiesForm = () => {
    if (validateForm()) {
        const formData = {
            firstName: document.getElementById('firstName').value || '',
            lastName: document.getElementById('lastName').value || '',
            email: document.getElementById('email').value || '',
            phone: document.getElementById('phone').value || '',
            companyName: document.getElementById('companyName').value || '',
            leadSource: document.getElementById('leadSource').value || '',
            timezone: document.getElementById('timezone').value || '',
            heading: whitepaper_heading || '',
            fileName: whitepaper_fileName || '',
            emailVerifyStatus: document.getElementById('emailVerifyStatus').value.trim() || '',
            phoneCountryCode: document.getElementById('phoneCountryCode').value.trim() || ''
        };

        fetch('/casestudydownloadInsert.php', {
            method: 'POST',
            body: new URLSearchParams(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {

                    const paperId = data.data.customerID;
                    const downloadLink = document.createElement('a');
                    downloadLink.href = `/downloadCasestudy.php?id=${paperId}`;
                    downloadLink.download = '';
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);

                    setTimeout(() => {
                        window.location.href = `/resources/casestudies.html?status=success`;
                    }, 1000);

                } else {
                    console.log(data.message);
                    console.error(data.response);
                }

            });

    }
}
