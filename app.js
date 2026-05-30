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
  const image = data.sprites.front_default;

  const imageElement = document.getElementById("pokemonSprite");
  imageElement.src = image;
  imageElement.style.display = "block";

  const name = data.name;
  const height = data.height;
  const weight = data.weight;
  const type1 = data.types[0].type.name;
  const type2 = data.types[1]?.type.name || "";

  //Abilities data
  const ability1 = data.abilities[0].ability.name;
  const ability2 = data.abilities[1]?.ability.name;
  const ability3 = data.abilities[2]?.ability.name;

  // Data : type, name, height, weight
  document.getElementById("pokemonDetails").innerHTML =
    `<div class="pokemonInformation">
      <h2>Name : ${name}</h2>
      <P>Primary Type : ${type1} </p>
      <P>Secondary Type : ${type2}</P>
      <p>Height :${height}</p>
      <p>Weight : ${weight}</p>
      <p>Abilities : ${ability1} , ${ability2} , ${ability3}</P>
   </div>`;

  document.getElementById("pokemonInput").value = "";
}


function generateCard(){
  document.getElementById("pokemon-app__ai-card").innerHTML = `
  <div class="pokemonAiCard">

  <img src="${pokemonData.sprites.front_default}">
  
  <h2>${pokemonData.name}</h2>

  <p>${pokemonData.types[0].type.name}</P>

  <P>A powerful pokemon known for its ${pokemonData.abilities[0].ability.name} ability.</P>
  
  
  </div>`
  
}
