function updateGreeting() {
    const greetingEl = document.getElementById("greeting");
    const daysTogetherEl = document.getElementById("daysTogether");

    const name = localStorage.getItem("partnerName");
    const startDate = localStorage.getItem("relationshipStart");

    if (name && startDate) {
        const start = new Date(startDate);
        const now = new Date();
        const diffTime = Math.abs(now - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        greetingEl.innerText = `Привет, ${name}!`;
        daysTogetherEl.innerText = `Вы вместе уже ${diffDays} дней.`;
    }
}