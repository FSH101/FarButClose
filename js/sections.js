function showSection(section) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(s => s.style.display = "none");

    const selected = document.getElementById(`${section}Section`);
    if (selected) selected.style.display = "block";
}