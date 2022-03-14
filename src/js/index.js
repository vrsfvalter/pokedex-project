/*goal: hide the opened card and show pokemon card when click into the nav bar with pokemons faces

-use 2 elements: listagem and cartao-pokemon
-create them vars
-add eventlistener and functions
    -remove class 'aberto' of the pokemoncard 'aberto'
*/

const listaSelect = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelect.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        /*remove class aberto from the current showing pokemon card*/
        const cartaoAberto = document.querySelector('.aberto')
        cartaoAberto.classList.remove('aberto')


        const idPokemonSelecionado = pokemon.attributes.id.value
        console.log(idPokemonSelecionado)

        const idCardSelect = 'cartao-'+idPokemonSelecionado
        const cartaoPAbrir = document.getElementById(idCardSelect)
        cartaoPAbrir.classList.add('aberto')

        const pokemonAtiva = document.querySelector('.ativa')
        pokemonAtiva.classList.remove('ativa')

        /*remove class ativa from the pokemon */

        const pokemonSelecionadoLista = document.getElementById(idPokemonSelecionado)

        pokemonSelecionadoLista.classList.add('ativa')

    })
}) /*event listener added, with his functions*/