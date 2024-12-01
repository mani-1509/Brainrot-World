document.addEventListener("DOMContentLoaded", function () {
  const ideaBtn = document.getElementById("idea-btn");
  const ideaBox = document.getElementById("idea-box");
  const quoteBtn = document.getElementById("quote-btn");
  const quoteBox = document.getElementById("quote-box");
  const form = document.getElementById("chaos-form");
  const feedback = document.getElementById("idea-feedback");

  const ideas = [
    "A pillow that doubles as a mini trampoline.",
    "A toothbrush that plays your favorite music while you brush your teeth.",
    "A pair of socks that automatically match each other.",
    "Glasses that show your reflection as a superhero.",
    "Miniature flying cars powered by rubber bands.",
  ];

  const quotes = [
    "The madder the idea, the better the invention!",
    "Not all great ideas are good, but all great ideas are chaotic!",
    "A brainrot a day keeps the normality away.",
    "Create first, think later.",
    "The best ideas start with a spark of madness!",
  ];

  ideaBtn.addEventListener("click", function () {
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    ideaBox.textContent = randomIdea;
  });

  quoteBtn.addEventListener("click", function () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = randomQuote;
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const ideaInput = document.getElementById("chaos-idea").value;
    if (ideaInput) {
      feedback.textContent = `Thank you for contributing your chaotic idea: "${ideaInput}"`;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Ideas and Quotes functionality
  const ideaBtn = document.getElementById("idea-btn");
  const ideaBox = document.getElementById("idea-box");
  const quoteBtn = document.getElementById("quote-btn");
  const quoteBox = document.getElementById("quote-box");
  const form = document.getElementById("chaos-form");
  const feedback = document.getElementById("idea-feedback");

  const ideas = [
    "A pillow that doubles as a mini trampoline.",
    "A toothbrush that plays your favorite music while you brush your teeth.",
    "A pair of socks that automatically match each other.",
    "Glasses that show your reflection as a superhero.",
    "Miniature flying cars powered by rubber bands.",
  ];

  const quotes = [
    "The madder the idea, the better the invention!",
    "Not all great ideas are good, but all great ideas are chaotic!",
    "A brainrot a day keeps the normality away.",
    "Create first, think later.",
    "The best ideas start with a spark of madness!",
  ];

  ideaBtn.addEventListener("click", function () {
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    ideaBox.textContent = randomIdea;
  });

  quoteBtn.addEventListener("click", function () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = randomQuote;
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const ideaInput = document.getElementById("chaos-idea").value;
    if (ideaInput) {
      feedback.textContent = `Thank you for contributing your chaotic idea: "${ideaInput}"`;
    }
  });
});
