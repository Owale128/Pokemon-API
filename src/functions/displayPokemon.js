"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
exports.resultsContainer = exports.displayPokemon = void 0;
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
exports.displayPokemon = displayPokemon;
exports.resultsContainer = document.getElementById('searchResults');
