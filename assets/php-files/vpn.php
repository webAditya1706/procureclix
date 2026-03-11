<?php
// ================= HEADERS =================
header("Content-Type: application/json");

// ================= GET CLIENT IP =================
// Use IP sent from client, fallback to server-detected IP
$ip = $_GET['ip'] ?? null;

if (!$ip) {
    // Fallback to client IP via HTTP headers
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0]);
    } else {
        $ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
    }
}

// ================= LOGGING =================
// file_put_contents(
//     __DIR__ . "/ip_debug.log",
//     "Time: " . date("Y-m-d H:i:s") . PHP_EOL .
//     "HTTP_X_FORWARDED_FOR: " . ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? 'NOT SET') . PHP_EOL .
//     "REMOTE_ADDR: " . ($_SERVER['REMOTE_ADDR'] ?? 'NOT SET') . PHP_EOL .
//     "Client IP: " . $ip . PHP_EOL .
//     "--------------------------" . PHP_EOL,
//     FILE_APPEND
// );

// ================= IPQUALITYSCORE API =================
$apiKey = "Z4CsHxthk3USMyD8lVZcgPJ7bKEuPOej"; // Keep secret
$url = "https://ipqualityscore.com/api/json/ip/$apiKey/$ip?strictness=1&allow_public_access_points=true";

// ================= CURL REQUEST =================
$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false
]);

$response = curl_exec($ch);

if ($response === false) {
    echo json_encode([
        "error" => true,
        "message" => curl_error($ch)
    ]);
    curl_close($ch);
    exit;
}

curl_close($ch);

// ================= RETURN JSON =================
echo $response;
exit;
