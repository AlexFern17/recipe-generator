function displayRecipe(response) {
  new Typewriter("#containerTwo", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientsInput = document.querySelector("#ingredients");
  let apiKey = "097041f091d320fa0aa8fbb43t7o1142";
  let prompt = `User instructions: Generate a simple recipe including ${ingredientsInput.value}`;
  let context =
    "You are a culinary expert with a vast amount of short receipes for delicious food.  Your purpose is to generate a simple recipe with minimal steps in basic HTML.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeFormElement = document.querySelector("#containerTwo");
  recipeFormElement.classList.remove("hidden");
  recipeFormElement.innerHTML = `<div class="blink">⏳ Generating ⌛</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeElement = document.querySelector("#formInput");
recipeElement.addEventListener("submit", generateRecipe);
