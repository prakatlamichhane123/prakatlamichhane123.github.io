const boxes = document.querySelectorAll(".box");
const winshow = document.querySelector(".winshow");
const turnshow = document.querySelector(".turnshow");
let ptv = "O";
let win = false;
let winner;
let  wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 6, 6],
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
      e.removeEventListener('click',function(){});
    }
  });
}

boxes.forEach((e) => {
  e.addEventListener("click", () => {
    e.children[0].innerHTML = playerTurn();
    if (playerTurn() === "X") {
      turnshow.innerHTML = "Turn Of O<hr>";
    } else {
      turnshow.innerHTML = "Turn Of X<hr>";
    }
    change();
    winCheck();
  });
});


function gameReset(){


  boxes.forEach((e) => {
    
      e.children[0].innerHTML="";
      win=false;
      winner="";
      ptv="O";
      turnshow.innerHTML = "Turn Of X<hr>";
      winshow.innerHTML="";
 
  })


}