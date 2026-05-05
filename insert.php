

<?php


session_start();



$fullName = trim($_POST['fullName'] ?? '');
$companyName  = trim($_POST['companyName'] ?? '');
$email     = trim($_POST['email'] ?? '');
$phone     = trim($_POST['phone'] ?? '');


if (empty($fullName) || empty($companyName) || empty($email) || empty($phone)) {
    echo json_encode([
        "status" => "error",
        "message" => "FullName CompanyName Email and Phone are reuqired fields."
    ]);
    exit;
}

if (!isset($_POST['formToken']) || $_POST['formToken'] !== $_SESSION['form_token']) {
     exit("oops! sorry for the inconvenience");
}

unset($_SESSION['form_token']);


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//include 'connect.php';

function verifyCaptchaV3($token) {
    $secretKey = "6Lcp6VksAAAAAJwela0rWNo4nKXsglgaqfUx5Zph";

    $data = [
        'secret' => $secretKey,
        'response' => $token
    ];

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => "https://www.google.com/recaptcha/api/siteverify",
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($data),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_SSL_VERIFYHOST => false
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    $result = json_decode($response, true);

    // score check
    if (($result['success'] ?? false) &&
        ($result['score'] ?? 0) >= 0.5 &&
        ($result['action'] ?? '') === 'contact_form') {
        return true;
    }

    return false;
}


function getClientIp() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) return $_SERVER['HTTP_CLIENT_IP'];
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) return $_SERVER['HTTP_X_FORWARDED_FOR'];
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

function getBrowser($userAgent) {
    if (strpos($userAgent, 'Edg/') !== false) {
        return 'Microsoft Edge';
    } elseif (strpos($userAgent, 'Chrome') !== false) {
        return 'Google Chrome';
    } elseif (strpos($userAgent, 'Firefox') !== false) {
        return 'Mozilla Firefox';
    } elseif (strpos($userAgent, 'Safari') !== false) {
        return 'Safari';
    } elseif (strpos($userAgent, 'MSIE') !== false || strpos($userAgent, 'Trident') !== false) {
        return 'Internet Explorer';
    } else {
        return 'Unknown';
    }
}


$ipAddress = "23.182.24.255";//getClientIp();  //"122.167.64.251"; //
$browser_info = $_SERVER['HTTP_USER_AGENT'];
$browser_name = getBrowser($browser_info);
$hubspotutk = $_POST['hubspotutk'] ?? '';
$city ='';
$region ='';
$countryCode='';
$proxyUsed ='';
$countryFullName ='';
$token = "48c71023229842"; 

 $url = "https://ipinfo.io/{$ipAddress}/json?token={$token}";

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);     // Return the response
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);     // Disable SSL check (not recommended for production)

// Execute the request
$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'cURL Error: ' . curl_error($ch);
} else {
    $data = json_decode($response, true);

    $city = $data['city'] ?? '';
    $region = $data['region'] ?? '';
    $countryCode = $data['country'] ?? '';
    $org = $data['org'] ?? '';
    $proxyUsed = $data['privacy']['proxy'] ?? false;
    include __DIR__ . '/countrycode.php';
   // $countryFullName = $countryCodes[$countryCode] ?? $countryCode;

    $countryFullName = $countryCode;

    //Step 1: Try using intl extension (Locale)
     if (extension_loaded('intl') && $countryCode !== '') {
         $name = Locale::getDisplayRegion('-' . $countryCode, 'en');
         if (!empty($name) && strcasecmp($name, $countryCode) !== 0) {
             $countryFullName = $name;
         }
     }

    // Step 2: If intl didn’t work, try your local array
     if ($countryFullName === $countryCode && !empty($countryCodes[$countryCode])) {
         $countryFullName = $countryCodes[$countryCode];
     }

    // Step 3: Final fallback (if nothing found)
     if (empty($countryFullName)) {
         $countryFullName = $countryCode;
     }
    
}

echo "IP: $ipAddress <br>";
    echo "City: $city <br>";
    echo "Region: $region <br>";
    echo "Country: $countryFullName <br>";
    echo "Proxy: " . ($proxyUsed ? "Yes" : "No") . "<br>";

// Close cURL session
curl_close($ch);
        
       
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $captchaToken = $_POST['recaptcha_token'] ?? '';

            // if (!verifyCaptchaV3($captchaToken)) {
            //     header("Location: contact-us.html?verify=failed");
            //     exit;
            // }

             $modules = isset($_POST['modules']) ? implode(", ", (array)$_POST['modules']) : "";

             $phoneCountryCode = $_POST['phoneCountryCode'] ?? '';
             $phone = trim($phoneCountryCode . ' ' . ($_POST['phone'] ?? ''));
           
            $data = [
                'fullName'     => $_POST['fullName'] ?? '',
                'companyName'  => $_POST['companyName'] ?? '',
                'email'        => $_POST['email'] ?? '',
                'phone'        => $phone,
                'modules'      => $modules ?? '',
                'notes'        => $_POST['notes'] ?? '',
                'ip_address'   => $ipAddress ?? '',
                'browser_info' => $browser_info ?? '',
                'browserName'  => $browser_name ?? '',
                'country'      => $countryFullName ?? '',
                'region'       => $region ?? '',
                'city'         => $city ?? '',
                'isProxy'      => $proxyUsed ?? '',
                'timezone'     => $_POST['timezone'] ?? '',
                'leadSource'       => $_POST['leadSource'] ?? '',
                'emailVerifyStatus' => $_POST['emailVerifyStatus'] ?? '',
                'formLoadedAt'  => $_POST['formLoadedAt'] ?? ''
            ];

            // Convert data array to JSON
            $jsonData = json_encode($data);

            // Spring Boot REST API URL
            $url = 'http://localhost:8084/CRM/forms'; // Update this if your API URL differs

            // Initialize cURL
            $ch = curl_init($url);

            // cURL options
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'Content-Length: ' . strlen($jsonData)
            ]);

            // Execute cURL request
            $response = curl_exec($ch);

            if (curl_errno($ch)) {
                echo 'Request Error: ' . curl_error($ch);
            } else {
                $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                if ($httpCode == 201) {
                    header("Location: contact-us.html?status=success");
                } else {
                    header("Location: contact-us.html?status=error");  
                }
            }

            curl_close($ch);
        }

    

?>


