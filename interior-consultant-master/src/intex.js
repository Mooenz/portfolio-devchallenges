const button = document.querySelector('.header__burgerIco');
const list = document.querySelector('.header__list');

const toggleButton = () => {
  list.classList.toggle('header__listShow');
  button.classList.toggle('header__burgerIcoClose')
};

button.addEventListener('click', toggleButton, false);
