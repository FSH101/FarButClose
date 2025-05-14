<?php
$logFile = __DIR__ . "/data/activity_log.json";
if (!file_exists($logFile)) {
  echo "[]";
  exit;
}
echo file_get_contents($logFile);