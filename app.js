// fetch = function used for making http request tp fetch resources;
//         (JSON style data, images, files)

async function searchPokemon() {
  let pokemonName = document.getElementById("pokemonInput").value.toLowerCase();

  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  let data = await response.json();
  console.log(data);

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
  const ability1 = data.abilities[0].ability.name
  const ability2 = data.abilities[1]?.ability.name
  const ability3 = data.abilities[2]?.ability.name

  // Data : type, name, height, weight
  document.getElementById("pokemonDetails").innerHTML =
    `<div class="pokemonInformation">
      <h2>Name : ${name}</h2>
      <P>Primary Type : ${type1} </p>
      <P>Secondary Type : ${type2}</P>
      <p>Height :${height}</p>
      <p>Weight : ${weight}</p>
      <p> ability1 : ${ability1}</p>
      <p> ability2 : ${ability2}</p>
      <p> ability3 : ${ability3}</p>
   </div>`;

  document.getElementById("pokemonInput").value = "";
}
