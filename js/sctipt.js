let addedOne = document.querySelector('.added-one');
let arrowOne = document.querySelector('.img-one');
let lineOne = document.querySelector('.line-one');

lineOne.addEventListener('click', function () {
  if (addedOne.style.display === (addedOne.style.display = 'none')) {
    addedOne.style.display = 'flex';
    arrowOne.style.rotate = '180deg';
    lineOne.style.fontWeight = 'bold';
  } else {
    arrowOne.style.rotate = '0deg';
    lineOne.style.fontWeight = 'normal';
  }
});

let addedTwo = document.querySelector('.added-two');
let arrowTwo = document.querySelector('.img-two');
let lineTwo = document.querySelector('.line-two');

lineTwo.addEventListener('click', function () {
  if (addedTwo.style.display === (addedTwo.style.display = 'none')) {
    addedTwo.style.display = 'flex';
    arrowTwo.style.rotate = '180deg';
    lineTwo.style.fontWeight = 'bold';
  } else {
    arrowTwo.style.rotate = '0deg';
    lineTwo.style.fontWeight = 'normal';
  }
});

let addedThree = document.querySelector('.added-three');
let arrowThree = document.querySelector('.img-three');
let lineThree = document.querySelector('.line-three');

lineThree.addEventListener('click', function () {
  if (addedThree.style.display === (addedThree.style.display = 'none')) {
    addedThree.style.display = 'flex';
    arrowThree.style.rotate = '180deg';
    lineThree.style.fontWeight = 'bold';
  } else {
    arrowThree.style.rotate = '0deg';
    lineThree.style.fontWeight = 'normal';
  }
});

let addedFour = document.querySelector('.added-four');
let arrowFour = document.querySelector('.img-four');
let lineFour = document.querySelector('.line-four');

lineFour.addEventListener('click', function () {
  if (addedFour.style.display === (addedFour.style.display = 'none')) {
    addedFour.style.display = 'flex';
    arrowFour.style.rotate = '180deg';
    lineFour.style.fontWeight = 'bold';
  } else {
    arrowFour.style.rotate = '0deg';
    lineFour.style.fontWeight = 'normal';
  }
});

let addedFive = document.querySelector('.added-five');
let arrowFive = document.querySelector('.img-five');
let lineFive = document.querySelector('.line-five');

lineFive.addEventListener('click', function () {
  if (addedFive.style.display === (addedFive.style.display = 'none')) {
    addedFive.style.display = 'flex';
    arrowFive.style.rotate = '180deg';
    lineFive.style.fontWeight = 'bold';
  } else {
    arrowFive.style.rotate = '0deg';
    lineFive.style.fontWeight = 'normal';
  }
});
