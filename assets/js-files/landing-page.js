const pageMapForSourceLP = {
    "/services/procurement-spend-analysis-services.html": "Spend Analysis",
    "/services/rfp-managed-services.html": "Managed RFX",
    "/services/managed-reverse-auction-software-services.html": "Managed Reverse Auctions",
    "/industries/procurement-software-for-transport-logistics-industry.html": "Logistics Sector",
    "/industries/procurement-software-for-healthcare-industry.html": "Healthcare Sector",
    "/industries/procurement-software-for-automotive-companies.html": "Automotive Sector",
    "/industries/procurement-software-for-manufacturing-industry.html": "Manufacturing Sector",
    "/industries/procurement-software-for-food-beverage-industry.html": "Food & Beverage Sector",
    "/industries/procurement-software-for-biotech-pharma.html": "BioTech & Pharma Sector",
    "/industries/procurement-software-for-energy-brokers-suppliers.html": "Energy Brokers & Suppliers Sector",
    "/industries/construction-&-real-estate-procurement-software.html": "Construction & Real Estate Sector",
    "/solutions/best-rfp-software-streamline-souring-&-supplier-selection-procureclix.html": "RFX",
    "/solutions/procurement-spend-analysis-software.html": "Solutions | Spend Analysis",
    "/solutions/best-reverse-auction-software.html": "Reverse Auction",
    "/solutions/custom-auction-procurement-software.html": "Custom Solutions",
    "/solutions/purchase-requisition-software.html": "Purchase Requisition",
    "/solutions/best-supplier-management-software.html": "Supplier Management",
    "/solutions/procurement-contract-management-software.html": "Contract Management",
    "/solutions/best-procure-to-pay-software-solutions.html": "Procure To Pay",
    "/blog/": "Blog",
    "/resources/integration.html": "Integration",
    "/resources/guide.html": "Procurement Guide",
    "/resources/glossary.html": "Procurement Glossary",
    "/resources/procurement-conferences.html": "Procurement Conferences",
    "/resources/whitepapers.html": "Whitepaper Page",
    "/resources/whitepapers/whitepapers-description.html": "Download Whitepaper",
    "/resources/casestudies.html": "Case Study",
    "/resources/casestudies/view-case-studies-medical-university-of-south-carolina-MUSC.html": "Case Study",
    "/resources/casestudies/view-case-studies-leading-financial.html": "Case Study",
    "/resources/casestudies/view-case-studies-leading-marketing-services.html": "Case Study",
    "/resources/casestudies/view-case-studies-leading-pharmacy.html": "Case Study",
    "/resources/casestudies/view-case-studies-leading-subsea-systems.html": "Case Study",
    "/resources/casestudies/view-case-studies-leading-services-company.html": "Case Study",
    "/resources/casestudies/housing-and-urban-development-case-study.html": "Case Study",
    "/resources/casestudies/contact-us.html": "Case Study",
};

document.addEventListener("DOMContentLoaded", async () => {
    await handleLandingPageForm();

    const inputs = document.querySelectorAll(".phone_field");

    inputs.forEach(input => {

        const iti = window.intlTelInput(input, {
            initialCountry: "us",
            separateDialCode: true,
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js"
        });

        function setDialCode() {

            let form = input.closest(".landing_demo_form"); // 🔥 current form
            let hidden = form.querySelector('[name="phoneCountryCode"]');

            if (hidden) {
                hidden.value = iti.getSelectedCountryData().dialCode;
            }
        }

        input.addEventListener("countrychange", setDialCode);

        setDialCode(); // initial set
    });



});

function handleLandingPageForm() {
    const landingDemoForm = document.querySelectorAll('.landing_demo_form');
    if (!landingDemoForm) {
        return;
    }

    landingDemoForm.forEach((form, index) => {

        const isLast = index === landingDemoForm.length - 1;
        const errorColor = isLast ? "white" : "red";

        const path = window.location.pathname;
        const isReverseAuction = path.includes("/transport-freight-&-logistics.html");

        form.innerHTML = `
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="">
                        <label for="exampleInputEmail1" class="form-label">Full Name 
                        <span class="text-danger">*</span></label>
                        <input type="email" class="form-control lp_fullName" aria-describedby="emailHelp" placeholder="Full Name">
                        <div><div style="color:${errorColor};font-size:12px;margin-top:2px;" class="lp_fNameError"></div></div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="">
                    <label for="exampleInputEmail1" class="form-label">Work Email <span class="text-danger">*</span></label>
                    <input type="email" class="form-control lp_Email" oninput="emailBoxValidateLP(this);" aria-describedby="emailHelp" placeholder="Work Email">
                    <div><div style="color:${errorColor};font-size:12px;margin-top:2px;" class="lp_emailError"></div></div>
                </div>

                </div>
                <div class="col-12 col-md-6 col-xl-4">
                    <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                    <div class="input-group">
                        <input type="hidden" id="phoneCountryCode1" name="phoneCountryCode" />
                        <input type="tel" class="form-control phone-input phone_field lp_phone" data-country-code-id="phoneCountryCode1" oninput="phoneValidationLP(this);" maxLength="15" name="phone" placeholder="Phone Number" />
                        <div><div style="color:${errorColor};font-size:12px;margin-top:2px;" class="lp_phoneError" ></div></div>
                    </div>
                </div>


                <div class="col-12 mt-4">

                    <div class="d-flex justify-content-center mb-1 h-100 align-items-end gap-4">

                        <button class="btn book_btn"
                                style="min-width: ${isReverseAuction ? 'auto' : '220px'};" 
                                onclick="landingForm_submit_popup(this);">Book now</button>
                        ${isReverseAuction ?
                            `<button 
                                class="btn ${isLast ? 'book_btn' : 'out_line_btn'}" 
                                style="min-width: ${isReverseAuction ? 'auto' : '220px'};"
                                 onclick="routeContactUs()">Contact us</button>`
                        : ''}
                    </div>
                </div>
                 
    `;
    });


}

const routeContactUs = () => {
    window.location.href = "/contact-us.html"
}

function landingForm_submit_popup(btn) {

    let form = btn.closest(".landing_demo_form");

    if (validateDemoFormLP(form)) {

        const currentPath = window.location.pathname;
        const demoSource = pageMapForSourceLP[currentPath] ?? currentPath;

        const formData = {
            fullName: form.querySelector('.lp_fullName').value || '',
            email: form.querySelector('.lp_Email').value || '',
            phone: form.querySelector('.lp_phone').value || '',
            timezone: document.getElementById('lp_timezone').value || '',
            formLoadedAt: document.getElementById('lp_loaded_at').value || '',
            phoneCountryCode: form.querySelector('[name="phoneCountryCode"]').value || '',
            leadSource: demoSource
        };

        console.log(formData);

        const params = new URLSearchParams();
        Object.keys(formData).forEach(key => {
            params.append(key, formData[key]);
        });

        fetch('/ScheduleDemoFormInsert.php', {
            method: 'POST',
            body: params
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    window.location.href = "/schedule-a-demo.html?name="
                        + formData.fullName + "&email=" + formData.email;
                }
            });
    }
}

function validateDemoFormLP(form) {

    let valid = true;

    let name = form.querySelector('.lp_fullName').value.trim();
    let email = form.querySelector('.lp_Email').value.trim();
    let phone = form.querySelector('.lp_phone').value.trim();

    // reset errors
    form.querySelector('.lp_fNameError').innerHTML = "";
    form.querySelector('.lp_emailError').innerHTML = "";
    form.querySelector('.lp_phoneError').innerHTML = "";

    if (name === "") {
        form.querySelector('.lp_fNameError').innerHTML = "Full Name is required.";
        valid = false;
    }

    const emailError = validateEmailLP(email);
    if (emailError !== "") {
        form.querySelector('.lp_emailError').innerHTML = emailError;
        valid = false;
    }

    const phoneError = validateDemoPhoneLP(phone);
    if (phoneError !== "") {
        form.querySelector('.lp_phoneError').innerHTML = phoneError;
        valid = false;
    }

    return valid;
}

function emailBoxValidateLP(input) {

    let form = input.closest(".landing_demo_form");
    let email = input.value.trim();

    let errorBox = form.querySelector('.lp_emailError');

    if (email !== "") {
        errorBox.innerHTML = validateEmailLP(email);
    } else {
        errorBox.innerHTML = "";
    }
}

function phoneValidationLP(input) {

    let form = input.closest(".landing_demo_form");

    let numericOnly = input.value.replace(/\D/g, '');
    input.value = numericOnly;

    let errorBox = form.querySelector('.lp_phoneError');

    if (numericOnly !== "") {
        errorBox.innerHTML = validateDemoPhoneLP(numericOnly);
    } else {
        errorBox.innerHTML = "";
    }
}


const validateEmailLP = (email) => {
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


function validateDemoPhoneLP(phone) {

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
    return "";

}