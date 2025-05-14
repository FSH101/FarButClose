<?php
$userId = isset($_GET['user_id']) ? preg_replace('/[^0-9]/', '', $_GET['user_id']) : '';
$filePath = __DIR__ . "/userdata/user_activity_" . $userId . ".json";

if (!$userId || !file_exists($filePath)) {
  echo json_encode([]);
  exit;
}

$data = file_get_contents($filePath);
echo $data;