function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("ru-RU", { day: 'numeric', month: 'long', year: 'numeric' });
}

function getNextAnniversary(startDate) {
  const now = new Date();
  const start = new Date(startDate);
  const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const nextMilestone = Math.ceil(diffDays / 50) * 50;

  const nextDate = new Date(start.getTime() + nextMilestone * 24 * 60 * 60 * 1000);
  return {
    milestone: nextMilestone,
    date: formatDate(nextDate)
  };
}
