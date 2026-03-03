
//// track VPN start


//// track VPN start

if (!window.__vpnChecked) {
	window.__vpnChecked = true;

	document.addEventListener("DOMContentLoaded", async () => {
		try {
			// Step 1: Get the real public IP of the user
			const ipRes = await fetch("https://api.ipify.org?format=json");
			const ipData = await ipRes.json();
			const clientIp = ipData.ip;

			console.log("Client Public IP:", clientIp);

			// Step 2: Send IP to PHP backend
			const vpnRes = await fetch(`/assets/php-files/vpn.php?ip=${clientIp}`);
			const data = await vpnRes.json();

			console.log("IPQS Data:", data);

			if (data.error) {
				console.error("Backend error:", data.message);
				let body = document.getElementsByTagName("body");
				body[0].classList.remove("d-none");
				body[0].classList.remove("page-hidden");
				return;
			}

			// Step 3: VPN/Proxy/Tor detection logic
			const isVpnUser =
				data.active_vpn === true ||
				data.tor === true ||
				(data.vpn === true && data.fraud_score > 75);

			console.log("Is VPN User:", isVpnUser);

			if (isVpnUser) {
				// alert("VPN / Proxy detected!");
				// window.location.href = '/vpn.html'; // optional redirect
				let body = document.getElementsByTagName("body");
				body[0].classList.remove("d-none");
				body[0].classList.remove("page-hidden");
				body[0].innerHTML = `
                    <div class="vpn_body">
                        <div class="vpn_card">
                            <p>
                                Looks like you are connecting through a VPN, proxy or "unblocker" service.
                                Please turn off any of these services and try again.
                            </p>
                            <button class="vpn_btn" onclick="location.reload()">Retry</button>
                            <img src="../" alt="" srcset="">
                        </div>
                    </div>
                    `

			} else {
				let body = document.getElementsByTagName("body");
				body[0].classList.remove("d-none");
				body[0].classList.remove("page-hidden");
			}

		} catch (err) {
			let body = document.getElementsByTagName("body");
			body[0].classList.remove("d-none");
				body[0].classList.remove("page-hidden");
			console.error("Fetch error:", err);
		}
	});
}

//// track VPN end

//// track VPN end









document.addEventListener("DOMContentLoaded", function () {
  // Password eye script start
  const logPasswordInput = document.getElementById("logInputPassword");
  const logPassEye = document.getElementById("logPassEye");

  if (logPasswordInput && logPassEye) {
    logPassEye.addEventListener("click", function () {
      if (logPasswordInput.type === "password") {
        logPasswordInput.type = "text";
        logPassEye.classList.remove("bi-eye-fill");
        logPassEye.classList.add("bi-eye-slash-fill");
      } else {
        logPasswordInput.type = "password";
        logPassEye.classList.remove("bi-eye-slash-fill");
        logPassEye.classList.add("bi-eye-fill");
      }
    });
  }
  // Password eye script end

  // Comman header link
  const navLinks = document.querySelectorAll("#navbarNav .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Initialize all tooltips on the page
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  handleScheduleDemo();

  const phoneInputs = document.querySelectorAll(".phone-input");

  if (phoneInputs.length === 0) return; 

  phoneInputs.forEach(function (input) {

    const iti = window.intlTelInput(input, {
      initialCountry: "us",
      separateDialCode: true,
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js"
    });

    const hiddenId = input.getAttribute("data-country-code-id");

    function setDialCode() {
      const dialCode = iti.getSelectedCountryData().dialCode;
      if (hiddenId && document.getElementById(hiddenId)) {
        document.getElementById(hiddenId).value = dialCode;
      }
    }

    input.addEventListener("countrychange", setDialCode);

    setDialCode();
  });

});

function showSuccessMessage_NL(message) {
	var processSuccessDiv = document.getElementById("flashSuccessMsg_id");
	if (processSuccessDiv == undefined) {
		createSuccessDivNL();
		processSuccessDiv = document.getElementById("flashSuccessMsg_id");
	}else{
	addBackdrop();
}
	document.getElementById("flashSuccessMsgData_id").innerHTML = message;
	showProcessMessageNL(processSuccessDiv,'successLoaderModal');
}

function createSuccessDivNL() {
//	var path = imgPath + "successMessage.png";
	var processSuccessDiv = document.createElement("div");
	processSuccessDiv.className = "flashSuccessMsg";
	processSuccessDiv.id = "flashSuccessMsg_id";
	// processSuccessDiv.innerHTML = "<img src=\"images/successicon.jpg\"
	// align=\"middle\" style=\"float:left; padding-right:5px;\"><DIV
	// id=\"flashSuccessMsgData_id\"></DIV>";
	// align=\"middle\" style=\"float:left; padding-right:5px;\"
	processSuccessDiv.innerHTML = '<div class="modal fade" id="successLoaderModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false"><div class="modal-dialog modal-dialog-centered"><div class="modal-content text-center "><div class="modal-body ">'
                			+'<div class="row align-items-center"><div class="col-2"><img src="/assets/images/Successful.png" style="width:43px"/></div>'
                			+'<div class="col-10 fs_15_fw_600_c_1313" style="padding-left: 0px;" id="flashSuccessMsgData_id"></div></div>  </div></div></div></div>';
	document.body.appendChild(processSuccessDiv);
	var loaderModal = new bootstrap.Modal(document.getElementById('successLoaderModal'), {});
		//document.querySelector('.modal-backdrop').classList.add('show');
            loaderModal.show();
}

function addBackdrop() {
    var backdropDiv = document.createElement('div');
    backdropDiv.className = 'modal-backdrop fade show'; // Ensure correct Bootstrap classes
    document.body.appendChild(backdropDiv);
}

function showProcessMessageNL(flashMsgDivObj,modalId) {
	needToShowNote = false;
	flashMsg_idObj = flashMsgDivObj;

	this.flashMsg_idObj.style.zIndex = 9999999;
	this.flashMsg_idObj.style.position = "absolute";
	this.flashMsg_idObj.style.alignself = "center";

	 confirm_interval = setTimeout(() => {
        autoHideConfirmMessageNL(modalId);
    }, 3500);


	var topOffset = Math.max(document.body.scrollTop,
			document.documentElement.scrollTop);
	var brSize = getBrowserSize();
	var bodyWidth = brSize[0];
	var bodyHeight = brSize[1];
	flashMsg_idObj.style.display="block";
	var tmpWidth = this.flashMsg_idObj.clientWidth?this.flashMsg_idObj.clientWidth: this.flashMsg_idObj.offsetWidth;
	var tmpHeight = this.flashMsg_idObj.clientHeight? this.flashMsg_idObj.clientHeight: this.flashMsg_idObj.offsetHeight;
	// Setting width and height of left transparent div

	var leftPoint = ((bodyWidth / 2) - (tmpWidth / 2));
	//alert("leftPoint=" + leftPoint);
	flashMsg_idObj.style.left = leftPoint + 'px';
	flashMsg_idObj.style.top = (Math.ceil((bodyHeight - tmpHeight) / 2) + topOffset)+ 'px';
	flashMsg_idObj.style.display = "block";

}

function autoHideConfirmMessageNL(modalId) {
	needToShowNote = true;
	flashMsg_idObj.style.display = "none";
	 var loaderModal = new bootstrap.Modal(document.getElementById(modalId), {});
  
	   loaderModal.hide();
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
setTimeout(() => {
  document.body.classList.remove('modal-open');
   if(modalId === "sendLoaderModal"){
		document.body.style.overflow = 'auto';
   }
  //document.body.style.overflow = 'auto';
}, 300);
	clearInterval(confirm_interval);
}

getBrowserSize = function() {
	// var bodyWidth = document.documentElement.clientWidth;
	// var bodyHeight = document.documentElement.clientHeight;
	var bodyWidth, bodyHeight;
	if (self.innerHeight) { // all except Explorer
		bodyWidth = self.innerWidth;
		bodyHeight = self.innerHeight;
	} else if (document.documentElement
			&& document.documentElement.clientHeight) {
		// Explorer 6 Strict Mode
		bodyWidth = document.documentElement.clientWidth;
		bodyHeight = document.documentElement.clientHeight;
	} else if (document.body) {// other Explorers
		bodyWidth = document.body.clientWidth;
		bodyHeight = document.body.clientHeight;
	}
	return [bodyWidth, bodyHeight];
}


// schedule a demo work start from here
const handleScheduleDemo = (el) => {

    const scheduleDemoForm = document.querySelector('.schedule_demo_form');
    if (!scheduleDemoForm) {
        return; 
    }

        scheduleDemoForm.innerHTML = `
            <div class="row gx-4 gy-2">
               
                <div class="col-sm-6 col-xxl-4">
                    <label>Full Name <span class="text-danger">*</span></label>
                    <input type="text" id="df_fullName" class="form-control" placeholder="Full Name">
                    <div><div style="color:red;font-size:12px;margin-top:2px;" id="df_fNameError"></div></div>
                </div>

                <div class="col-sm-6 col-xxl-4">
                    <label>Work Email <span class="text-danger">*</span></label>
                    <input type="email" id="df_Email" oninput="emailBoxValidate();" class="form-control" placeholder="Work Email">
                    <div><div style="color:red;font-size:12px;margin-top:2px;" id="df_emailError"></div></div>
                </div>

                <div class="col-sm-6 col-xxl-4">
                    <div class="input-group">
                        <label>Phone Number <span class="text-danger">*</span></label>
                        <input type="hidden" id="phoneCountryCode1" name="phoneCountryCode" />
                        <input type="tel" class="form-control phone-input" data-country-code-id="phoneCountryCode1" oninput="phoneValidation();" id="df_phone" maxLength="15" name="phone" placeholder="Phone Number" />
                        <div><div style="color:red;font-size:12px;margin-top:2px;" id="df_phoneError"></div></div>
                    </div>
                </div>
            </div>
        `;
        


};


 // demo form submit work start
      

        function demoForm_submit_popup(scheduleDemoForm)
        {
            if(validateDemoForm())
            {
                const formData = {
                    fullName: document.getElementById('df_fullName').value || '',
                    email: document.getElementById('df_Email').value || '',
                    phone: document.getElementById('df_phone').value || '',
                    timezone: document.getElementById('df_timezone').value || '',
                    formLoadedAt: document.getElementById('df_loaded_at').value || '',
                    phoneCountryCode: document.getElementById('phoneCountryCode1').value || ''
                    
                };
                console.log(formData);
                const params = new URLSearchParams();
                Object.keys(formData).forEach(key => {
                    if (Array.isArray(formData[key])) {
                        formData[key].forEach(val => {
                            params.append(key + "[]", val);
                        });
                    } else {
                        params.append(key, formData[key]);
                    }
                });

                  fetch('/ScheduleDemoFormInsert.php', {
                     method: 'POST',
                      body: params
                  })
                  .then(res => res.json())
                  .then(data => {
                      if (data.status === 'success') {
                           window.location.href = "/schedule-a-demo.html?name="+document.getElementById('df_fullName').value+"&email="+document.getElementById('df_Email').value;
                           
                      }
                  });
                


                
                //closePopup();

               

            }
        }


        function validateDemoForm() {
            let valid = true;
            
            const df_fullName = document.getElementById('df_fullName').value.trim();
            const df_Email = document.getElementById('df_Email').value.trim();
            const df_phone = document.getElementById('df_phone').value.trim();


            document.getElementById('df_fNameError').innerHTML = "";
            document.getElementById('df_emailError').innerHTML = "";
            document.getElementById('df_phoneError').innerHTML = "";

            if (df_fullName === "") {
                document.getElementById('df_fNameError').innerHTML = "Full Name is required.";
                valid = false;
            }

            
            const df_emailError = validatePopupEmail(df_Email);
            if (df_emailError !== "") {
            document.getElementById('df_emailError').innerHTML = df_emailError;
            valid = false;
            }

            const phoneErrorMsg = validateDemoPhone(df_phone);
            if (phoneErrorMsg !== "") {
                document.getElementById('df_phoneError').innerHTML = phoneErrorMsg;
                valid = false;
            }

        return valid;
        }
        function emailBoxValidate()
        {
            const df_emailField = document.getElementById('df_Email');
            const email = df_emailField.value.trim();
            if (email !== "") {
                const errorMsg = validatePopupEmail(email);
                document.getElementById('df_emailError').innerHTML = errorMsg;
            } else {
                document.getElementById('df_emailError').innerHTML = "";
            }
          
        }

        function phoneValidation()
        {
            const df_phonefield = document.getElementById('df_phone');
            const phone = df_phonefield.value.trim();

            const numericOnly = phone.replace(/\D/g, '');
            df_phonefield.value = numericOnly;

            if (numericOnly !== "") {
                const errorMsg = validateDemoPhone(numericOnly);
                document.getElementById('df_phoneError').innerHTML = errorMsg;
            } else {
                document.getElementById('df_phoneError').innerHTML = "";
            }
        }

        function validateDemoPhone(phone) {

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

// schedule a demo work End here