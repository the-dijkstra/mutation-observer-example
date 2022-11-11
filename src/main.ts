(() => {
  const root = document.querySelector<HTMLDivElement>("#app")!;

  // Options for the observer (which mutations to observe)
  const config: MutationObserverInit = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    attributeFilter: ["class"],
  };

  // Callback function to execute when mutations are observed
  const callback: MutationCallback = (mutationList, _observer) => {
    for (const mutation of mutationList) {
      console.log(mutation);
    }
  };

  // Create an observer instance linked to the callback function
  const observer: MutationObserver = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(document.documentElement, config);

  // Adding a p node to html
  const para: HTMLParagraphElement = document.createElement("p");
  const node = document.createTextNode("Hello World");
  para.classList.add("test-class");
  para.appendChild(node);
  root.appendChild(para);

  // Later, you can stop observing
  // observer.disconnect();
})();

export {};
