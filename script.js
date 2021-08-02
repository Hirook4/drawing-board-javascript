// Armazenar qual cor esta selecionada
let currentColor = 'black';

// Selecionaa todas as divs que tem a class "color" dentro da div "colorArea" e adiciona um event 
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

// Clicar em uma das cores ativa essa função
function colorClickEvent(e) {
    // Selecionar qual cor recebeu o click
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    // Remove a class "Active" da cor e adiciona a que foi selecionada
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

