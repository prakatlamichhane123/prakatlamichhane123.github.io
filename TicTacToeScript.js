const boxes = document.querySelectorAll(".box");
const winshow = document.querySelector(".winshow");
const turnshow = document.querySelector(".turnshow");
let ptv = "O";
let win = false;
let draw = false;
let winner;
let boxClicks = 0;
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function playerTurn() {
  if (ptv === "X") {
    return "O";
  } else if (ptv === "O") {
    return "X";
  }
}

function change() {
  if (ptv === "X") {
    ptv = "O";
  } else if (ptv === "O") {
    ptv = "X";
  }
}

function winCheck() {
  wins.forEach((e) => {
    if (
      boxes[e[0]].children[0].innerHTML === boxes[e[1]].children[0].innerHTML &&
      boxes[e[0]].children[0].innerHTML === boxes[e[2]].children[0].innerHTML &&
      boxes[e[0]].children[0].innerHTML !== ""
    ) {
      winner = boxes[e[0]].children[0].innerHTML;
      win = true;
      winshow.innerHTML = winner + " - Won The Game!!";
      turnshow.innerHTML = "";
    }
  });
  boxes.forEach((e) => {
    if (win === true) {
      e.removeEventListener("click", function () {});
    }
  });

  if (win===false &&boxClicks >= 9 ) {
      turnshow.style.color="red"
      turnshow.innerHTML = "Draw!! Please Reset.";
  }
}

boxes.forEach((e) => {
  e.addEventListener("click", () => {
  
    if (e.children[0].innerHTML === "" && win === false) {
      boxClicks++;
      e.children[0].innerHTML = playerTurn();
      if (playerTurn() === "X") {
        turnshow.innerHTML = "Turn Of O<hr>";
      } else {
        turnshow.innerHTML = "Turn Of X<hr>";
      }
      change();
      winCheck();
    } else {
      return;
    }
  });
});

function gameReset() {
  console.log(boxClicks);
  console.log(draw);
  draw = false;
  ptv = "O";
  winner = "";
  win = false;
  boxClicks=0;
  turnshow.style.color="#531abe"
  turnshow.innerHTML = "Turn Of X<hr>";
  winshow.innerHTML = "";

  boxes.forEach((e) => {
    e.children[0].innerHTML = "";
  });
}
