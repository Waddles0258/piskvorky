import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const user = document.querySelector('.game__img');

let currentPlayer = 'circle';

const pole = document.querySelectorAll('.game__btn');

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

  const prepisSymbolu = [...pole].map((button) => {
    if (button.classList.contains('board__field--circle')) {
      return 'o';
    } else if (button.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const winner = findWinner(prepisSymbolu);
  if (winner === 'x') {
    alert('vyhrál křížek');
    location.reload();
  } else if (winner === 'o') {
    alert('vyhrálo kolečko');
    location.reload();
  } else if (winner === null) {
    console.log('>');
  } else {
    alert('hra skončila remízou');
  }
};

document.querySelectorAll('.game__btn').forEach((prvek) => {
  prvek.addEventListener('click', buttonFunction);
});
