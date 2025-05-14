<?php
$data = json_decode(file_get_contents("php://input"), true);

// Отладка — вывести полученные данные
file_put_contents(__DIR__ . "/debug.log", print_r($data, true));

if (!$data || !isset($data["user_id"])) {
  http_response_code(400);
  exit("Invalid data");
}

$userId = preg_replace('/[^0-9]/', '', $data["user_id"]);
$filePath = __DIR__ . "/userdata/user_" . $userId . ".json";

file_put_contents($filePath, json_encode([
  "name" => $data["name"] ?? '',
  "partner" => $data["partner"] ?? '',
  "date" => $data["date"] ?? ''
]));

echo "OK";