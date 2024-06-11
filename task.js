let timer = document.getElementById('timer');

let count = Number(timer.textContent);

setInterval(function () {
  timer.textContent = count;
  if (--count < 0) {
    clearInterval(this);
    alert('Вы победили в конкурсе');
  }
}, 1000);


