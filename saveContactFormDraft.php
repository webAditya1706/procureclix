<?php

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


$input = file_get_contents("php://input");

// JSON ko array me convert karo
$data = json_decode($input, true);

if(!$data){
    echo json_encode(["status"=>"no data"]);
    exit;
}


// modules handle karo
$modules = "";

if(isset($data['modules']) && is_array($data['modules'])){
    $modules = implode(", ", $data['modules']);
}


$phoneCountryCode = $data['phoneCountryCode'] ?? '';
$phone = trim($phoneCountryCode . ' ' . ($data['phone'] ?? ''));

// Java API ko bhejne ke liye payload
$payload = [

    'visitorId'   => $data['visitorId'] ?? '',
    'fullName'    => $data['fullName'] ?? '',
    'companyName' => $data['companyName'] ?? '',
    'email'       => $data['email'] ?? '',
    'phone'       => $phone,
    'modules'     => $modules,
    'notes'       => $data['notes'] ?? '',
    'ip_address'   => $ipAddress ?? '',
    'browser_info' => $browser_info ?? '',
    'browserName'  => $browser_name ?? '',
    'country'      => $countryFullName ?? '',
    'region'       => $region ?? '',
    'city'         => $city ?? '',
    'isProxy'      => $proxyUsed ?? '',
    'timezone'    => $data['timezone'] ?? '',
    'leadSource'  => $data['leadSource'] ?? ''

];

$jsonData = json_encode($payload);


// Java Draft API
$url = "http://localhost:8084/CRM/forms/draftForm-save";


$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Content-Length: " . strlen($jsonData)
]);

$response = curl_exec($ch);

curl_close($ch);

echo $response;


?>