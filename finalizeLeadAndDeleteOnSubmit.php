<?php 

$input = file_get_contents("php://input");
$data = json_decode($input, true);

$visitorId = $data['visitorId'] ?? '';
$action = $data['action'] ?? '';

$payload = [
    "visitorId" => $visitorId,
    "action" => $action
];

$jsonData = json_encode($payload);

$url = "http://localhost:8084/CRM/forms/finalize-delete";

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