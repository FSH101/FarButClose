<?php
// Пример файла load_user_data.php
if (file_exists('user_data.json')) {
    $data = json_decode(file_get_contents('user_data.json'), true);
    echo json_encode(['success' => true, 'partnerName' => $data['partnerName']]);
} else {
    echo json_encode(['success' => false]);
}
?>