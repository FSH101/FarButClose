// ui.js

export function showSection(sectionId) {
  const sections = ['mainSection', 'chatSection', 'questsSection', 'partnerSection'];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = (id === sectionId) ? 'block' : 'none';
    }
  });
}