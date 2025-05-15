function showQuest() {
  fetch("quests/quests.json")
    .then(res => res.json())
    .then(quests => {
      const today = new Date().toISOString().split("T")[0];
      const hash = today.replace(/-/g, "");
      const index = parseInt(hash.slice(-2)) % quests.length;
      const quest = quests[index];
      const savedAnswer = localStorage.getItem(`quest-${today}`) || "";

      document.getElementById("main-content").innerHTML = `
        <h2>Вопрос дня</h2>
        <p>${quest.question}</p>
        <textarea id="answer" placeholder="Ваш ответ...">${savedAnswer}</textarea>
        <button id="save-answer">Сохранить</button>
      `;

      document.getElementById("save-answer").addEventListener("click", () => {
        const answer = document.getElementById("answer").value;
        localStorage.setItem(`quest-${today}`, answer);
        alert("Ответ сохранён!");
      });
    })
    .catch(() => {
      document.getElementById("main-content").innerHTML = `<p>Не удалось загрузить вопрос дня.</p>`;
    });
}