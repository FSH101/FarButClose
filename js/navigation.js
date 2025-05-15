// navigation.js

function showSection(section) {
  const activitySection = document.getElementById('activitySection');
  const questsSection = document.getElementById('questsSection');
  const quest = document.getElementById('quest');

  // Скрываем все
  activitySection.classList.add('hidden');
  questsSection.classList.add('hidden');
  quest.classList.add('hidden');

  // Показываем выбранный
  if (section === 'activity') {
    activitySection.classList.remove('hidden');
  } else if (section === 'quests') {
    questsSection.classList.remove('hidden');
  }
}