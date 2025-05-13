<?php
if (!isset($_GET["user_id"])) {
  http_response_code(400);
  exit("No user ID");
}

$userId = preg_replace('/[^0-9]/', '', $_GET["user_id"]);
$filePath = __DIR__ . "/userdata/user_" . $userId . ".json";

if (file_exists($filePath)) {
  echo file_get_contents($filePath);
} else {
  echo json_encode([]);
}