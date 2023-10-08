const computerChoiceDisplay = document.getElementById('computer-choice-all');
const userChoiceDisplay = document.getElementById('user-choice-all');
const resultDisplay = document.getElementById('result-all');
const possibleChoices = document.querySelectorAll('button');

let userChoice
let computerChoice
let result

possibleChoices.forEach(p=>p.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
    alert(computerChoice+" + "+userChoice+"="+result)

}))

const generateComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(possibleChoices);
    if (randomNumber === 1) {
        computerChoice = 'rock 🤘'
      }
     else if (randomNumber === 2) {
        computerChoice = 'scissors ✌️'
      }
     else if (randomNumber === 3) {
        computerChoice = 'paper 🫱'
      }
      computerChoiceDisplay.innerHTML=computerChoice;


}

const getResult=()=>{
    if (computerChoice === userChoice) {
        result = 'its a draw!'
      }
      if (computerChoice === 'rock 🤘' && userChoice === "paper 🫱") {
        result = 'you win!'
      }
      if (computerChoice === 'rock 🤘' && userChoice === "scissors ✌️") {
        result = 'you lost!'
      }
      if (computerChoice === 'paper 🫱' && userChoice === "scissors ✌️") {
        result = 'you win!'
      }
      if (computerChoice === 'paper 🫱' && userChoice === "rock 🤘") {
        result = 'you lose!'
      }
      if (computerChoice === 'scissors ✌️' && userChoice === "rock 🤘") {
        result = 'you win!'
      }
      if (computerChoice === 'scissors ✌️' && userChoice === "paper 🫱") {
        result = 'you lose!'
      }
      resultDisplay.innerHTML=result;
}