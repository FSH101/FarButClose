async function registerUser() {
  const partner = document.getElementById('partner').value.trim();
  const startDate = document.getElementById('startDate').value;

  if (!partner || !startDate) {
    document.getElementById('regError').innerText = "Пожалуйста, заполните все поля.";
    return;
  }

  // Здесь можно добавить сохранение в localStorage или отправку на сервер
  console.log("Регистрация прошла успешно:", partner, startDate);
  alert(`Вы зарегистрированы с ${partner} с даты ${startDate}`);
}