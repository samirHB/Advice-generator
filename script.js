"use strict";
const generate = document.getElementById("dice");
const quote = document.getElementById("quote");
let quoteId = document.getElementById("advice-title");
let myQuote;

async function generateQuote() {
  const apiUrl = "https://api.adviceslip.com/advice";

  try {
    let response = await fetch(apiUrl);
    myQuote = await response.json();
  } catch (error) {
    console.log(error);
  }
}
generate.addEventListener("click", function () {
  quote.textContent = myQuote.slip.advice;
  quoteId.textContent = `ADVICE ${myQuote.slip.id}`;
});

generateQuote();

