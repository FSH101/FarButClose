<?php
// Путь к файлу с квестами
$file = 'quests.json';

// Загрузка квестов
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file)) {
        echo file_get_contents($file);
    } else {
        echo json_encode([]);
    }
}

// Сохранение квестов
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    $quests = json_decode($data, true);
    
    if (json_last_error() === JSON_ERROR_NONE) {
        if (file_put_contents($file, json_encode($quests, JSON_PRETTY_PRINT))) {
            echo "OK";
        } else {
            http_response_code(500);
            echo "Ошибка при сохранении данных.";
        }
    } else {
        http_response_code(400);
        echo "Некорректный формат данных.";
    }
}
?>