<?php
$userId = preg_replace('/[^a-zA-Z0-9]/', '', $_GET['userId'] ?? '');
$file = "data/users/{$userId}.json";
if (!file_exists($file)) {
  echo json_encode(['nickname' => '', 'partner' => '', 'startDate' => '', 'coins' => 0, 'chat' => []]);
  exit;
}
echo file_get_contents($file);
?>
