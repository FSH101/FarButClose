<?php
// Пример получения данных о пользователе из базы
$user_name = "Игрок";  // Это значение будет динамическим
$partner_name = "Партнер";  // Это значение тоже будет динамическим
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Far But Close</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Far But Close</h1>

    <!-- Профиль пользователя -->
    <div class="profile">
        <p>Привет, <span><?php echo $user_name; ?></span>!</p>
        <p>Твой партнер: <span><?php echo $partner_name; ?></span></p>
    </div>

    <!-- Кнопки -->
    <button class="button">Добавить партнера</button>
    <button class="button">Ежедневное задание</button>
    <button class="button">Магазин</button>

    <!-- Дерево роста -->
    <div class="tree">
        <img src="assets/tree-icon.png" alt="Дерево">
        <span>Ваше дерево растет!</span>
    </div>

</body>
</html>