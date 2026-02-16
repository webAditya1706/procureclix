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


$ipAddress = "223.182.182.239";//getClientIp();  //"122.167.64.251"; //
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
    include 'countrycode.php';
    $countryFullName = $countryCodes[$countryCode] ?? $countryCode;
    
}


curl_close($ch);
        
       
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $modules = isset($_POST['modules']) ? implode(", ", (array)$_POST['modules']) : "";

    $data = [
        'fullName' =>   $_POST['fullName'] ?? '',
        'email'        => $_POST['email'] ?? '',
        'companyName'  => $_POST['companyName'] ?? '',
        'ip_address'   => $ipAddress ?? '',
        'browser_info' => $browser_info ?? '',
        'browserName'  => $browser_name ?? '',
        'country'      => $countryFullName ?? '',
        'region'       => $region ?? '',
        'city'         => $city ?? '',
        'isProxy'      => $proxyUsed ?? '',
        'timezone'     => $_POST['timezone'] ?? '',
        'formLoadedAt' => $_POST['formLoadedAt'] ?? ''
    ];

    $jsonData = json_encode($data);

    // Spring Boot REST API URL
    $url = 'http://localhost:8084/CRM/forms/demoForm-save'; 

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Content-Length: ' . strlen($jsonData)
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode >= 200 && $httpCode < 300) {
    // Response body (whitePaper JSON from Spring Boot)
    echo json_encode([
        'status' => 'success',
        'message' => 'Form submitted successfully',
        'data' => json_decode($response, true) // include whitePaper object
    ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Error submitting form',
            'response' => $response // include backend error response too
        ]);
    }

    exit;
}

    

?>


