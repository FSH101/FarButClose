<?php
$data = json_decode(file_get_contents("php://input"), true);
file_put_contents(__DIR__ . "/debug.log", print_r($data, true));

if (!$data || !isset($data["user_id"]) || !isset($data["entry"])) {
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

$filePath = $dir . "/user_activity.json";
$existing = file_exists($filePath) ? json_decode(file_get_contents($filePath), true) : [];

$entry = $data['entry'];
$existing[] = [
  'user_id' => $userId,
  'name' => $data['name'] ?? 'Пользователь',
  'text' => $entry['text'] ?? '',
  'time' => $entry['time'] ?? date("Y-m-d H:i:s")
];

file_put_contents($filePath, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
echo "OK";