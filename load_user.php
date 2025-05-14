<?php
$userId = preg_replace('/[^0-9]/', '', $_GET["id"] ?? '');
$filePath = __DIR__ . "/userdata/user_" . $userId . ".json";

if (file_exists($filePath)) {
  echo file_get_contents($filePath);
} else {
  echo json_encode([]);
}