
////


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
            const vpnRes = await fetch(`/vpn.php?ip=${clientIp}`);
            const data = await vpnRes.json();

            console.log("IPQS Data:", data);

            if (data.error) {
                console.error("Backend error:", data.message);
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
            }

        } catch (err) {
            console.error("Fetch error:", err);
        }
    });
}





// window.onload = () => {
//     setTimeout(() => {
//         document.getElementById("new_overlay").style.display = "none";
//     }, 2000);
// };