<?php
$data = json_decode(file_get_contents("php://input"), true);

// Логирование
file_put_contents(__DIR__ . "/debug_activity.log", print_r($data, true));

if (!$data || !isset($data["user_id"]) || !isset($data["entry"])) {
  http_response_code(400);
  exit("Invalid data");
}

$userId = preg_replace('/[^0-9]/', '', $data["user_id"]);
if (!$userId) {
  http_response_code(400);
  exit("Invalid user ID");
}

$entryText = is_string($data['entry']) ? $data['entry'] : json_encode($data['entry']);
$name = $data["name"] ?? "Безымянный";
$photo = $data["photo"] ?? "";

$dir = __DIR__ . "/userdata";
if (!is_dir($dir)) mkdir($dir, 0777, true);

$activityFile = $dir . "/activity.json";
$existing = [];

if (file_exists($activityFile)) {
  $existing = json_decode(file_get_contents($activityFile), true);
  if (!is_array($existing)) $existing = [];
}

// Добавляем новую запись
$existing[] = [
  "user_id" => $userId,
  "name" => $name,
  "photo" => $photo,
  "entry" => $entryText,
  "time" => date("Y-m-d H:i:s")
];

// Сохраняем
file_put_contents($activityFile, json_encode($existing, JSON_UNESCAPED_UNICODE));

echo "OK";