let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newGamebtn = document.querySelector("#newgame");
let messege = document.querySelector(".msg-container");
let msgpara = document.querySelector(".msg");
let turn0 = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turn0 = true;
  enabledBox();
  messege.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.remove("xColor", "oColor");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    if (box.innerText == "X") {
      box.classList.add("xColor");
    } else if (box.innerText == "O") {
      box.classList.add("oColor");
    }
    box.disabled = true;
    checkWinner();
  });
});
const disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  messege.innerText = `Congratulations winner is ${winner}`;
  messege.classList.remove("hide");
  disabledBox();
};
const draw = () => {
  messege.innerText = "It's a DRAW!"; // Update the message text
  messege.classList.remove("hide"); // Show the message container
  disabledBox(); // Disable all boxes to prevent further moves
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        showWinner(pos1val);
        return;
      }
    }
  }
  let isDraw = [...boxes].every((box) => box.innerText != "");
  if (isDraw) {
    draw();
  }
};
newGamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
