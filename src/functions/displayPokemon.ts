import { PokemonInfo } from "../interface/Interface";

export const displayPokemon = (pokemonList: PokemonInfo[]) => {
    const resultsContainer = document.getElementById('searchResults') as HTMLDivElement;
    
    if(resultsContainer){
        resultsContainer.innerHTML = '';
        pokemonList.forEach((pokemon) => {
            const pokemonImage = document.createElement('img');
            pokemonImage.className = 'pokemonImg';
            pokemonImage.src = pokemon.images.small;
            pokemonImage.alt = 'Picture of Pokemon';
    
            pokemonImage.addEventListener('click', () => {
                pokemonImage.classList.add('holoEffect');
                setTimeout(() => {
                    pokemonImage.classList.remove('holoEffect');
                }, 1000);
            });
            
            resultsContainer.appendChild(pokemonImage);
        });
    }
    };

    export const resultsContainer = document.getElementById('searchResults') as HTMLDivElement;