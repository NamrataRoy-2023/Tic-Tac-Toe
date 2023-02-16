console.log("welcome to tic-tac-toe");
let win = new Audio("sound/win.mp3");
let click = new Audio("sound/clicked.wav");
let gameover = new Audio("sound/gameover.wav");
let turn = "X";
let over = false;

//FUNCTION TO CHANGE TURN
const changeTurn =()=>{
    return turn === "X"?"0": "X";
}

//FUNCTION TO CHECK FOR A WIN
const checkForWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e =>{
        if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !== ''){
            document.querySelector('.info').innerText = "Congratulations!!! " + boxtexts[e[0]].innerText + "  WON the Match";
            over = true;
            win.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '250px'; 
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "21.5vw"
        // }else if((boxtexts[e[0]].innerText !== boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !== '') || (boxtexts[e[0]].innerText !== boxtexts[e[1]].innerText && boxtexts[e[1]].innerText !== boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !== '')){
        //     document.querySelector('.info').innerText = " Game DRAW!!! Try Again";
        //     over = true;
        //     gameover.play();
        }
    })

}

//MAIN LOGIC FOR GAME
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            click.play();
            checkForWin();
            if(!over){
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn + ". All the Best!!!!!";
            }

        }
    })
})

//START BUTTON
start.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
        turn = "X";
        over = false;
        document.getElementsByClassName('info')[0].innerText = "Turn For " + turn + " All the Best!!!!!";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'; 
        document.querySelector('.line').style.width = "0vw"
    })
})