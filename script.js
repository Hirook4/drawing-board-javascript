// Initial Data
// Armazenar qual cor esta selecionada
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

// Selecionando o elemento Canvas
let screen = document.querySelector('#tela');
// Selecionando contexto 2D do Canvas
let context = screen.getContext('2d');

// Events
// Selecionaa todas as divs que tem a class "color" dentro da div "colorArea" e adiciona um event 
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

document.querySelector('.clear').addEventListener('click', clearScreen);

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
function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}
// Função que vai desenhar os traços na tela
function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY)
    }
}
// Função que vai desativar o modo desenho
function mouseUpEvent() {
    canDraw = false;
}

// Função que vai desenhar os traços na tela
function draw(x, y) {
    // Pegando posição do cursor
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    // Criando o desenho
    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = "round";
    context.moveTo(mouseX, mouseY);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = currentColor;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

// Função responsavel por limpar o quadro
function clearScreen() {
    // Zera o processo de desenho
    context.setTransform(1, 0, 0, 1, 0, 0);
    // Limpa totalmente o quadro
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}