var typed = new Typed(".multiple-text", {
   strings: ["Фронтенд Разработчик", "Фрилансер"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true,
});

// Бургер меню
$(document).ready(function () {
   $('.burger').click(function () {
      $('.burger__main, .burger, .burger-bg, .navbar').toggleClass('active');
   });
});