// content.js
document.addEventListener("dblclick", function (event) {
  const selection = window.getSelection().toString().trim();
  if (selection) {
    chrome.runtime.sendMessage({ verb: selection });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.verb) {
    const queryUrl = `https://conjugator.reverso.net/conjugation-french-verb-${message.verb}.html`;
    window.open(queryUrl, "_blank");
  }
});
