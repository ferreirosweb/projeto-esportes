const botao = document.getElementById('botao-menu');
const menu = document.getElementById('menu');

botao.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});