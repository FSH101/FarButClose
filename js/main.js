window.onload = () => {
    if (userData.registered) {
        showMainScreen(userData);
        loadActivity();
        loadQuests();
    } else {
        document.getElementById("registerScreen").style.display = "block";
    }

    document.getElementById("welcomeNav").onclick = () => showSection('welcome');
    document.getElementById("activityNav").onclick = () => {
        showSection('activity');
        loadActivity();
    };
    document.getElementById("questsNav").onclick = () => {
        showSection('quests');
        loadQuests();
    };
    document.getElementById("partnerNav").onclick = () => showSection('partner');
    document.getElementById("logout").onclick = resetUser;
};