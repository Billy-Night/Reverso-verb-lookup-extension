// background.js
chrome.contextMenus.create({
  id: "conjugateVerb",
  title: "Conjugate in French",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "conjugateVerb") {
    const selectedText = info.selectionText;
    const queryUrl = `https://conjugator.reverso.net/conjugation-french-verb-${selectedText}.html`;
    chrome.tabs.create({ url: queryUrl });
  }
});
