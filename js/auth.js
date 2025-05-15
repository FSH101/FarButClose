document.addEventListener("DOMContentLoaded", () => {
  const partnerName = "Алина";
  const togetherSince = "2022-11-01"; // изменить при необходимости

  const anniversary = getNextAnniversary(togetherSince);
  document.getElementById("partner-name").textContent = partnerName;
  document.getElementById("together-since").textContent = `Вы вместе с ${partnerName}`;
  document.getElementById("next-date").textContent = `${anniversary.milestone} дней — ${anniversary.date}`;
});