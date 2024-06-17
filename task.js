let timer = document.getElementById('timer');

let count = Number(timer.textContent);

let timerId = setInterval(function () {
  timer.textContent = count;
  if (--count < 0) {
    clearInterval(timerId);
    alert('Вы победили в конкурсе');
  }
}, 1000);


