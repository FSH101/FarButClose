<?php
$type = $_GET["type"] ?? "public";
$file = "feeds/{$type}.json";

if (!file_exists($file)) {
  echo "[]";
  exit;
}

echo file_get_contents($file);