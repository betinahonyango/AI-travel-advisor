function displayPoem(response) {
  new Typewriter("#locations", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.getElementById("user-instructions");
  let apikey = "50do3122d9528t350cd40fbf4dc0035a";
  let prompt = `User instructions: Generate location or activities to engage in about ${instructionsInput.value}`;
  let context = `You are a knowledgable tourist advisor and assistant. You are in charge generating 4 best activities from the ${instructionsInput.value}. Kindly include a link to a website description about the location. Make sure to follow user instructions and write in basic html without displaying that it is in html.`;
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  let locationElement = document.getElementById("locations");
  locationElement.style.display = "block";

  axios.get(apiurl).then(displayPoem);
}
let locationFormElement = document.getElementById("form-generator");
locationFormElement.addEventListener("submit", generatePoem);
