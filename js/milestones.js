function getNextMilestone(startDateStr) {
    const startDate = new Date(startDateStr);
    const today = new Date();

    const dayMs = 24 * 60 * 60 * 1000;
    const diffDays = Math.floor((today - startDate) / dayMs);

    const milestones = [100, 200, 300, 365, 500, 730, 1000, 1460, 2000];
    for (let milestone of milestones) {
        if (diffDays < milestone) {
            const milestoneDate = new Date(startDate.getTime() + milestone * dayMs);
            const daysLeft = Math.ceil((milestoneDate - today) / dayMs);
            return { daysLeft, milestone };
        }
    }

    return null;
}

function updateReminderBox(startDateStr) {
    const box = document.getElementById("reminderBox");
    const milestone = getNextMilestone(startDateStr);

    if (milestone) {
        box.textContent = `Через ${milestone.daysLeft} ${getDaysWord(milestone.daysLeft)} — ${milestone.milestone} дней вместе!`;
    } else {
        box.textContent = "Вы вместе уже больше 2000 дней!";
    }
}

function getDaysWord(n) {
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return "дней";
    if (lastDigit === 1) return "день";
    if (lastDigit >= 2 && lastDigit <= 4) return "дня";
    return "дней";
}