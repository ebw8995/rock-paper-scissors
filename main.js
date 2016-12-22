var options = ["Rock", "Paper", "Scissors"];

var randomIndex = function() {
  var index = Math.floor(Math.random() * options.length);
  return options[index];
}

function updateMessages(userChoice, compChoice) {
  document.getElementById("user-message").style.display = "block";
  document.getElementById("computer-message").style.display = "block";

  document.getElementById("user-choice").innerHTML = userChoice;
  document.getElementById("computer-choice").innerHTML = compChoice;
}

function buttonClickRock() {
  var computerChoice = randomIndex();

  updateMessages("ROCK", computerChoice);

  var result = ""

  if (computerChoice === "Rock") {
    result = "You Tie!";
  } else if (computerChoice === "Paper"){
    result = "You Lost!";
  } else {
    result = "You Won!";
  }

    setTimeout(function() {
    document.getElementById("result").innerHTML = result;
  }, 2000);
}

function buttonClickPaper() {
  var computerChoice = randomIndex();
  updateMessages("PAPER", computerChoice);

  var result = ""

  if (computerChoice === "Paper") {
    result = "You Tie!";
  } else if (computerChoice === "Scissors"){
    result = "You Lost!";
  } else {
    result = "You Won!";
  }

     setTimeout(function() {
    document.getElementById("result").innerHTML = result;
  }, 2000);
}

function buttonClickScissors() {
  var computerChoice = randomIndex();
  updateMessages("SCISSORS", computerChoice);

  var result = ""

  if (computerChoice === "Scissors") {
    result = "You Tie!";
  } else if (computerChoice === "Rock"){
    result = "You Lost!";
  } else {
    result = "You Won!";
  }

  document.getElementById("result").innerHTML = result;

          setTimeout(function() {
    document.getElementById("result").innerHTML = result;
  }, 2000);
}
