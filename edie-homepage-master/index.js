const $burger = document.querySelector('.burger');
const $list = document.querySelector('.nav__links');

const changeBurger = () => {
  $burger.classList.toggle('changeButton');
  $list.classList.toggle('showList');
};

$burger.addEventListener('click', changeBurger, false);
