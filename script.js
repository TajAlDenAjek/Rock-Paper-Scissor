var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const socreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");


function getComputerChoice()
{
  const choices=['r','p','s'];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function convert(s)
{
  if(s=="r")
    return "Rock";
  if(s=="p")
    return "Paper";
  if(s=="s")
    return "Scissor";
}
const smallWordUser="user".fontsize(3).sub();
const smallWordComp="comp".fontsize(3).sub();
function win(u,c)
{
  userScore++;
  userScore_span.innerHTML=userScore;
  result_p.innerHTML= convert(u)+smallWordUser + " Beats " + convert(c)+smallWordComp + " You Won !";
  const animation=document.getElementById(u);
  animation.classList.add('green-glow');
  setTimeout(()=>{animation.classList.remove('green-glow')},300);
}
function lose(u,c)
{
  computerScore++;
  computerScore_span.innerHTML=computerScore;
  result_p.innerHTML=` ${convert(u)}${smallWordUser} loses to ${convert(c)}${smallWordComp} You lost ...`;
  const animation=document.getElementById(u);
  animation.classList.add('red-glow');
  setTimeout(()=>{animation.classList.remove('red-glow')},300);
}

function draw(u,c)
{
  result_p.innerHTML=` ${convert(u)}${smallWordUser} equals ${convert(c)}${smallWordComp} Round Draw`;
  const animation=document.getElementById(u);
  animation.classList.add('gray-glow');
  setTimeout(()=>{animation.classList.remove('gray-glow')},300);
}

function game(userChoice)
{
  const computerChoice=getComputerChoice();
  switch (userChoice+computerChoice)
  {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;
  }
}

function main()
{
  rock_div.addEventListener("click",()=>{game("r");});
  paper_div.addEventListener("click",()=>{game("p");})
  scissors_div.addEventListener("click",()=>{game("s");});
}
main();
