//Listeners for burger button
const $burger = document.querySelector('.burger');
const $list = document.querySelector('.nav__links');

const changeBurger = () => {
  $burger.classList.toggle('changeButton');
  $list.classList.toggle('showList');
};

$burger.addEventListener('click', changeBurger, false);

//Listeners for nav list

const $itemsNode = document.querySelectorAll('.nav__link');
const $items = [...$itemsNode];

$items.map((item) => {
  const closeMenu = () => {
    $list.classList.remove('showList');
  }

  item.addEventListener("click", closeMenu, false)
})