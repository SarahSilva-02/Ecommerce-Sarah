let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];//procura o 'favoritos'e tranforma a string e array se nn tiver cria um vazio
const container = document.querySelector('.lista-favoritos');//seleciona o card q adiciona

function salvarFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function renderizarFavoritos() {

    if (!container) {
        console.error("Container .lista-favoritos não encontrado");
        return;
    }

    container.innerHTML = '';

    favoritos.forEach((item, index) => {

        const card = document.createElement('div');
        card.classList.add('card-favorito');

        card.innerHTML = `
            <img src="${item.img}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p>${item.preco}</p>
            <button class="btn-remover">Remover </button>
        `;

        card.querySelector('.btn-remover').addEventListener('click', () => {
            favoritos.splice(index, 1);

            salvarFavoritos();
            renderizarFavoritos();
        });

        container.appendChild(card);
    });
}

renderizarFavoritos();