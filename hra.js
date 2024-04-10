let currentPlayer = 'circle';

const user = document.querySelector('.game__img');

const buttonRestart = (event) => {
  if (confirm('Opravdu chceš začít znovu?') === true) {
    event.setAttribute('href', 'hra.html');
  } else {
    event.preventDefault();
  }
};

document
  .querySelector('.game__navigation-container--restart')
  .addEventListener('click', buttonRestart);

const buttonFunction = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    user.setAttribute('src', 'cross.svg');
    event.target.disabled = true;
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    user.setAttribute('src', 'circle.svg');
    event.target.disabled = true;
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', buttonFunction);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', buttonFunction);
