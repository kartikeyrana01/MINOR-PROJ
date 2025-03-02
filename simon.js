let gameSeq = [];
let userSeq = [];

let btns = ["RED", "PURPLE", "GREEN", "YELLOW"];
let started = false;
let level = 0;



let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});


function Gameflash(btn){
    // if (!btn) {
    //     console.error("Error: btn is null or undefined");
    //     return;
    // }
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn){
    // if (!btn) {
    //     console.error("Error: btn is null or undefined");
    //     return;
    // }
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash")
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
   
    //random button choose
    let randIdx = Math.floor(Math.random() * 3);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    // console.log(randBtn); 
    // console.log(randClr);
    // console.log(randIdx);
    gameSeq.push(randClr);
    console.log(gameSeq);

    Gameflash(randBtn);
}

function checkAns(idx){
    // console.log("curr 
    
    if (userSeq[idx] == gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000)
        }
}else{
    h2.innerHTML= `game over!! </b>${level}</b>  <br> press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
}}
function btnpress(){
   
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
};

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;}