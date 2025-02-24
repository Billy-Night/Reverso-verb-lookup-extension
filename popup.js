// popup.js
document
  .getElementById("conjugateButton")
  .addEventListener("click", function () {
    const verb = document.getElementById("verbInput").value.trim();
    if (verb) {
      const queryUrl = `https://conjugator.reverso.net/conjugation-french-verb-${verb}.html`;
      window.open(queryUrl, "_blank");
    }
  });
