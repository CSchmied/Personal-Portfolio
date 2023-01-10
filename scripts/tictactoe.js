// DECLARING ALL VARIABLES USED
let turnCounter = 0;

let box1 = document.getElementById("box1"),
  box2 = document.getElementById("box2"),
  box3 = document.getElementById("box3"),
  box4 = document.getElementById("box4"),
  box5 = document.getElementById("box5"),
  box6 = document.getElementById("box6"),
  box7 = document.getElementById("box7"),
  box8 = document.getElementById("box8"),
  box9 = document.getElementById("box9");

let userbox2 = false;
let userbox3 = false;
let userbox4 = false;
let userbox5 = false;
let userbox6 = false;
let userbox7 = false;
let userbox8 = false;
let userbox9 = false;

let show = "",
  turn = 1;

let title = document.getElementById("ttTitle");
title.textContent = "Welcome to Auburn Tic Tac Toe";

let option = document.getElementById("option_modal");
let twoPlayer = document.getElementById("twoPlayer");
let onePlayer = document.getElementById("onePlayer");
let isOnePlayer = false;
let draw = false;

// DISPLAY FIRST MODAL FOR PLAYER TO SELECT GAME
option.style.display = "block";

onePlayer.addEventListener("click", function () {
  console.log("Something")
  option.style.display = "none";
  isOnePlayer = true;
  singlePlayer();
});

twoPlayer.addEventListener("click", function () {
  option.style.display = "none";
  multiPlayer();
});

function singlePlayer() {
  turnCounter++;
  console.log(turnCounter);
  // aubie = "<img src='../images/Mascot1.png' height='135px' width='130px'>";
  // eagle = "<img src='../images/eagle.png' height='135px' width='130px'>";
  title.textContent = "Can you beat Robot Bowen?"
  if (turnCounter == 1) {
    box1.textContent = "X";
    box1.style.pointerEvents = "none";
    turn = 2;
  }
  if (turn == 1) {
    // FIRST MOVE FOR THE USER
    if (turnCounter == 2) {
      if (box2.textContent == "O") {
        // box4.innerHTML = aubie;
        box7.textContent = "X";
        box7.style.pointerEvents = "none";
        turn = 2;
        userbox2 = true;
        singlePlayer();
      }

      if (box3.textContent == "O") {
        box9.textContent = "X";
        box9.style.pointerEvents = "none";
        turn = 2;
        userbox3 = true;
        singlePlayer();
      }

      if (box4.textContent == "O") {
        box3.textContent = "X";
        box3.style.pointerEvents = "none";
        turn = 2;
        userbox4 = true;
        singlePlayer();
      }

      if (box5.textContent == "O") {
        box9.textContent = "X";
        box9.style.pointerEvents = "none";
        turn = 2;
        userbox5 = true;
        singlePlayer();
      }

      if (box6.textContent == "O") {
        box7.textContent = "X";
        box7.style.pointerEvents = "none";
        turn = 2;
        userbox6 = true;
        singlePlayer();
      }

      if (box7.textContent == "O") {
        box9.textContent = "X";
        box9.style.pointerEvents = "none";
        turn = 2;
        userbox7 = true;
        singlePlayer();
      }

      if (box8.textContent == "O") {
        box3.textContent = "X";
        box3.style.pointerEvents = "none";
        turn = 2;
        userbox8 = true;
        singlePlayer();
      }

      if (box9.textContent == "O") {
        box3.textContent = "X";
        box3.style.pointerEvents = "none";
        turn = 2;
        userbox9 = true;
        singlePlayer();
      }
    }
    // TURN AFTER USER SELECTS BOX2 THE FIRST TURN
    if (userbox2 == true) {
      if (turnCounter == 4) {
        if (box4.textContent == "O") {
          box5.textContent = "X";
          box5.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box4.textContent != "O") {
          box4.textContent = "X";
          box4.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
      if (turnCounter == 7) {
        if (box3.textContent == "O") {
          box9.textContent = "X";
          box9.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box9.textContent == "O") {
          box3.textContent = "X";
          box3.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box8.textContent == "O") {
          box9.textContent = "X";
          box9.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box6.textContent == "O") {
          box3.textContent = "X";
          box3.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
    }
    // TURNS AFTER USER SELECTS BOX3 THE FIRST TURN
    if (userbox3 == true) {
      if (turnCounter == 4) {
        if (box5.textContent == "O") {
          box7.textContent = "X";
          box7.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box5.textContent != "O") {
          box5.textContent = "X";
          box5.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
      if (turnCounter == 7) {
        if (box4.textContent == "O") {
          box8.textContent = "X";
          box8.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box8.textContent == "O") {
          box4.textContent = "X";
          box4.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box2.textContent == "O") {
          box8.textContent = "X";
          box8.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box6.textContent == "O") {
          box4.textContent = "X";
          box4.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
    }
    // TURNS AFTER USER SELECTS BOX4 THE FIRST TURN
    if (userbox4 == true) {
      if (turnCounter == 4) {
        if (box2.textContent == "O") {
          box5.textContent = "X";
          box5.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box2.textContent != "O") {
          box2.textContent = "X";
          box2.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
      if (turnCounter == 7) {
        if (box7.textContent == "O") {
          box9.textContent = "X";
          box9.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box9.textContent == "O") {
          box7.textContent = "X";
          box7.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box6.textContent == "O") {
          box9.textContent = "X";
          box9.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box8.textContent == "O") {
          box7.textContent = "X";
          box7.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
    }
    // TURNS AFTER USER SELECTS BOX5 THE FIRST TURN
    if (userbox5 == true) {
      if (turnCounter == 4) {
        if (box3.textContent == "O") {
          box7.textContent = "X";
          box7.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box7.textContent == "O") {
          box3.textContent = "X";
          box3.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }

        // WILL RESULTS IN MORE TURNS THAT BEFORE
        if (box2.textContent == "O") {
          box8.textContent = "X";
          box8.style.pointerEvents = "none";
          turn = 2;
          draw = true;
          singlePlayer();
        }
        if (box4.textContent == "O") {
          box6.textContent = "X";
          box6.style.pointerEvents = "none";
          turn = 2;
          draw = true;
          singlePlayer();
        }
        if (box6.textContent == "O") {
          box4.textContent = "X";
          box4.style.pointerEvents = "none";
          turn = 2;
          draw = true;
          singlePlayer();
        }
        if (box8.textContent == "O") {
          box2.textContent = "X";
          box2.style.pointerEvents = "none";
          turn = 2;
          draw = true;
          singlePlayer();
        }
      }
      if (turnCounter == 7) {
        if (draw == true) {
          if (box7.textContent == "O") {
            box3.textContent = "X";
            box3.style.pointerEvents = "none";
            turn = 2;
            singlePlayer();
          }
          if (box7.textContent != "O") {
            box7.textContent = "X";
            box7.style.pointerEvents = "none";
            turn = 2;
            singlePlayer();
          }
          if (box3.textContent == "O") {
            box7.textContent = "X";
            box7.style.pointerEvents = "none";
            turn = 2;
            singlePlayer();
          }
          if (box3.textContent != "O") {
            box3.textContent = "X";
            box3.style.pointerEvents = "none";
            turn = 2;
            singlePlayer();
          }
        }
        // USER MAKES WRONG CHOICE RESULTING IN A LOSS FOR THEM
        else if (draw == false) {
          if (box4.textContent == "O") {
            box8.textContent = "X";
            box8.style.pointerEvents = "none";
            turn = 2;
            singlePlayer();
          }
          if (box8.textContent == "O") {
            box4.textContent = "X";
            box4.style.pointerEvents = "none";
            turn = 2;
            singlePlayer();
          }
          if (box2.textContent == "O") {
            box6.textContent = "X";
            box6.style.pointerEvents = "none";
            turn = 2;
            singlePlayer();
          }
          if (box6.textContent == "O") {
            box2.textContent = "X";
            box2.style.pointerEvents = "none";
            turn = 2;
            singlePlayer();
          }
        }
      }
      if (turnCounter == 12) {
        if (box4.textContent == "O") {
          box6.textContent = "X";
          box6.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box6.textContent == "O") {
          box4.textContent = "X";
          box4.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box2.textContent == "O") {
          box8.textContent = "X";
          box8.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box8.textContent == "O") {
          box2.textContent = "X";
          box2.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
    }
    // TURNS AFTER USER SELECTS BOX6 THE FIRST TURN
    if (userbox6 == true) {
      if (turnCounter == 4) {
        if (box4.textContent == "O") {
          box5.textContent = "X";
          box5.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box4.textContent != "O") {
          box4.textContent = "X";
          box4.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
      if (turnCounter == 7) {
        if (box3.textContent == "O") {
          box9.textContent = "X";
          box9.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box9.textContent == "O") {
          box3.textContent = "X";
          box3.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }

        if (box2.textContent == "O") {
          box3.textContent = "X";
          box3.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box8.textContent == "O") {
          box3.textContent = "X";
          box3.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
    }
    // TURNS AFTER USER SELECTS BOX7 THE FIRST TURN
    if (userbox7 == true) {
      if (turnCounter == 4) {
        if (box5.textContent == "O") {
          box3.textContent = "X";
          box3.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box5.textContent != "O") {
          box5.textContent = "X";
          box5.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
      if (turnCounter == 7) {
        if (box2.textContent == "O") {
          box6.textContent = "X";
          box6.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box6.textContent == "O") {
          box2.textContent = "X";
          box2.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box4.textContent == "O") {
          box6.textContent = "X";
          box6.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box8.textContent == "O") {
          box2.textContent = "X";
          box2.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
    }
    // TURNS AFTER USER SELECTS BOX8 THE FIRST TURN
    if (userbox8 == true) {
      if (turnCounter == 4) {
        if (box2.textContent == "O") {
          box5.textContent = "X";
          box5.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box2.textContent != "O") {
          box2.textContent = "X";
          box2.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
      if (turnCounter == 7) {
        if (box7.textContent == "O") {
          box9.textContent = "X";
          box9.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box9.textContent == "O") {
          box7.textContent = "X";
          box7.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box4.textContent == "O") {
          box9.textContent = "X";
          box9.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box6.textContent == "O") {
          box7.textContent = "X";
          box7.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
    }
    // TURNS AFTER USER SELECTS BOX9 THE FIRST TURN
    if (userbox9 == true) {
      if (turnCounter == 4) {
        if (box2.textContent == "O") {
          box7.textContent = "X";
          box7.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box2.textContent != "O") {
          box2.textContent = "X";
          box2.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
      if (turnCounter == 7) {
        if (box5.textContent == "O") {
          box4.textContent = "X";
          box4.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box4.textContent == "O") {
          box5.textContent = "X";
          box5.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box6.textContent == "O") {
          box4.textContent = "X";
          box4.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
        if (box8.textContent == "O") {
          box5.textContent = "X";
          box5.style.pointerEvents = "none";
          turn = 2;
          singlePlayer();
        }
      }
    }
  } else if (turn == 2) {
    box1.addEventListener("click", function () {
      box1.textContent = "O";
      box1.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
    box2.addEventListener("click", function () {
      box2.textContent = "O";
      box2.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
    box3.addEventListener("click", function () {
      box3.textContent = "O";
      box3.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
    box4.addEventListener("click", function () {
      box4.textContent = "O";
      box4.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
    box5.addEventListener("click", function () {
      box5.textContent = "O";
      box5.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
    box6.addEventListener("click", function () {
      box6.textContent = "O";
      box6.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
    box7.addEventListener("click", function () {
      box7.textContent = "O";
      box7.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
    box8.addEventListener("click", function () {
      box8.textContent = "O";
      box8.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
    box9.addEventListener("click", function () {
      box9.textContent = "O";
      box9.style.pointerEvents = "none";
      turn = 1;
      singlePlayer();
    });
  }
  checkForWin();
}

function multiPlayer() {
  // Tracking the clicks of the buttons
  box1.addEventListener("click", function () {
    selectBoard("box1");
  });
  box2.addEventListener("click", function () {
    selectBoard("box2");
  });
  box3.addEventListener("click", function () {
    selectBoard("box3");
  });
  box4.addEventListener("click", function () {
    selectBoard("box4");
  });
  box5.addEventListener("click", function () {
    selectBoard("box5");
  });
  box6.addEventListener("click", function () {
    selectBoard("box6");
  });
  box7.addEventListener("click", function () {
    selectBoard("box7");
  });
  box8.addEventListener("click", function () {
    selectBoard("box8");
  });
  box9.addEventListener("click", function () {
    selectBoard("box9");
  });

  function selectBoard(selected) {
    // When turn is 1, that means it is aubie's turn to select a box
    // Then reset turn to 2, so eagle will be next
    if (turn == 1) {
      show = "<img src='../images/Mascot1.png' height='135px' width='130px'>";

      title.textContent = "Eagle's Turn";
      turn = 2;
      turnCounter++;
      console.log("Player 1");
      console.log(turnCounter);
    }

    // When turn is 2, eagle's can choose a box
    // Then reset turn to 1, so aubie will be next
    else if (turn == 2) {
      show = "<img src='../images/eagle.png' height='135px' width='130px'>";
      title.textContent = "Aubie's Turn";
      turn = 1;
      turnCounter++;
      console.log("PLayer 2");
      console.log(turnCounter);
    }

    // Inserting the variable show into the box to appear "X" or "O"
    document.getElementById(selected).innerHTML = show;

    // Hopefully disables the click after initial click
    document.getElementById(selected).style.pointerEvents = "none";

    checkForWin();
  }
}

// This function is check to see if someone has 3 in a row to win or not
function checkForWin() {
  // Checks for horizontal wins
  if (
    box1.innerHTML == box2.innerHTML &&
    box1.innerHTML == box3.innerHTML &&
    box1.innerHTML != ""
  ) {
    console.log("Horizontal Win 1");
    winner();
  } else if (
    box4.innerHTML == box5.innerHTML &&
    box4.innerHTML == box6.innerHTML &&
    box4.innerHTML != ""
  ) {
    console.log("Horizontal Win 2");
    winner();
  } else if (
    box7.innerHTML == box8.innerHTML &&
    box7.innerHTML == box9.innerHTML &&
    box7.innerHTML != ""
  ) {
    console.log("Horizontal Win 3");
    winner();
  }

  //  Check for vertical wins
  else if (
    box1.innerHTML == box4.innerHTML &&
    box1.innerHTML == box7.innerHTML &&
    box1.innerHTML != ""
  ) {
    console.log("Vertical Win 1");
    winner();
  } else if (
    box2.innerHTML == box5.innerHTML &&
    box2.innerHTML == box8.innerHTML &&
    box2.innerHTML != ""
  ) {
    console.log("Vertical Win 2");
    winner();
  } else if (
    box3.innerHTML == box6.innerHTML &&
    box3.innerHTML == box9.innerHTML &&
    box3.innerHTML != ""
  ) {
    console.log("Vertical Win 3");
    winner();
  }

  //  Check for diagonal wins
  else if (
    box1.innerHTML == box5.innerHTML &&
    box1.innerHTML == box9.innerHTML &&
    box1.innerHTML != ""
  ) {
    console.log("Diagonal Win 1");
    winner();
  } else if (
    box3.innerHTML == box5.innerHTML &&
    box3.innerHTML == box7.innerHTML &&
    box3.innerHTML != ""
  ) {
    console.log("Diagonal Win 2");
    winner();
  }

  // If all boxes are check and there is no 3 in a row, Game ends in a tie
  else if (
    box1.innerHTML != "" &&
    box2.innerHTML != "" &&
    box3.innerHTML != "" &&
    box4.innerHTML != "" &&
    box5.innerHTML != "" &&
    box6.innerHTML != "" &&
    box7.innerHTML != "" &&
    box8.innerHTML != "" &&
    box9.innerHTML != ""
  ) {
    console.log("Game Ends in a Tie");
    tie();
  }
}

// Prints the modal showing the result of the game and then player can select the reset button to play again
function winner() {
  victory = document.getElementById("modal");
  modal_title = document.getElementById("modal-title");
  modal_body = document.getElementById("modal-body");
  button = document.getElementById("reset");

  // Display modal
  victory.style.display = "block";

  if (isOnePlayer == true) {
    modal_title.textContent = "CONGRATULATIONS!!";
    if (turn == 2) {
      modal_body.textContent = "User WINS";
    } else {
      modal_body.textContent = "Robot Bowen Outsmarted You";
    }
  } else if (isOnePlayer == false) {
    // Print the winner based off which turn was last
    modal_title.textContent = "CONGRATULATIONS!!";
    if (turn == 2) {
      modal_body.textContent = "Aubie WINS";
    } else {
      modal_body.textContent = "Eagle WINS";
    }
  }

  console.log("Victory");

  button.addEventListener("click", closeModal);
}

function tie() {
  victory = document.getElementById("modal");
  modal_title = document.getElementById("modal-title");
  modal_body = document.getElementById("modal-body");
  button = document.getElementById("reset");

  // Display modal
  victory.style.display = "block";

  // Determine if there was a winner or if it ended in a tie
  modal_title.textContent = "Game Ends in Tie";
  modal_body.textContent = "Both players are losers";

  button.addEventListener("click", closeModal);
}

function closeModal() {
  window.location.reload();
}
