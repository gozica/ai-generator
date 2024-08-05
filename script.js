function displayQuote(response) {
  new Typewriter("#stoic-quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  const instructionsInput = document.querySelector("#user-instructions");
  const apiKey = "64429b6f596o3223b0tda144cff94530";
  const prompt = `Generate a stoic quote ${instructionsInput.value}`;
  const context =
    "You are a philosophy expert and love stoicism. Your mission is to generate a stoic quote in basic HTML. Make sure to follow user instructions. Please only include the quote to display to the user.";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

const quoteElement = document.querySelector("#stoic-quote")
quoteElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayQuote);
}
const quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
