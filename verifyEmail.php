<?php
// verifyEmail.php

if (!isset($_POST['email'])) {
    echo json_encode(['success' => false, 'message' => 'Email not provided']);
    exit;
}

$email = trim($_POST['email']);
$apiKey = "1024663-2178FD7C";
$domain = "procureclix.com";
$url = "https://api.xverify.com/v2/ev?email=" . urlencode($email) . "&api_key=" . $apiKey . "&domain=" . $domain;

// Call API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);
curl_close($ch);

if (!$response) {
    echo json_encode(['success' => false, 'message' => 'API call failed']);
    exit;
}

$data = json_decode($response, true);

if (isset($data['status']) && $data['status'] === 'valid') {
    echo json_encode(['success' => true, 'status' => 'valid']);
} else {
    echo json_encode(['success' => false, 'status' => $data['status'] ?? 'unknown']);
}
