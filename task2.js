// Функция для обновления размера кнопки
function updateButtonSize() {
    const button = document.getElementById('cookie');
    if (button.width === 200) {
     
        button.width = 230;
    } else {
    
        button.width = 200;
    }
  }
  
  // Функция для увеличения счётчика кликов
function increaseClickCounter() {
    const clickCounter = document.getElementById('clicker__counter');
    const currentCount = parseInt(clickCounter.textContent) || 0;
    clickCounter.textContent = currentCount + 1;
}

const cookieButton = document.getElementById('cookie');
cookieButton.onclick = function() {
    increaseClickCounter();
    updateButtonSize();
}