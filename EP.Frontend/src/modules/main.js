import { getAllscores, addScore } from "./scorerequest";
import { displayScores } from "./gui";

getAllscores().then(displayScores);

let correctGuess = Math.floor(Math.random()*3)+1;
//console.log(correctGuess);
let points = 0;

const formGuess = document.querySelector('form');
//console.log(formGuess);

formGuess.addEventListener('submit', getUsersGuess)

function getUsersGuess(event){
    event.preventDefault();
    const userGuess = document.querySelector('input').value;
    //console.log(userGuess);
    formGuess.reset();

    const resultEl = document.querySelector('#resultEl');
    
    if (correctGuess == userGuess){
        points++;
        resultEl.innerText =`Rätt! Du har ${points} poäng`;
        correctGuess = Math.floor(Math.random()*3)+1;
        //console.log("Datorn tänker på" + correctGuess)


    }
    else if (userGuess !== correctGuess){
        resultEl.innerText =`Fel! Du nådde ${points} poäng.`;

        const userName = prompt("Ange ditt namn för att läggas till i highscore listan");
        
        
        //console.log(userName);

        const scoresToAdd = {
            name: userName, 
            score: points
        };
        // console.log(scoresToAdd)
        addScore(scoresToAdd).then(displayScores);

        points = 0;

        resultEl.innerText = "Gissa igen för att påbörja ett nytt spel";
        correctGuess = Math.floor(Math.random()*3)+1;
        //console.log("Datorn tänker på" + correctGuess)
    }
}