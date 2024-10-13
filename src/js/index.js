const listPokedevs = document.querySelectorAll('.pokedev');

listPokedevs.forEach(pokedev => {
    pokedev.addEventListener('click', () => {
        // Remover a classe 'selecionado' de todos os pokedevs
        listPokedevs.forEach(item => item.classList.remove('selecionado'));

        // Adicionar a classe 'selecionado' ao pokedev clicado
        pokedev.classList.add('selecionado');

        // Trocar o cartão (mantendo o código anterior)
        const cartaoPokedevAberto = document.querySelector('.aberto');
        if (cartaoPokedevAberto) {
            cartaoPokedevAberto.classList.remove('aberto');
        }

        const idCartaoPokedevSelecionado = pokedev.id;
        const idCardpokedevParaAbrir = 'cartao-' + idCartaoPokedevSelecionado;
        const cartaoParaAbrir = document.getElementById(idCardpokedevParaAbrir);
        if (cartaoParaAbrir) {
            cartaoParaAbrir.classList.add('aberto');
        }
    });
});




