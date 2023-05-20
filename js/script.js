//бургер
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,



	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-left',
		prevEl: '.swiper-button-right',
	},



	watchOverFlow: true,
	slidesPerView: 1,
	spaceBetween: 0,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		540: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window width is >= 480px
		650: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1100: {
			slidesPerView: 3,
			spaceBetween: 30
		},

	}

});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






document.addEventListener('DOMContentLoaded', function() {
	// конечная дата, например 1 июля 2021
	const deadline = new Date(2023, 06, 01);
	// id таймера
	let timerId = null;
	// склонение числительных
	function declensionNum(num, words) {
	  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}
	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
	  const diff = deadline - new Date();
	  if (diff <= 0) {
		clearInterval(timerId);
	  }
	  const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
	  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
	  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
	  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
	  $days.textContent = days < 10 ? '0' + days : days;
	  $hours.textContent = hours < 10 ? '0' + hours : hours;
	  $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
	  $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
	  $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
	  $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
	  $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
	  $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
	}
	// получаем элементы, содержащие компоненты даты
	const $days = document.querySelector('.timer__days');
	const $hours = document.querySelector('.timer__hours');
	const $minutes = document.querySelector('.timer__minutes');
	const $seconds = document.querySelector('.timer__seconds');
	// вызываем функцию countdownTimer
	countdownTimer();
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);
  });

