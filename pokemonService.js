async function getPokemon(pokemonId) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  const response = fetch(apiUrl);

  if (response.ok) {
    return response.json();
  } else {
    console.error(response);
  }
}

module.exports = getPokemon;
