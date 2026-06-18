const botoesFav = document.querySelectorAll('.bnt-adicionarSacola');

let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];// pega od fvs salvos ou cria lista vazia


function salvarFavoritos() {// salvar no localStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

botoesFav.forEach(botao => {
    botao.addEventListener('click', () => {

        const produto = {
            nome: botao.dataset.nome,
            preco: botao.dataset.preco,
            img: botao.dataset.img
        };

        // verifica se já existe
        const jaExiste = favoritos.some(item => item.nome === produto.nome);// verifica se já existe o fav salvo

        if (jaExiste) {
            alert('Esse produto já faz parte de seus ❤️favoritos');
            return;
        }

        favoritos.push(produto);
        salvarFavoritos();

        alert('Adicionado aos ❤️favoritos ');
    });
});


//BOTAO OFERTAS
const radio = document.querySelector('.btn-manual') 
let contador = 1

document.getElementById('radio1').checked = true //crtz q vai aperecer a oferta1
//                     radio1 fique marcado, quando abrir os site 

setInterval(() => {//intervalo entre uma oferta e outra
    proximaOferta()
}, 4000)

function proximaOferta(){
    contador++//soma para ir a proxima img

    if(contador > 3){//verficação
        contador = 1
    } document.getElementById('radio' + contador).checked = true //bolinha do input aumenta/prox o numero conforme o contador aumenta
}