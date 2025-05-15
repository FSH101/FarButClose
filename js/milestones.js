function showMainScreen(data) {
  document.getElementById('register').classList.add('hidden');
  document.getElementById('main').classList.remove('hidden');
  document.getElementById('nameDisplay').innerText = data.name;
  document.getElementById('partnerDisplay').innerText = data.partner;
  document.getElementById('dateDisplay').innerText = data.date;
  if (data.photo) document.getElementById('avatar').src = data.photo;

  updateReminderBox(data.date);
}

function getNextMilestone(startDateStr) {
  const startDate = new Date(startDateStr);
  const now = new Date();
  const daysTogether = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  const nextMilestone = Math.ceil(daysTogether / 50) * 50 + 50;
  const milestoneDate = new Date(startDate.getTime() + nextMilestone * 24 * 60 * 60 * 1000);
  const diffDays = Math.ceil((milestoneDate - now) / (1000 * 60 * 60 * 24));

  return {
    label: `${nextMilestone} дней вместе`,
    daysLeft: diffDays
  };
}

function updateReminderBox(startDateStr) {
  const box = document.querySelector('.reminder-box span');
  const milestone = getNextMilestone(startDateStr);
  box.innerText = `${milestone.label} — через ${milestone.daysLeft} ${getDaysWord(milestone.daysLeft)}`;
}

function getDaysWord(n) {
  if (n % 10 === 1 && n % 100 !== 11) return 'день';
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'дня';
  return 'дней';
}