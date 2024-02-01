"use strict";

const displayPokemon = (pokemonList) => {
    var resultsContainer = document.getElementById('searchResults');
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
        pokemonList.forEach(function (pokemon) {
            var pokemonImage = document.createElement('img');
            pokemonImage.className = 'pokemonImg';
            pokemonImage.src = pokemon.images.small;
            pokemonImage.alt = 'Picture of Pokemon';
            pokemonImage.addEventListener('click', function () {
                pokemonImage.classList.add('holoEffect');
                setTimeout(function () {
                    pokemonImage.classList.remove('holoEffect');
                }, 1000);
            });
            resultsContainer.appendChild(pokemonImage);
        });
    }
};
const _displayPokemon = displayPokemon;
export { _displayPokemon as displayPokemon };
export const resultsContainer = document.getElementById('searchResults');
