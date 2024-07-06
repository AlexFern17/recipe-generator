function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#containerTwo", {
    strings: "The recipe has been updated",
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
}

let recipeElement = document.querySelector("#formInput");
recipeElement.addEventListener("submit", generateRecipe);
