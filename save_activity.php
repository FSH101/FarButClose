<?php
$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data["user_id"], $data["name"], $data["photo"], $data["entry"])) {
  http_response_code(400);
  exit("Invalid activity data");
}

$logFile = __DIR__ . "/data/activity_log.json";

$entry = [
  "user_id" => $data["user_id"],
  "name" => $data["name"],
  "photo" => $data["photo"],
  "entry" => $data["entry"],
  "time" => time()
];

$log = file_exists($logFile) ? json_decode(file_get_contents($logFile), true) : [];
$log[] = $entry;
file_put_contents($logFile, json_encode($log, JSON_PRETTY_PRINT));
echo "OK";