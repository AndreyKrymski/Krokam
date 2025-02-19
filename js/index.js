const burgerMenu = document.getElementById('burger__menu');
const navMenu = document.getElementById('nav__menu');
const navLinks = navMenu.querySelectorAll('a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

burgerMenu.addEventListener('click', (event) => {
  event.stopPropagation();
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedback__form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    let alertMessage = `${formDataObj.name} спасибо что вы отправили нам сообщение в ближайшее время мы с вами свяжемся\n`;
    alert(alertMessage);
   
  });
});
