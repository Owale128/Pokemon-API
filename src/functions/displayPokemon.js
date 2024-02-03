"use strict";


 export const displayPokemon = (pokemonList) => {
     const resultsContainer = document.getElementById('searchResults');
     if (resultsContainer) {
        resultsContainer.innerHTML = '';
        pokemonList.forEach( (pokemon) => {
            var pokemonImage = document.createElement('img');
            pokemonImage.className = 'pokemonImg';
            pokemonImage.src = pokemon.images.small;
            pokemonImage.alt = 'Picture of Pokemon';
            pokemonImage.addEventListener('click', function () {
                pokemonImage.classList.add('holoEffect');
                setTimeout( () => {
                    pokemonImage.classList.remove('holoEffect');
                }, 1000);
            });
            resultsContainer.appendChild(pokemonImage);
        });
    }
};

export const resultsContainer = document.getElementById('searchResults');


