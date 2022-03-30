// import {
//   newArray as cardArray
// }
// from './animal_array.js';

import ApiHelper from "../js/animal_array.js";
let apiHelper = new ApiHelper();


async function getPics() {
  let fullArray = [];

  const urls = [
    'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=kitten&image_type=photo&orientation=vertical&per_page=3',
    'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=puppy&image_type=photo&orientation=vertical&per_page=3',
    'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=giraffe&image_type=photo&orientation=vertical&per_page=3',
    'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=bird&image_type=photo&orientation=vertical&per_page=3',
    'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=foxes&image_type=photo&orientation=vertical&per_page=3',
    'https://pixabay.com/api/?key=24425778-0ae0487a46c08d8141810eff3&q=frog&image_type=photo&orientation=vertical&per_page=3',

  ];

  for (let i = 0; i < urls.length; i++) {
    fullArray.push(window["list" + i] = await apiHelper.apiRequest(urls[i]));
  }

  // console.log(fullArray);
  return fullArray;
}

async function organizePics() {
  let fullArray = await getPics();
  let picArray = [];
  for (let i = 0; i < fullArray.length; i++) {
    for (let j = 0; j < 2; j++) {
      // newArray[i] = {'name': jsons[i].hits[j].tags, 'img': jsons[i].hits[j].previewURL};
      picArray.push({
        'img': fullArray[i].hits[j].previewURL
      });
    }
  }

  // console.log(picArray);
  return picArray;
}

//define variables and get DOM element
let grid = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;
let modelOver = document.getElementsByClassName('model-overlay')[0];
let model = document.getElementsByClassName('model')[0];


// *********************
// ADDED:
// *********************
let cardArray = await organizePics();
console.log(cardArray);

let complete = cardArray.length / 2;

let start = 0;
let end = 2;
for (let i = 0; i < cardArray.length / 2; i++) {
  for (let j = start; j < end; j++) {
    cardArray[j].name = "card" + i;
  }
  start += 2;
  end += 2;
}

var cards = document.getElementById("cards")

for (var i = 0; i < cardArray.length; i++) {
  for (let j = 0; j < 1; j++) {
    var imgCard = document.createElement("div");
    imgCard.setAttribute("class", "memory-card");
    imgCard.setAttribute("data-framework", cardArray[i].name);

    // imgCard.setAttribute("data-id", ;
    var img = document.createElement("img");
    img.setAttribute("src", "https://pwatson25.github.io/wdd330/images/flip-card.png");
    img.setAttribute("class", "front-face");
    var img2 = document.createElement("img");
    img.setAttribute("class", "back-face");
    img2.setAttribute("src", cardArray[i].img);
    imgCard.appendChild(img);
    imgCard.appendChild(img2);
    cards.appendChild(imgCard);
  }
}


// const card = document.querySelectorAll(".imgCard");
// for (let i = 0; i < card.length; i++) {
//   card[i].addEventListener("click", function () {
//     card[i].classList.toggle("flipCard");
//   });
// }

// const matches = document.querySelectorAll('.imgCard');

// matches.forEach(match => {
//   match.addEventListener('click', flipCard)
// });

// document.addEventListener("DOMContentLoaded", function () {
//   //define functions 
//   createBoard(grid, cardArray);
//   arrangeCard();
//   playAgain.addEventListener("click", replay);

//   //add a click functions for images 
//   imgs = document.querySelectorAll("img");
//   Array.from(imgs).forEach(img =>
//     img.addEventListener("click", flipCard)
//   )
// });

//createBoard function
// function createBoard(grid, array) {
//   popup.style.display = "none";
//   array.forEach((arr, index) => {
//     let imgCard = document.createElement("div");
//     imgCard.setAttribute("class", "imgCard");
//     let imgCard_header = document.createElement("div");
//     imgCard_header.setAttribute("class", "imgCard_header");
//     let imgCard_header_hero = document.createElement("div");
//     imgCard_header_hero.setAttribute("class", "imgCard_header_hero");
//     let img = document.createElement("img");
//     img.setAttribute("src", "https://pwatson25.github.io/wdd330/images/flip-card.png");
//     img.setAttribute("data-id", index);
//     imgCard_header_hero.appendChild(img);
//     imgCard_header.appendChild(imgCard_header_hero);
//     imgCard.appendChild(imgCard_header);
//     grid.appendChild(imgCard);
//   })
// }

// arrangeCard function
// function arrangeCard() {
//   cardArray.sort(() => 0.5 - Math.random())
// }

// flip Card function
const matches = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  // this.classList.toggle('flip');
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return
  }

  secondCard = this;
  lockBoard = true;
  // hasFlippedCard = false;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  cardsWon += 1;
  scoreBoard.innerHTML = cardsWon;

  if (cardsWon == complete) {
    setTimeout(function () {
      modelOver.style.display = "block";
      model.style.display = "block";
    }, 1000);
  }
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    // lockBoard = false;
    resetBoard();
  }, 1000);
}


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  matches.forEach(match => {
    let ramdomPos = Math.floor(Math.random() * 12);
    match.style.order = ramdomPos;
  });
})();

matches.forEach(match => match.addEventListener('click', flipCard));

// let selected = this.dataset.id;
// let clicked = cardArray[selected].name
// cardsSelected.push(clicked);
// cardsId.push(selected);
// this.classList.add("flip");
// this.setAttribute("src", cardArray[selected].img);
// if (cardsId.length === 2) {
//   setTimeout(checkForMatch, 500);
// }
// }

// checkForMatch function
// function checkForMatch() {
//   let imgs = document.querySelectorAll("img");
//   let firstCard = cardsId[0];
//   let secondCard = cardsId[1];
//   if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
//     alert("you have found a match");
//     cardsWon += 1;
//     scoreBoard.innerHTML = cardsWon;
//     setTimeout(checkWon, 500)
//   } else {
//     imgs[firstCard].setAttribute("src", "https://pwatson25.github.io/wdd330/images/flip-card.png");
//     imgs[secondCard].setAttribute("src", "https://pwatson25.github.io/wdd330/images/flip-card.png");
//     alert("wrong, please try again");
//     imgs[firstCard].classList.remove("flip");
//     imgs[secondCard].classList.remove("flip");
//   }
//   cardsSelected = [];
//   cardsId = [];
//   clicks += 1;
//   clickBoard.innerHTML = clicks;
// }

// function checkWon() {
//   if (cardsWon == cardArray.length / 2) {
//     alert("You won")
//     setTimeout(() => popup.style.display = "flex", 300);
//   }
// }
// // The replay function

// function replay() {
//   arrangeCard();
//   grid.innerHTML = "";
//   createBoard(grid, cardArray);
//   cardsWon = 0;
//   clicks = 0;
//   clickBoard.innerHTML = 0;
//   scoreBoard.innerHTML = 0;
//   popup.style.display = "none";
// }