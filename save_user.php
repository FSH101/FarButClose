<?php
$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !isset($data['userId'])) { http_response_code(400); exit; }
$userId = preg_replace('/[^a-zA-Z0-9]/', '', $data['userId']);
$file = "data/users/{$userId}.json";
file_put_contents($file, json_encode($data, JSON_UNESCAPED_UNICODE));
echo json_encode(['status' => 'ok']);
?>
