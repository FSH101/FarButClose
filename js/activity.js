// activity.js

async function loadActivity() {
  try {
    const res = await fetch('load_activity.php');
    const data = await res.json();
    const container = document.getElementById('activityFeed');
    container.innerHTML = '';
    data.forEach(item => {
      const name = item.name || 'Пользователь';
      const time = item.time || '';
      const text = item.text || '';
      const div = document.createElement('div');
      div.className = 'entry';
      div.innerHTML = `<b>${name}</b> <small>${time}</small><br>${text}`;
      container.prepend(div);
    });
  } catch (e) {
    console.error('Ошибка загрузки ленты активности:', e);
  }
}

async function addActivity() {
  const activityText = document.getElementById('activityText').value.trim();
  if (!activityText) {
    alert('Пожалуйста, напишите что-нибудь!');
    return;
  }

  const activityPayload = {
    user_id: userData.user_id,
    name: userData.name,
    entry: {
      text: activityText,
      time: new Date().toLocaleString()
    }
  };

  try {
    const res = await fetch('save_activity.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(activityPayload)
    });

    const text = await res.text();
    if (text.trim() === "OK") {
      document.getElementById('activityText').value = '';
      await loadActivity();
    } else {
      alert('Ошибка при сохранении активности: ' + text);
    }
  } catch (e) {
    alert('Ошибка при отправке данных на сервер');
  }
}