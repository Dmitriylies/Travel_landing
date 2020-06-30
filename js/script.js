//самовызывающ. функция для бэкграунда меню при скроле
(function () {
		const header = document.querySelector('.header');
		window.onscroll = () => {
			if (window.pageYOffset > 100) {
				header.classList.add('header_active');
			} else {
				header.classList.remove('header_active');
			}
		};
}());

//Вариант бургера из видео: (без jquery)
(function (){
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__menu');
	const burgerIcon = document.querySelector('.header__burger');
	const body = document.querySelector('body');
	const menuCloseItem = document.querySelector('.header__menu');
		burgerItem.addEventListener('click', () => {
			menu.classList.toggle('active');
			burgerIcon.classList.toggle('active');
			body.classList.toggle('lock');
		});
		menuCloseItem.addEventListener('click', () => {
			menu.classList.toggle('active');
			burgerIcon.classList.toggle('active');
		});
}());

// Scroll to anchors
(function () {

	const smoothScroll = function (targetEl, duration) {
		 const headerElHeight =  document.querySelector('.header').clientHeight;
		 let target = document.querySelector(targetEl);
		 let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		 let startPosition = window.pageYOffset;
		 let startTime = null;
			 const ease = function(t,b,c,d) {
			  t /= d / 2;
			  if (t < 1) return c / 2 * t * t + b;
			  t--;
			  return -c / 2 * (t * (t - 2) - 1) + b;
		 };
			 const animation = function(currentTime){
			  if (startTime === null) startTime = currentTime;
			  const timeElapsed = currentTime - startTime;
			  const run = ease(timeElapsed, startPosition, targetPosition, duration);
			  window.scrollTo(0,run);
			  if (timeElapsed < duration) requestAnimationFrame(animation);
		 };
		 requestAnimationFrame(animation);
	};

	const scrollTo = function () {
		 const links = document.querySelectorAll('.js-scroll');
		 links.forEach(each => {
			  each.addEventListener('click', function () {
					const currentTarget = this.getAttribute('href');
					smoothScroll(currentTarget, 1000);
			  });
		 });
	};
	scrollTo();
}());