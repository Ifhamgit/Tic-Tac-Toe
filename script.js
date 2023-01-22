

let audioTurn = new Audio("Sound Effects/Click.m4a")
let win = new Audio("Sound Effects/Win.m4a")
let turn = "X"
let gameover = false;
let won = false;


const changeTurn =()=> {

    return turn ==="X"?"O": "X"


}


const checkWin =()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,13.5,5,0],
        [3,4,5,13.5,15,0],
        [6,7,8,13.5,25,0],
        [0,3,6,3.2,15,90],
        [1,4,7,13.3,15,90],
        [2,5,8,23.5,15,90],
        [0,4,8,13.5,15,45],
        [2,4,6,13.5,15,-45],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText!== "" ){
            document.querySelector(".info").innerText = "Player " + boxtext[e[0]].innerText + " wins"
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "500px";
            document.querySelector(".line").style.width = "20vw" 
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            won = true;
            win.play();

            
        }

    })

}

let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    
    element.addEventListener('click', ()=>{
        if(boxtext.innerText=== '' && !won){
            boxtext.innerText = turn;
            
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = turn +"'s turn";
            }
          }

    })
})



reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext')

    Array.from(boxtext).forEach(element =>{
        element.innerText = ''
        
    })
    turn ="X"
    gameover = false;
    won = false;
    document.getElementsByClassName("info")[0].innerText = "X's turn";
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
    document.querySelector(".line").style.width = "0vw" 
})