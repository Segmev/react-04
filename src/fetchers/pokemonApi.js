export function fetchPokemonById(id, dispatch) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      fetchPokemonDescription(data.species.url, dispatch);
      return data;
    })
    .then((data) =>
      dispatch({ action: "setPokemon", params: { pokemon: data } })
    )
    .catch((e) => console.error(e));
}

export function fetchPokemonDescription(url, dispatch) {
  fetch(url)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        action: "setPokemonDescription",
        params: { description: data?.flavor_text_entries[0]?.flavor_text },
      })
    )
    .catch((e) => console.error(e));
}
