<?php
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) exit;

$type = $data["type"];
$file = "feeds/{$type}.json";

if (!file_exists("feeds")) mkdir("feeds");
if (!file_exists($file)) file_put_contents($file, "[]");

$feed = json_decode(file_get_contents($file), true);
$feed[] = [
  "name" => $data["name"],
  "text" => $data["text"],
  "time" => time()
];

file_put_contents($file, json_encode($feed, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));