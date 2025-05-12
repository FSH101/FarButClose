# Используем официальный образ PHP с Apache
FROM php:7.4-apache

# Устанавливаем необходимые расширения PHP для работы с MySQL
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Обновляем систему и устанавливаем зависимости для скачивания phpMyAdmin
RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    && wget https://files.phpmyadmin.net/phpMyAdmin/5.1.1/phpMyAdmin-5.1.1-all-languages.tar.gz \
    && tar -xvzf phpMyAdmin-5.1.1-all-languages.tar.gz \
    && mv phpMyAdmin-5.1.1-all-languages /var/www/html/phpmyadmin \
    && rm -rf phpMyAdmin-5.1.1-all-languages.tar.gz

# Копируем файлы проекта в контейнер
COPY . /var/www/html/

# Открываем порты для Apache и phpMyAdmin
EXPOSE 80

# Настроим переменные окружения для phpMyAdmin
ENV PMA_HOST=db
ENV PMA_PORT=3306

# Запуск Apache в фоне
CMD ["apache2-foreground"]