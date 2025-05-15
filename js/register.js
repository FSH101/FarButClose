function registerUser() {
    const partnerName = document.getElementById("partnerName").value;
    const startDate = document.getElementById("startDate").value;

    if (!partnerName || !startDate) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    userData.partner = partnerName;
    userData.togetherSince = startDate;
    userData.registered = true;

    showMainScreen(userData);
}

function showMainScreen(data) {
    document.getElementById("registerScreen").style.display = "none";
    document.getElementById("mainScreen").style.display = "block";
    document.getElementById("mainPartner").textContent = `Вы вместе с ${data.partner}`;
    updateReminderBox(data.togetherSince);
    showSection('welcome');
}

function resetUser() {
    userData.partner = '';
    userData.togetherSince = '';
    userData.registered = false;

    document.getElementById("registerScreen").style.display = "block";
    document.getElementById("mainScreen").style.display = "none";
}