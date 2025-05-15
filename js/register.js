window.registerUser = async function () {
  const partner = document.getElementById('partner').value.trim();
  const startDate = document.getElementById('startDate').value;
  const errorBox = document.getElementById('regError');

  if (!partner || !startDate) {
    errorBox.innerText = "Пожалуйста, заполните все поля.";
    return;
  }

  const payload = {
    user_id: window.userData.user_id,
    name: window.userData.name,
    partner: partner,
    date: startDate
  };

  try {
    const res = await fetch('save_user.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await res.text();
    if (text.trim() === "OK") {
      localStorage.setItem('user_data', JSON.stringify(payload));
      window.showMainScreen(payload);
      window.loadActivity();
      window.loadQuests();
    } else {
      errorBox.innerText = "Ошибка при сохранении: " + text;
    }
  } catch (e) {
    errorBox.innerText = "Ошибка подключения к серверу";
  }
};