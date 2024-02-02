"use strict";

export const displayPokemon = (pokemonList) => {
 const resultsContainer = document.getElementById('searchResults');
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
        pokemonList.forEach(function (pokemon) {
            console.log(pokemon)
            var pokemonImage = document.createElement('img');
            console.log(pokemonImage)
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

export const resultsContainer = document.getElementById('searchResults');
