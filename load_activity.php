<?php
$filePath = __DIR__ . "/userdata/user_activity.json";

if (!file_exists($filePath)) {
  echo json_encode([]);
  exit;
}

$data = file_get_contents($filePath);
echo $data;