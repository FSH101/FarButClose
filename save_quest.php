<?php
$data = json_decode(file_get_contents("php://input"), true);

// Сохраняем входящие данные в лог
file_put_contents(__DIR__ . "/debug.log", print_r($data, true));

if (!$data || !isset($data["name"]) || !isset($data["question"]) || !isset($data["answer"])) {
  http_response_code(400);
  exit("Invalid data");
}

$dir = __DIR__ . "/quests";
if (!is_dir($dir)) mkdir($dir, 0777, true);

$filePath = $dir . "/quests.json"; // Все квесты сохраняются в одном общем файле

// Загружаем существующие квесты
$existing = file_exists($filePath) ? json_decode(file_get_contents($filePath), true) : [];

// Добавляем новый квест
$existing[] = [
  'name' => $data['name'],
  'question' => $data['question'],
  'answer' => $data['answer']
];

// Сохраняем обновленные квесты
file_put_contents($filePath, json_encode($existing, JSON_PRETTY_PRINT));

echo "OK";