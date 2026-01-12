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
});

function showSuccessMessage_NL(message) {
	var processSuccessDiv = document.getElementById("flashSuccessMsg_id");
	if (processSuccessDiv == undefined) {
		createSuccessDivNL();
		processSuccessDiv = document.getElementById("flashSuccessMsg_id");
	} else {
		addBackdrop();
	}
	document.getElementById("flashSuccessMsgData_id").innerHTML = message;
	showProcessMessageNL(processSuccessDiv, 'successLoaderModal');
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
		+ '<div class="row align-items-center"><div class="col-2"><img src="/assets/images/Successful.png" style="width:43px"/></div>'
		+ '<div class="col-10 fs_15_fw_600_c_1313" style="padding-left: 0px;" id="flashSuccessMsgData_id"></div></div>  </div></div></div></div>';
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

function showProcessMessageNL(flashMsgDivObj, modalId) {
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
	flashMsg_idObj.style.display = "block";
	var tmpWidth = this.flashMsg_idObj.clientWidth ? this.flashMsg_idObj.clientWidth : this.flashMsg_idObj.offsetWidth;
	var tmpHeight = this.flashMsg_idObj.clientHeight ? this.flashMsg_idObj.clientHeight : this.flashMsg_idObj.offsetHeight;
	// Setting width and height of left transparent div

	var leftPoint = ((bodyWidth / 2) - (tmpWidth / 2));
	//alert("leftPoint=" + leftPoint);
	flashMsg_idObj.style.left = leftPoint + 'px';
	flashMsg_idObj.style.top = (Math.ceil((bodyHeight - tmpHeight) / 2) + topOffset) + 'px';
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
		if (modalId === "sendLoaderModal") {
			document.body.style.overflow = 'auto';
		}
		//document.body.style.overflow = 'auto';
	}, 300);
	clearInterval(confirm_interval);
}

getBrowserSize = function () {
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


// DOM ready (jQuery replacement)
document.addEventListener("DOMContentLoaded", function () {

    document.body.insertAdjacentHTML("beforeend", `
        <button class="float_icon_con" onclick="togglePopup()">
            <div class="icon_cotner">
                <img src="/assets/icons/Chat-Button-Bubbles.png" class="float_icon show_popup" />
                <img src="/assets/icons/icon_white_transparent_512.png" class="float_icon hide_popup" style="display:none;" />
            </div>
        </button>
    `);
});

function togglePopup() {
    const popup = document.getElementById("staticBackdrop");
    const showIcon = document.querySelector(".show_popup");
    const hideIcon = document.querySelector(".hide_popup");

    if (!popup || !showIcon || !hideIcon) return;

    if (popup.classList.contains("show")) {
        // CLOSE popup
        popup.classList.remove("show");
        popup.setAttribute("aria-hidden", "true");

        showIcon.style.display = "block";
        hideIcon.style.display = "none";
    } else {
        // OPEN popup
        popup.classList.add("show");
        popup.setAttribute("aria-hidden", "false");

        showIcon.style.display = "none";
        hideIcon.style.display = "block";
    }
}


