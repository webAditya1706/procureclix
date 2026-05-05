<?php


// Java backend call
$javaApiUrl = "http://localhost:8084/CRM/forms/download-eBook";

$ch = curl_init($javaApiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HEADER, true); 
$response = curl_exec($ch);

$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$header = substr($response, 0, $header_size);
$body = substr($response, $header_size);

curl_close($ch);

// Extract file name from Java response header
if (preg_match('/filename="(.+)"/', $header, $matches)) {
    $fileName = $matches[1];
} else {
    $fileName = "E-Book.pdf";
}

// Forward the file
header("Content-Type: application/pdf");
header("Content-Disposition: attachment; filename=\"$fileName\"");
header("Content-Length: " . strlen($body));

echo $body;
exit;
?>
