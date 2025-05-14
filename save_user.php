<?php
$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !isset($data['id'])) {
  http_response_code(400);
  echo 'Invalid data';
  exit;
}

$dir = __DIR__ . '/data/users';
if (!is_dir($dir)) mkdir($dir, 0777, true);

$userId = preg_replace('/[^a-zA-Z0-9]/', '', $data['id']);
file_put_contents("$dir/{$userId}.json", json_encode($data));
echo 'OK';