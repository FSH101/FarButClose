function loadActivity() {
    const activityList = document.getElementById("activityList");
    activityList.innerHTML = `<li>Вы зарегистрировались!</li>`;
}

function addActivity(text) {
    const activityList = document.getElementById("activityList");
    const li = document.createElement("li");
    li.textContent = text;
    activityList.prepend(li);
}