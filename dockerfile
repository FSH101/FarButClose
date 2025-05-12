# Используем официальный образ PHP с Apache
FROM php:7.4-apache

# Включаем необходимые расширения PHP (если нужно)
RUN docker-php-ext-install mysqli

# Копируем файлы проекта в контейнер
COPY . /var/www/html/

# Открываем порт 80 для веб-сервера
EXPOSE 80

# Запуск Apache в фоне
CMD ["apache2-foreground"]
