// Функция для проверки, была ли нажата лунка с кротом
let score = 0;
let lives = 0;
function checkForMoleClick(e) {
    if (e.className.includes('hole_has-mole')) {    
        score++;
        updateScore();
        if (score === 10) {
            alert('Вы победили!');
            startGame();
        }
    } else {
        lives++;
        updatMisses()
        if (lives === 5) {
            alert('Вы проиграли!');
            startGame();
        }
    }
}

// Обновление счетчика попаданий
function updateScore() {
    document.getElementById('dead').textContent = score;
}

// Обновление счетчика промахов
function updatMisses() {
    document.getElementById('lost').textContent = lives;
}

// Инициализация игры
function startGame() {
    score = 0;
    lives = 0;
    updateScore();
    updatMisses();
}

const holes  = document.querySelectorAll('.hole');
function getHole(index) {    
    return holes[index];
}

for (let i = 0; i < holes.length; i++) {
    let hole  =  getHole(i);
    hole.addEventListener('click', function() {
        return checkForMoleClick(hole);
    });
}
