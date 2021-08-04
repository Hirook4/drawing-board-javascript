// Initial Data
// Armazenar qual cor esta selecionada
let currentColor = 'black';
let canDraw = false;

// Selecionando o elemento Canvas
let screen = document.querySelector('#tela');
// Selecionando contexto 2D do Canvas
let context = screen.getContext('2d');

// Events
// Selecionaa todas as divs que tem a class "color" dentro da div "colorArea" e adiciona um event 
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

// Functions
// Clicar em uma das cores ativa essa função
function colorClickEvent(e) {
    // Selecionar qual cor recebeu o click
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    // Remove a class "Active" da cor e adiciona a que foi selecionada
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

// Função que vai ativar o modo desenho
function mouseDownEvent() {
    canDraw = true;
}
// Função que vai desenhar os traços na tela
function mouseMoveEvent(e) {
    if (canDraw) {
        // Pega a posição do mouse na pagina para saber onde desenhar os traços
        // Ajustando a posição em relação ao tamanho do canvas
        let pointX = e.pageX - screen.offsetLeft;
        let pointY = e.pageY - screen.offsetTop;
    }
}
// Função que vai desativar o modo desenho
function mouseUpEvent() {
    canDraw = false;
}

