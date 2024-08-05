function generateQuote(event) {
    event.preventDefault();


new Typewriter("#stoic-quote", {
  strings:
    "“Be tolerant with others and strict with yourself.” – Marcus Aurelius",
  autoStart: true,
  delay: 1,
  cursor: "",
});


}
const quoteFormElement = document.querySelector("#quote-generator-form")
quoteFormElement.addEventListener('submit', generateQuote);


