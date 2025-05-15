const tg = window.Telegram.WebApp;
tg.expand();

let userData = {
    id: tg.initDataUnsafe.user?.id || '',
    name: tg.initDataUnsafe.user?.first_name || 'гость',
    avatar: tg.initDataUnsafe.user?.photo_url || 'https://via.placeholder.com/150',
    partner: '',
    togetherSince: '',
    registered: false
};

document.getElementById("welcomeName").textContent = `Привет, ${userData.name}!`;
document.getElementById("avatar").src = userData.avatar;