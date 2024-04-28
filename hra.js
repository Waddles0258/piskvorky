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

const buttonFunction = async (event) => {
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
    setTimeout(() => {
      alert(`vyhrál křížek`);
      location.reload();
    }, 550);
  } else if (winner === 'o') {
    setTimeout(() => {
      alert(`vyhrálo kolečko`);
      location.reload();
    }, 550);
  } else if (winner === null) {
    console.log('>');
  } else {
    setTimeout(() => {
      alert(`Hra skončila remízou!`);
      location.reload();
    }, 550);
  }

  if (winner === null && currentPlayer === 'cross') {
    console.log('křížek');

    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: findWinner,
          player: 'x',
        }),
      },
    );
    const data = await response.json();
    const { x, y } = data.position;
    const index = x + y * 10;
    index.click();
  }
};

document.querySelectorAll('.game__btn').forEach((prvek) => {
  prvek.addEventListener('click', buttonFunction);
});
