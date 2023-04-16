async function getPokemon(pokemonId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    fetch(apiUrl)
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw response;
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error(error);
        })
}

module.exports = getPokemon;
