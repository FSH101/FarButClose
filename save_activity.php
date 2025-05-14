<?php
$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data["user_id"]) || !isset($data["entry"])) {
  http_response_code(400);
  exit("Invalid data");
}

$userId = preg_replace('/[^0-9]/', '', $data["user_id"]);
$filePath = __DIR__ . "/userdata/global_activity.json";

// Загружаем текущие записи
$existing = file_exists($filePath) ? json_decode(file_get_contents($filePath), true) : [];
$existing[] = [
    'user_id' => $userId,
    'text' => $data["entry"]["text"],
    'time' => $data["entry"]["time"]
];

// Сохраняем обновлённые данные
file_put_contents($filePath, json_encode($existing, JSON_PRETTY_PRINT));
echo "OK";