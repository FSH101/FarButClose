// quests.js

let quests = [];
let currentQuest = null;

async function loadQuests() {
  try {
    const res = await fetch('quests.json');
    quests = await res.json();
    displayQuestList();
  } catch (e) {
    console.error('Ошибка при загрузке квестов:', e);
  }
}

function displayQuestList() {
  const questsList = document.getElementById('questsList');
  questsList.innerHTML = '';
  quests.forEach(quest => {
    const questItem = document.createElement('div');
    questItem.classList.add('entry');
    questItem.innerHTML = `<b>${quest.title}</b><br>${quest.description}`;
    const startButton = document.createElement('button');
    startButton.innerText = 'Начать квест';
    startButton.onclick = () => startSpecificQuest(quest);
    questItem.appendChild(startButton);
    questsList.appendChild(questItem);
  });
}

function startSpecificQuest(quest) {
  currentQuest = quest;
  document.getElementById('quest').classList.remove('hidden');
  document.getElementById('questTitle').innerText = quest.title;
  document.getElementById('questDescription').innerText = quest.description;
  document.getElementById('questResult').innerText = '';
  document.getElementById('questAnswer').value = '';
}

function submitQuestAnswer() {
  const answer = document.getElementById('questAnswer').value.trim();
  if (!answer) return;

  let resultText = '';
  if (answer.toLowerCase() === currentQuest.answer.toLowerCase()) {
    resultText = 'Отлично! Это правильный ответ!';
  } else {
    resultText = 'Попробуйте снова!';
  }

  document.getElementById('questResult').innerText = resultText;
}