 const botao = document.getElementById('botao-menu'); //.getElementById():É um método do JavaScript utilizado para encontrar um elemento HTML pelo seu atributo id.Que no caso seria o 'botão menu'//.
const menu = document.getElementById('menu'); //faz a mesma função da de cima so muda o identificador//

botao.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});