let quests = [];
let currentQuest = null;

async function loadQuests() {
    try {
        const response = await fetch("quests/quests.json");
        quests = await response.json();
        displayQuestList();
    } catch (error) {
        console.error("Ошибка при загрузке квестов:", error);
    }
}

function displayQuestList() {
    const list = document.getElementById("questList");
    list.innerHTML = "";

    quests.forEach((quest, index) => {
        const button = document.createElement("button");
        button.textContent = quest.title;
        button.onclick = () => startSpecificQuest(quest);
        list.appendChild(button);
    });
}

function startSpecificQuest(quest) {
    currentQuest = quest;
    document.getElementById("questText").textContent = quest.text;
    document.getElementById("answerSection").style.display = "block";
    document.getElementById("questAnswer").value = "";
}

function submitQuestAnswer() {
    const answer = document.getElementById("questAnswer").value;
    if (!answer.trim()) {
        alert("Введите ответ.");
        return;
    }

    const answerList = document.getElementById("answerList");
    const li = document.createElement("li");
    li.textContent = `${currentQuest.title}: ${answer}`;
    answerList.appendChild(li);

    document.getElementById("answerSection").style.display = "none";
    currentQuest = null;
}