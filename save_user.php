<?php
$data = json_decode(file_get_contents("php://input"), true);

// Сохраняем входящие данные в лог
file_put_contents(__DIR__ . "/debug.log", print_r($data, true));

if (!$data || !isset($data["user_id"])) {
  http_response_code(400);
  exit("Invalid data");
}

$userId = preg_replace('/[^0-9]/', '', $data["user_id"]);
if (!$userId) {
  http_response_code(400);
  exit("Invalid user ID");
}

$dir = __DIR__ . "/userdata";
if (!is_dir($dir)) mkdir($dir, 0777, true);

$filePath = $dir . "/user_" . $userId . ".json";

file_put_contents($filePath, json_encode([
  "name" => $data["name"] ?? '',
  "partner" => $data["partner"] ?? '',
  "date" => $data["date"] ?? ''
]));

echo "OK";