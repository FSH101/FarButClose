async function registerUser() {
  const partner = document.getElementById('partner').value.trim();
  const startDate = document.getElementById('startDate').value;

  if (!partner || !startDate) {
    document.getElementById('regError').innerText = "Пожалуйста, заполните все поля.";
    return;
  }

  // Получаем user_id из Telegram WebApp (примерно так, если ты используешь Telegram.initDataUnsafe)
  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 'test_user';

  const data = {
    user_id: userId,
    name: '', // если есть имя, можешь добавить
    partner: partner,
    date: startDate
  };

  try {
    const response = await fetch('save_user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.text();

    if (result === "OK") {
      alert("Регистрация успешна!");
    } else {
      document.getElementById('regError').innerText = "Ошибка при сохранении данных.";
    }
  } catch (error) {
    console.error("Ошибка:", error);
    document.getElementById('regError').innerText = "Сетевая ошибка.";
  }
}