const quotes = [
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
    author: "Samuel Beckett",
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    quote: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote: "We can do anything we want to if we stick to it long enough.",
    author: "Helen Keller",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
