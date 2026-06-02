// fetch = function used for making http request tp fetch resources;
//         (JSON style data, images, files)

let pokemonData;

async function searchPokemon() {
  let pokemonName = document.getElementById("pokemonInput").value.toLowerCase();

  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  let data = await response.json();
  pokemonData = data;

  // IMAGE data
  const image = data.sprites.other.home.front_default;

  const imageElement = document.getElementById("pokemonSprite");
  imageElement.src = image;
  imageElement.style.display = "block";

  const name = data.name;
  const height = data.height;
  const weight = data.weight;
  
  //Type
  const type = data.types.map(item => item.type.name).join(" , ")

  //Abilities data
  const abilities = data.abilities.map(item => item.ability.name).join(" , ")

  // Data : type, name, height, weight
  document.getElementById("pokemonDetails").innerHTML =
    `<div class="pokemonInformation">
      <h2>Name : ${name}</h2>
      <P>Type : ${type} </p>
      <p>Height :${height}</p>
      <p>Weight : ${weight}</p>
      <p>Abilities : ${abilities}</P>
   </div>`;

  document.getElementById("pokemonInput").value = "";
}

function generateCard() {
  console.log(pokemonData);
  document.getElementById("pokemon-app__ai-card").innerHTML = `
  <div class="pokemonAiCard">

  <img class="aiGeneratedCardImg" src="${pokemonData.sprites.other.dream_world.front_default}">
  
  <h2>${pokemonData.name}</h2>

  <p>${pokemonData.types[0].type.name}/${pokemonData.types[1]?.type.name}</P>

  <P>A powerful pokemon known for its ${pokemonData.abilities[0].ability.name} ability.</P>
  
  
  </div>`;

}
