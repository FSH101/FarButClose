<?php
// Пример файла save_user_data.php
$data = json_decode(file_get_contents('php://input'), true);
file_put_contents('user_data.json', json_encode($data));
echo json_encode(['success' => true]);
?>