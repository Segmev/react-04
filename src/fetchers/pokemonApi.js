function fetchPokemon(identifier, dispatch) {
  const url = `https://pokeapi.co/api/v2/pokemon/${identifier}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      fetchPokemonDescription(data.species.url, dispatch);
      return data;
    })
    .then((data) =>
      dispatch({ action: "setPokemon", params: { pokemon: data } })
    )
    .catch((e) => console.error("catched error: " + e));
}

export function fetchPokemonById(id, dispatch) {
  fetchPokemon(id, dispatch);
}

export function fetchPokemonByName(name, dispatch) {
  fetchPokemon(name, dispatch);
}

export function fetchPokemonDescription(url, dispatch) {
  fetch(url)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        action: "setPokemonDescription",
        params: {
          description: data?.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
          ).flavor_text,
        },
      })
    )
    .catch((e) => console.error("catched error: " + e));
}
