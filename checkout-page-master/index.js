// Inputs
const arrayInputs = document.querySelectorAll('.form__input');
const inputs = [...arrayInputs];

const arrayGroupInputs = document.querySelectorAll('.form__groupInput');
const groupInputs = [...arrayGroupInputs];

// Checks
const check = document.querySelector('.form__checkbox');
const groupCheck = document.querySelector('.form__groupCheck');

// Select
const select = document.querySelector('.form__select');

// Button
const button = document.querySelector('.form__button');

// Message
const message = document.querySelector('.message');

// Check inputs
const checkEmpty = (event) => {
  if (!event.path[0].value) {
    event.path[2].classList.add('error');
  } else {
    event.path[2].classList.remove('error');
  }
};

const submit = () => {
  message.classList.remove('active');

  !check.checked
    ? groupCheck.classList.add('error')
    : groupCheck.classList.remove('error');

  !inputs[0].value
    ? groupInputs[0].classList.add('error')
    : groupInputs[0].classList.remove('error');

  !inputs[1].value
    ? groupInputs[1].classList.add('error')
    : groupInputs[1].classList.remove('error');

  !inputs[2].value
    ? groupInputs[2].classList.add('error')
    : groupInputs[2].classList.remove('error');

  !inputs[3].value
    ? groupInputs[3].classList.add('error')
    : groupInputs[3].classList.remove('error');

  !inputs[4].value
    ? groupInputs[4].classList.add('error')
    : groupInputs[4].classList.remove('error');

  select.value === ''
    ? groupInputs[5].classList.add('error')
    : groupInputs[5].classList.remove('error');

  !inputs[5].value
    ? groupInputs[6].classList.add('error')
    : groupInputs[6].classList.remove('error');

  if (
    check.checked &&
    inputs[0].value &&
    inputs[1].value &&
    inputs[2].value &&
    inputs[3].value &&
    inputs[4].value &&
    inputs[5].value
  ) {
    message.classList.add('active');

    console.log({
      email: inputs[0].value,
      phone: inputs[1].value,
      name: inputs[2].value,
      address: inputs[3].value,
      city: inputs[4].value,
      postal: inputs[5].value,
    });

    check.checked = false;
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
    inputs[3].value = '';
    inputs[4].value = '';
    inputs[5].value = '';
  }
};

// Add listeners

// Inputs
inputs.map((item) => {
  item.addEventListener('focusout', checkEmpty, false);
  item.addEventListener('input', checkEmpty, false);
});

//Button
button.addEventListener('click', submit, false);

// ----------- Controls -----------

const resArray = document.querySelectorAll('.info__res');
const res = [...resArray];

const sumArray = document.querySelectorAll('.info__sum');
const sum = [...sumArray];

const addResult = () => {
  const resultString = document.querySelector('.info__result');
  const resultNumber = parseInt(resultString.innerText);

  resultString.innerText = resultNumber + 1;
};

const resResult = () => {
  const resultString = document.querySelector('.info__result');
  const resultNumber = parseInt(resultString.innerText);

  resultNumber > 0
    ? (resultString.innerText = resultNumber - 1)
    : (resultString.innerText = 0);
};

res.map((item) => {
  item.addEventListener('click', resResult, false);
});

sum.map((item) => {
  item.addEventListener('click', addResult, false);
});
