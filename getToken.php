<?php
session_start();

header("Content-Type: application/json");

// 🔥 har request pe naya token generate
$token = bin2hex(random_bytes(32));

// session me store
$_SESSION['form_token'] = $token;

echo json_encode([
    "status" => "success",
    "token" => $token
]);