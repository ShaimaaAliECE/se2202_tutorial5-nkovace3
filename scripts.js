let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let p1=document.querySelector("#next-lbl");
p1.innerHTML=nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    let squares=document.querySelectorAll("td");
    let brackets=`<button id='edit-btn'>[ ]</button>`;

    for(let i=0;i<squares.length;i++){
        squares[i].innerHTML=brackets;
    }
    
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    
    let buttonClick=event.target;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    if(buttonClick.innerHTML==="[ ]"){
        if(nextPlayer==='X'){
            buttonClick.innerHTML="["+ nextPlayer +"]";
            nextPlayer="O";
            buttonClick.disabled=true;
            p1.innerHTML=nextPlayer;
        }

        else if(nextPlayer==='O'){
            buttonClick.innerText="["+nextPlayer+"]";
            nextPlayer="X";
            buttonClick.disabled=true;
            p1.innerHTML=nextPlayer;
        }

    }
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOverSign=document.querySelector("#game-over-lbl");
        gameOverSign.innerHTML=`<h1>Game Over</h1>`;
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   
    let disBtnNum=0;

    for(i in btns){
        if(btns[i].disabled===true){
            disBtnNum++;
        }
    }
    if(disBtnNum==9){
        return true;
    }
    else{
        return false;
    }
}
