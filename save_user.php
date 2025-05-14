<?php
$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data["user_id"])) {
  http_response_code(400);
  exit("Invalid data");
}

$userId = preg_replace('/[^0-9]/', '', $data["user_id"]);
$filePath = __DIR__ . "/data/user_" . $userId . ".json";

file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT));
echo "OK";