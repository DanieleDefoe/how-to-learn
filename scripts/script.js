let kmCounter = document.getElementById('counter-km');
let dayCounter = document.getElementById('counter-days');

let kostromaOffset = document.getElementById('city-kostroma').offsetTop;
let ekbOffset = document.getElementById('city-ekb').offsetTop;
let omskOffset = document.getElementById('city-omsk').offsetTop;
let yablPerevalOffset = document.getElementById('city-yablonovy-pereval').offsetTop;
let khabarovskOffset = document.getElementById('city-khabarovsk').offsetTop;

let scrollY = window.pageYOffset;

document.addEventListener('scroll', () => {
  // если позиция скролла меньше или равна позиции блока с городом Кострома
  if (scrollY <= kostromaOffset) {
// тогда в HTML переменных kmCounter и dayCounter записываем «ноль»
    kmCounter.textContent = 0;
    dayCounter.textContent = 0;
// если позиция скролла меньше или равна позиции блока с городом Екатеринбург
  } else if (scrollY <= ekbOffset) {
// тогда в HTML переменных kmCounter и dayCounter записываем 376 (км) и 1 (первый день в пути)
    kmCounter.textContent = 376;
    dayCounter.textContent = 1;
// а когда позиция скролла больше, чем у блока с Екатеринбургом, и меньше, чем у блока с Омском, сохраняем в переменных 1819 (км) и 2 (дня в пути)
  } else if (scrollY <= omskOffset) {
    kmCounter.textContent = 1819;
    dayCounter.textContent = 2;
// далее по аналогии
  } else if (scrollY <= yablPerevalOffset) {
    kmCounter.textContent = 6110;
    dayCounter.textContent = 4;
  } else if (scrollY <= khabarovskOffset) {
    kmCounter.textContent = 8534;
    dayCounter.textContent = 6;
// если позиция скролла превысила координату блока с Хабаровском - мы на последнем перегоне
  } else {
    kmCounter.textContent = 9300;
    dayCounter.textContent = 6;
  }
})
