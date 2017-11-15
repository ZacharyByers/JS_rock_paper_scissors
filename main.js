function chooseWinner(user, comp) {
  switch(user) {
    case 1:
      switch(comp) {
        case 1:
          compChoiceText.innerHTML = "The computer chose rock."
          return 3;
        case 2:
          compChoiceText.innerHTML = "The computer chose paper."
          return 2;
        case 3:
          compChoiceText.innerHTML = "The computer chose Scizor."
          return 1;
      }
    case 2:
      switch(comp) {
        case 1:
          compChoiceText.innerHTML = "The computer chose rock."
          return 1;
        case 2:
          compChoiceText.innerHTML = "The computer chose paper."
          return 3;
        case 3:
          compChoiceText.innerHTML = "The computer chose Scizor."
          return 2;
      }
    case 3:
      switch(comp) {
        case 1:
          compChoiceText.innerHTML = "The computer chose rock."
          return 2;
        case 2:
          compChoiceText.innerHTML = "The computer chose paper."
          return 1;
        case 3:
          compChoiceText.innerHTML = "The computer chose Scizor."
          return 3;
      }
  }
}

function winner(result) {
  winTallyText.innerHTML = winTally
  lossTallyText.innerHTML = lossTally
  tieTallyText.innerHTML = tieTally
  switch(result) {
    case 1:
      winTally++;
      winTallyText.innerHTML = winTally;
      resultText.innerHTML = "You won!";
      break;
    case 2:
      lossTally++;
      lossTallyText.innerHTML = lossTally;
      resultText.innerHTML = "You lost."
      break;
    case 3:
      tieTally++;
      tieTallyText.innerHTML = tieTally;
      resultText.innerHTML = "It's a tie!"
      break;
  }
}

var pic1 = document.getElementById('pic1')
var pic2 = document.getElementById('pic2')
var pic3 = document.getElementById('pic3')
var resultText = document.getElementById('result')
var compChoiceText = document.getElementById('compChoice')
var winTallyText = document.getElementById('wins')
var lossTallyText = document.getElementById('losses')
var tieTallyText = document.getElementById('ties')

var winTally = 0
var lossTally = 0
var tieTally = 0

var userChoice;
var computerChoice;
var win;



pic1.addEventListener('click', function() {
  userChoice = 1
  computerChoice = Math.ceil(Math.random() * 3 )
  win = chooseWinner(userChoice, computerChoice)
  winner(win)
})

pic2.addEventListener('click', function() {
  userChoice = 2
  computerChoice = Math.ceil(Math.random() * 3 )
  win = chooseWinner(userChoice, computerChoice)
  winner(win)
})

pic3.addEventListener('click', function() {
  userChoice = 3
  computerChoice = Math.ceil(Math.random() * 3 )
  win = chooseWinner(userChoice, computerChoice)
  winner(win)
})
