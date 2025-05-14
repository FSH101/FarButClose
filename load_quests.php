<?php
$filePath = __DIR__ . "/quests/quests.json";

if (!file_exists($filePath)) {
  echo json_encode([]);
  exit;
}

$data = file_get_contents($filePath);
echo $data;